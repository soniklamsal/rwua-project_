'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Building, Tag, ExternalLink, Clock } from 'lucide-react';
import { Vacancy } from '@/lib/data';

interface ModernVacancyCardProps {
  vacancy: Vacancy;
}

export default function ModernVacancyCard({ vacancy }: ModernVacancyCardProps) {
  const [imageError, setImageError] = useState(false);

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'management': 'bg-blue-100 text-blue-700',
      'finance': 'bg-green-100 text-green-700',
      'administration': 'bg-purple-100 text-purple-700',
      'field work': 'bg-orange-100 text-orange-700',
      'monitoring': 'bg-indigo-100 text-indigo-700',
      'communications': 'bg-pink-100 text-pink-700',
      'community': 'bg-teal-100 text-teal-700',
      'development': 'bg-cyan-100 text-cyan-700',
      'leadership': 'bg-red-100 text-red-700',
      'budgeting': 'bg-yellow-100 text-yellow-700',
      'compliance': 'bg-gray-100 text-gray-700',
      'women': 'bg-rose-100 text-rose-700',
      'empowerment': 'bg-violet-100 text-violet-700',
      'training': 'bg-lime-100 text-lime-700',
      'evaluation': 'bg-emerald-100 text-emerald-700',
      'reporting': 'bg-amber-100 text-amber-700',
      'quality': 'bg-slate-100 text-slate-700',
      'media': 'bg-fuchsia-100 text-fuchsia-700',
      'content': 'bg-sky-100 text-sky-700',
      'advocacy': 'bg-stone-100 text-stone-700',
      'education': 'bg-green-100 text-green-700',
      'coordination': 'bg-blue-100 text-blue-700',
      'literacy': 'bg-purple-100 text-purple-700'
    };
    return colors[tag] || 'bg-gray-100 text-gray-700';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining(vacancy.deadline);
  const isUrgent = daysRemaining <= 7;
  const isExpired = daysRemaining < 0;

  const getDepartmentGradient = (department: string) => {
    const gradients: { [key: string]: string } = {
      'Programs': 'from-blue-500 to-purple-500',
      'Finance': 'from-green-400 to-blue-500',
      'Field Operations': 'from-orange-400 to-pink-500',
      'M&E': 'from-purple-500 to-pink-500',
      'Communications': 'from-red-400 to-pink-500'
    };
    return gradients[department] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        {vacancy.image && !imageError ? (
          <Image
            src={vacancy.image}
            alt={vacancy.position}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-r ${getDepartmentGradient(vacancy.department)} flex items-center justify-center`}>
            <div className="text-white text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium">{vacancy.department}</p>
            </div>
          </div>
        )}
        
        {/* Department Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium">
            {vacancy.department}
          </span>
        </div>

        {/* Urgency Indicator */}
        <div className="absolute top-4 right-4">
          {!isExpired && (
            <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              isUrgent 
                ? 'bg-red-100 text-red-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              <Clock className="w-3 h-3 mr-1" />
              {isUrgent ? 'Urgent' : `${daysRemaining} days left`}
            </div>
          )}
          
          {isExpired && (
            <div className="flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              <Clock className="w-3 h-3 mr-1" />
              Expired
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Position Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {vacancy.position}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {vacancy.description}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            <span>{vacancy.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Building className="w-4 h-4 mr-2 text-gray-400" />
            <span>{vacancy.department} Department</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span>Deadline: {formatDate(vacancy.deadline)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {vacancy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </span>
          ))}
          {vacancy.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              +{vacancy.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          {/* Status */}
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              isExpired ? 'bg-gray-400' : isUrgent ? 'bg-red-400' : 'bg-green-400'
            }`}></div>
            <span className="text-sm text-gray-600">
              {isExpired ? 'Application Closed' : 'Open for Applications'}
            </span>
          </div>

          {/* Apply Button */}
          <button 
            className={`flex items-center px-4 py-2 rounded-lg transition-colors group ${
              isExpired 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={isExpired}
          >
            <span className="text-sm font-medium">
              {isExpired ? 'Closed' : 'Apply Now'}
            </span>
            {!isExpired && (
              <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}