'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Share2, Heart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { successStories, SuccessStory } from '@/lib/data';

export default function StoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [story, setStory] = useState<SuccessStory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedStories, setRelatedStories] = useState<SuccessStory[]>([]);

  // Multiple images for the story (using available images)
  const storyImages = [
    '/images/success1.jpg',
    '/images/success2.jpg',
    '/images/vacancy1.jpeg',
    '/images/vacancy2.jpeg',
    '/images/vacancy3.jpg'
  ];

  useEffect(() => {
    const loadStory = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const storyId = params.id as string;
      const foundStory = successStories.find(s => s.id === storyId);
      
      if (foundStory) {
        setStory(foundStory);
        
        // Get related stories (same category, excluding current story)
        const related = successStories
          .filter(s => s.id !== storyId && s.category === foundStory.category)
          .slice(0, 3);
        setRelatedStories(related);
      }
      
      setIsLoading(false);
    };

    loadStory();
  }, [params.id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'community': 'bg-rwua-primary/10 text-rwua-primary',
      'education': 'bg-rwua-secondary/10 text-rwua-secondary',
      'empowerment': 'bg-purple-100 text-purple-700',
      'women': 'bg-pink-100 text-pink-700',
      'health': 'bg-rwua-accent/10 text-rwua-accent',
      'economic': 'bg-yellow-100 text-yellow-700',
      'development': 'bg-rwua-primary/10 text-rwua-primary',
      'dalit': 'bg-orange-100 text-orange-700',
      'entrepreneurship': 'bg-rwua-secondary/10 text-rwua-secondary',
      'skills': 'bg-cyan-100 text-cyan-700',
      'children': 'bg-lime-100 text-lime-700',
      'literacy': 'bg-rwua-secondary/10 text-rwua-secondary',
      'maternal': 'bg-rose-100 text-rose-700',
      'rural': 'bg-amber-100 text-amber-700',
      'healthcare': 'bg-violet-100 text-violet-700'
    };
    return colors[tag] || 'bg-gray-100 text-gray-700';
  };

  const handleShare = async () => {
    if (navigator.share && story) {
      try {
        await navigator.share({
          title: story.title,
          text: story.description.substring(0, 100) + '...',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % storyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + storyImages.length) % storyImages.length);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rwua-neutral-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-gray-200 rounded-xl"></div>
                <div className="h-32 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rwua-neutral-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-rwua-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="w-12 h-12 text-rwua-neutral-400" />
            </div>
            <h1 className="rwua-heading-1 mb-4">Story Not Found</h1>
            <p className="rwua-body mb-8">
              The success story you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/success-story"
              className="btn-primary inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Success Stories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rwua-neutral-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/success-story"
          className="inline-flex items-center rwua-body text-rwua-neutral-600 hover:text-rwua-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Success Stories
        </Link>

        {/* Main Layout - Product Detail Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image Gallery with Decorative Background */}
          <div className="relative">
            {/* Main Image Container with decorative background */}
            <div className="relative bg-gray-50 rounded-2xl p-8">
              {/* Decorative colored triangles */}
              <div className="absolute top-4 right-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-blue-500"></div>
              <div className="absolute top-8 right-12 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-pink-400"></div>
              <div className="absolute top-12 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-yellow-400"></div>
              
              {/* Main Image */}
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={storyImages[currentImageIndex]}
                  alt={`${story.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Navigation Arrows */}
                {storyImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Image Thumbnails */}
            {storyImages.length > 1 && (
              <div className="flex gap-3 mt-4 justify-center">
                {storyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                      index === currentImageIndex 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Story Details (Product Detail Style) */}
          <div className="space-y-6">
            {/* Story Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {story.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {story.description.split('\n\n')[0]}
              </p>
            </div>

            {/* Story Meta Information */}
            <div className="space-y-3 border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Published:</span>
                <span className="text-sm text-gray-600">{formatDate(story.date)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Category:</span>
                <span className="text-sm text-gray-600 capitalize">{story.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Author:</span>
                <span className="text-sm text-gray-600">{story.author}</span>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {story.tags.slice(0, 6).map((tag, index) => {
                  const colors = ['bg-black', 'bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500'];
                  return (
                    <span
                      key={tag}
                      className={`w-6 h-6 rounded-full ${colors[index % colors.length]}`}
                      title={tag.charAt(0).toUpperCase() + tag.slice(1)}
                    ></span>
                  );
                })}
              </div>
            </div>

            {/* Story Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Story Description:</h3>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                {story.description.split('\n\n').slice(1).map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                onClick={handleShare}
                className="flex-1 py-3 px-6 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium"
              >
                Share Story
              </button>
              <Link
                href="/contact"
                className="flex-1 py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-center"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="mt-16">
            <h2 className="rwua-heading-2 mb-8 text-center">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((relatedStory) => (
                <Link
                  key={relatedStory.id}
                  href={`/success-story/${relatedStory.id}`}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-gradient-to-r from-rwua-primary to-rwua-secondary">
                    <Image
                      src={relatedStory.image}
                      alt={relatedStory.title}
                      fill
                      className="object-cover"
                      onError={() => {}}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="rwua-heading-4 mb-3 line-clamp-2 group-hover:text-rwua-primary transition-colors">
                      {relatedStory.title}
                    </h3>
                    <p className="rwua-body-small text-rwua-neutral-600 line-clamp-3 mb-4">
                      {relatedStory.description}
                    </p>
                    <div className="rwua-caption text-rwua-neutral-500">
                      {formatDate(relatedStory.date)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}