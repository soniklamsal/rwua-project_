'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg",
    title: "ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा",
    description: "ग्रामीण महिलाहरूको सशक्तिकरणका लागि आयोजित वार्षिक साधारण सभाको तस्बिरहरू",
    link: "#"
  },
  {
    id: 2,
    image: "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg",
    title: "वियोन द फिनिस लाईन समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रम",
    description: "स्वच्छ खानेपानी पहुँचका लागि सञ्चालित कार्यक्रमका गतिविधिहरू",
    link: "#"
  },
  {
    id: 3,
    image: "https://rwua.com.np/wp-content/uploads/2020/01/13.jpg",
    title: "न्यानो कम्मल बितरण",
    description: "जाडो मौसममा बिपन्न परिवारहरूलाई न्यानो कम्बल वितरण कार्यक्रम",
    link: "#"
  },
  {
    id: 4,
    image: "https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png",
    title: "हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण",
    description: "सिमान्तकृत दलित तथा मुसहर समुदायलाई लक्षित गरी न्यानो कम्बल वितरण",
    link: "#"
  },
  {
    id: 5,
    image: "https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg",
    title: "बालक्लब गठन तथा बालबालिकाको अधिकार",
    description: "बालबालिकाको अधिकार संरक्षणका लागि बालक्लब गठन कार्यक्रम",
    link: "#"
  },
  {
    id: 6,
    image: "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg",
    title: "सामुदायिक विकास कार्यक्रम",
    description: "स्थानीय समुदायको विकासका लागि सञ्चालित विभिन्न कार्यक्रमहरू",
    link: "#"
  }
];

export default function Gallery() {
  const [items, setItems] = useState(galleryItems);

  const nextSlide = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      if (firstItem) {
        newItems.push(firstItem);
      }
      return newItems;
    });
  };

  const prevSlide = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      if (lastItem) {
        newItems.unshift(lastItem);
      }
      return newItems;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      {/* Breadcrumb Section */}
      <section className="py-4 px-0 bg-[#ecf6fe] pt-[15px] relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-end">
            <nav className="flex items-center text-sm text-gray-600 font-sans">
              <Link href="/" className="hover:text-purple-800 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                मुख्य पृष्ठ
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Carousel Container - Fixed positioning to not affect other pages */}
      <div className="relative h-screen overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-300/30 to-blue-400/30 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-indigo-300/30 to-purple-400/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-200/30 to-purple-300/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200/30 to-indigo-300/30 rounded-full blur-xl"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/90 backdrop-blur-sm shadow-[0_30px_50px_rgba(66,38,115,0.2)] mt-16 rounded-xl border border-white/20">

          {/* Slide Container */}
          <div className="slide relative w-full h-full">
            {items.map((item, index) => {
              let itemClasses = "w-[200px] h-[300px] absolute top-1/2 transform translate-y-[-50%] rounded-[20px] shadow-[0_30px_50px_#505050] bg-cover bg-center bg-no-repeat inline-block transition-all duration-500 ease-in-out";
              let contentClasses = "absolute top-1/2 left-[100px] w-[300px] text-left text-gray-200 transform translate-y-[-50%] font-sans hidden";

              // Position classes based on index
              if (index === 0 || index === 1) {
                itemClasses = "w-full h-full absolute top-0 left-0 transform-none rounded-none bg-cover bg-center bg-no-repeat inline-block transition-all duration-500 ease-in-out";
              } else if (index === 2) {
                itemClasses += " left-1/2";
              } else if (index === 3) {
                itemClasses += " left-[calc(50%+220px)]";
              } else if (index === 4) {
                itemClasses += " left-[calc(50%+440px)]";
              } else {
                itemClasses += " left-[calc(50%+660px)] opacity-0";
              }

              // Show content only for second item
              if (index === 1) {
                contentClasses = contentClasses.replace('hidden', 'block');
              }

              return (
                <div
                  key={item.id}
                  className={itemClasses}
                  style={{
                    backgroundImage: `url(${item.image})`
                  }}
                >
                  <div className={contentClasses}>
                    <div className="text-[40px] uppercase font-bold opacity-0 animate-[slideInContent_1s_ease-in-out_forwards]">
                      {item.title}
                    </div>
                    <div className="mt-[10px] mb-[20px] opacity-0 animate-[slideInContent_1s_ease-in-out_0.3s_forwards]">
                      {item.description}
                    </div>
                    <button className="px-[20px] py-[10px] border-none cursor-pointer opacity-0 animate-[slideInContent_1s_ease-in-out_0.6s_forwards] bg-gradient-to-r from-[#422673] to-[#2563eb] text-white rounded-lg hover:from-[#2563eb] hover:to-[#422673] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      View Photos
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="w-full text-center absolute bottom-[20px]">
            <button
              onClick={prevSlide}
              className="w-[40px] h-[35px] rounded-[8px] border-none cursor-pointer mx-[5px] transition-all duration-300 bg-gradient-to-r from-[#422673] to-[#2563eb] text-white hover:from-[#2563eb] hover:to-[#422673] shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={nextSlide}
              className="w-[40px] h-[35px] rounded-[8px] border-none cursor-pointer mx-[5px] transition-all duration-300 bg-gradient-to-r from-[#422673] to-[#2563eb] text-white hover:from-[#2563eb] hover:to-[#422673] shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
        @keyframes slideInContent {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }
      `}</style>
      </div>
    </div>
  );
}