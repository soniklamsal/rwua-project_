'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: "ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा", role: "" },
  { name: "वियोन द फिनिस लाईन समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्याक्रम", role: "" },
  { name: "न्यानो कम्मल बितरण", role: "" },
  { name: "LCRC र स्थानीय सरोकारवालाहरु लाइ स्थानीय तहमा बाल भेला सञ्चालन सम्बन्धि दुई दिने तालिम", role: "" },
  { name: "सिडा संकल्प परियोजना' समापन, प्रगति बिवरण प्रस्तुत", role: "" }
];

const teamImages = [
  "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg",
  "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg",
  "https://rwua.com.np/wp-content/uploads/2020/01/13.jpg",
  "https://rwua.com.np/wp-content/uploads/2025/02/%E0%A4%AC%E0%A4%B2%E0%A5%8D%E0%A4%AD%E0%A5%87%E0%A4%B2%E0%A4%BE.jpg",
  "https://rwua.com.np/wp-content/uploads/2024/11/IMG_0569.png"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + teamMembers.length) % teamMembers.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating]);

  const handlePrevious = useCallback(() => {
    updateCarousel(currentIndex - 1);
  }, [currentIndex, updateCarousel]);

  const handleNext = useCallback(() => {
    updateCarousel(currentIndex + 1);
  }, [currentIndex, updateCarousel]);

  const handleDotClick = useCallback((index: number) => {
    updateCarousel(index);
  }, [updateCarousel]);

  const handleCardClick = useCallback((index: number) => {
    updateCarousel(index);
  }, [updateCarousel]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        handlePrevious();
      } else if (e.key === 'ArrowDown') {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(currentIndex + 1);
        } else {
          updateCarousel(currentIndex - 1);
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, updateCarousel]);

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;

    if (offset === 0) return 'center';
    if (offset === 1) return 'down-1';
    if (offset === 2) return 'down-2';
    if (offset === teamMembers.length - 1) return 'up-1';
    if (offset === teamMembers.length - 2) return 'up-2';
    return 'hidden';
  };

  return (
    <div className="gallery-wrapper">
      {/* Breadcrumb Section */}
      <section className="py-4 px-0 pt-[15px] relative z-10" style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
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

      <div className="main-container">
        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-track">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`card ${getCardClass(index)}`}
                  data-index={index}
                  onClick={() => handleCardClick(index)}
                >
                  <Image
                    src={teamImages[index]}
                    alt={`Team Member ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="controls-section">
          <div className="nav-controls">
            <button className="nav-arrow up" onClick={handlePrevious}>
              <Image
                src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765"
                alt="Up"
                width={60}
                height={60}
              />
            </button>
            <button className="nav-arrow down" onClick={handleNext}>
              <Image
                src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249"
                alt="Down"
                width={60}
                height={60}
              />
            </button>
          </div>

          <div className="member-info">
            <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
          </div>

          <div className="dots">
            {teamMembers.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                data-index={index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <button className="view-photos-btn">
            View Photos
          </button>
        </div>
      </div>

      <style jsx>{`
        .gallery-wrapper {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
        }

        .main-container {
          display: flex;
          width: 100%;
          max-width: 1200px;
          height: 80vh;
          gap: 60px;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .carousel-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .controls-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 40px;
          padding-left: 40px;
        }

        .carousel-container {
          width: 100%;
          max-width: 500px;
          height: 70vh;
          position: relative;
          perspective: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .carousel-track {
          width: 500px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card {
          position: absolute;
          width: 450px;
          height: 270px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .card :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card.center {
          z-index: 10;
          transform: scale(1.3) translateZ(0);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
          border: 3px solid rgba(8, 42, 123, 0.3);
        }

        .card.center :global(img) {
          filter: none;
        }

        .card.up-2 {
          z-index: 1;
          transform: translateY(-300px) scale(0.8) translateZ(-300px);
          opacity: 0.7;
        }

        .card.up-2 :global(img) {
          filter: grayscale(100%);
        }

        .card.up-1 {
          z-index: 5;
          transform: translateY(-150px) scale(0.9) translateZ(-100px);
          opacity: 0.9;
        }

        .card.up-1 :global(img) {
          filter: grayscale(100%);
        }

        .card.down-1 {
          z-index: 5;
          transform: translateY(150px) scale(0.9) translateZ(-100px);
          opacity: 0.9;
        }

        .card.down-1 :global(img) {
          filter: grayscale(100%);
        }

        .card.down-2 {
          z-index: 1;
          transform: translateY(300px) scale(0.8) translateZ(-300px);
          opacity: 0.7;
        }

        .card.down-2 :global(img) {
          filter: grayscale(100%);
        }

        .card.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .member-info {
          text-align: center;
          margin-top: 20px;
          transition: all 0.5s ease-out;
        }

        .member-name {
          color: rgb(8, 42, 123);
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 8px;
          position: relative;
          display: inline-block;
          text-align: center;
          line-height: 1.3;
          max-width: 500px;
          padding: 0 20px;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .member-name:hover {
          color: rgb(37, 99, 235);
        }

        .member-name::before,
        .member-name::after {
          content: "";
          position: absolute;
          top: 100%;
          width: 80px;
          height: 2px;
          background: rgb(8, 42, 123);
        }

        .member-name::before {
          left: -100px;
        }

        .member-name::after {
          right: -100px;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(8, 42, 123, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: rgb(8, 42, 123);
          transform: scale(1.2);
        }

        .view-photos-btn {
          margin-top: 20px;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgb(8, 42, 123) 0%, rgb(37, 99, 235) 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(8, 42, 123, 0.3);
        }

        .view-photos-btn:hover {
          background: linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(8, 42, 123) 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(8, 42, 123, 0.4);
        }

        .view-photos-btn:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(8, 42, 123, 0.3);
        }

        .nav-arrow {
          position: relative;
          background: transparent;
          color: white;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          font-size: 1.5rem;
          border: none;
          outline: none;
          margin: 0;
          padding: 0;
          overflow: visible;
          box-shadow: none;
        }

        .nav-arrow:hover {
          background: transparent;
          transform: scale(1.2);
          box-shadow: none;
          border-color: transparent;
        }

        .nav-arrow :global(img) {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: none;
          transition: all 0.3s ease;
        }

        .nav-arrow:hover :global(img) {
          filter: none;
          transform: scale(1.1);
        }

        .nav-controls {
          display: flex;
          flex-direction: row;
          gap: 30px;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .gallery-wrapper {
            padding: 10px 0;
          }

          .main-container {
            flex-direction: column;
            height: auto;
            gap: 20px;
            max-width: 100%;
          }

          .carousel-section {
            flex: none;
            width: 100%;
          }

          .controls-section {
            flex: none;
            width: 100%;
            padding-left: 0;
            gap: 20px;
          }

          .carousel-container {
            height: 60vh;
            max-width: 350px;
          }

          .nav-controls {
            display: none;
          }

          .card {
            width: 350px;
            height: 200px;
          }

          .carousel-track {
            width: 380px;
          }

          .card.up-2 {
            transform: translateY(-160px) scale(0.8) translateZ(-300px);
          }

          .card.up-1 {
            transform: translateY(-80px) scale(0.9) translateZ(-100px);
          }

          .card.down-1 {
            transform: translateY(80px) scale(0.9) translateZ(-100px);
          }

          .card.down-2 {
            transform: translateY(160px) scale(0.8) translateZ(-300px);
          }

          .member-name {
            font-size: 1.2rem;
            max-width: 350px;
            padding: 0 10px;
          }

          .member-name::before,
          .member-name::after {
            width: 40px;
          }

          .member-name::before {
            left: -60px;
          }

          .member-name::after {
            right: -60px;
          }

          .view-photos-btn {
            margin-top: 15px;
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}