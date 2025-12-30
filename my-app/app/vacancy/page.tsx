'use client';

import { useState, useEffect } from 'react';
import { vacancies, vacancyDepartments, Vacancy } from '@/lib/data';
import SearchAndFilter from '@/components/ui/SearchAndFilter';
import ModernVacancyCard from '@/components/ui/ModernVacancyCard';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';
import EmptyState from '@/components/ui/EmptyState';

export default function VacancyPage() {
  const [allVacancies, setAllVacancies] = useState<Vacancy[]>([]);
  const [filteredVacancies, setFilteredVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Simulate data loading
  useEffect(() => {
    const loadVacancies = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAllVacancies(vacancies);
      setFilteredVacancies(vacancies);
      setIsLoading(false);
    };

    loadVacancies();
  }, []);

  // Filter vacancies based on search and category
  useEffect(() => {
    let filtered = allVacancies;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(vacancy =>
        vacancy.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vacancy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vacancy.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        vacancy.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply department filter
    if (activeCategory !== 'All') {
      filtered = filtered.filter(vacancy => vacancy.department === activeCategory);
    }

    setFilteredVacancies(filtered);
  }, [allVacancies, searchQuery, activeCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string) => {
    setActiveCategory(category);
  };

  const handleReset = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter Section */}
        <div className="mb-10">
          <SearchAndFilter
            onSearch={handleSearch}
            onFilter={handleFilter}
            categories={vacancyDepartments}
            activeCategory={activeCategory}
            placeholder="Search job opportunities..."
            resultsCount={filteredVacancies.length}
          />
        </div>

        {/* Content Section */}
        {isLoading ? (
          <LoadingSkeleton type="card" count={6} />
        ) : filteredVacancies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVacancies.map((vacancy) => (
              <div key={vacancy.id} className="fade-in">
                <ModernVacancyCard vacancy={vacancy} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            type={searchQuery.trim() || activeCategory !== 'All' ? 'search' : 'no-data'}
            title={searchQuery.trim() || activeCategory !== 'All' ? 'No vacancies found' : 'No job openings available'}
            description={
              searchQuery.trim() || activeCategory !== 'All'
                ? 'No job opportunities found matching your search criteria. Try adjusting your search or filter.'
                : 'No job openings are currently available. Please check back later for new opportunities.'
            }
            searchQuery={searchQuery}
            onReset={handleReset}
            actionLabel="Show All Vacancies"
          />
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2024 RWUA Nepal. Join us in empowering rural communities through sustainable development.</p>
        </footer>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}