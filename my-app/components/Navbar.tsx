'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const navLinkStyle = {
  display: 'block',
  position: 'relative' as const,
  color: 'rgba(255, 255, 255, 0.7)',
  transition: '0.3s',
  fontSize: '14px',
  padding: '0 3px',
  fontFamily: '"Open Sans", sans-serif',
  cursor: 'pointer'
};

const middleLinkStyle = {
  display: 'block',
  position: 'relative' as const,
  color: '#444444',
  transition: '0.3s',
  fontSize: '14px',
  padding: '0 3px',
  fontFamily: '"Open Sans", sans-serif',
  cursor: 'pointer'
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {/* Top Purple Bar */}
      <div className="text-white overflow-hidden transition-all duration-500" style={{
        backgroundColor: '#432774',
        color: 'rgba(255, 255, 255, 0.8)',
        height: '40px',
        fontSize: '14px'
      }}>
        <div className="mx-auto px-4" style={{ maxWidth: '1160px' }}>
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                <span className="hidden sm:inline">✉</span>
                <span className="text-xs sm:text-sm">rwua.haripur@rwua.org</span>
              </div>
              <div className="hidden sm:block cursor-pointer hover:text-white transition-colors">☎ 046-411109</div>
              <div className="hidden md:block cursor-pointer hover:text-white transition-colors">Sun-Fri 10am – 5pm</div>
            </div>
            <a
              href="tel:046-411109"
              className="bg-red-600 hover:bg-red-700 px-2 sm:px-4 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">046-411109</span>
            </a>
          </div>
        </div>
      </div>

      {/* Yellow Middle Bar - Nepali Links */}
      <div className="border-b border-yellow-400 overflow-x-auto" style={{ backgroundColor: '#fff487' }}>
        <div className="mx-auto px-4" style={{ maxWidth: '1160px' }}>
          <div className="flex justify-start items-center h-10 gap-4 sm:gap-8 text-sm font-medium whitespace-nowrap">
            <a href="#" className="middle-nav-link font-medium transition-colors relative" style={middleLinkStyle}>
              सफलताको कथा
            </a>
            <a href="#" className="middle-nav-link font-medium transition-colors relative" style={middleLinkStyle}>
              फेसबुक बाट लाईभमा समाचार
            </a>
            <a href="#" className="middle-nav-link font-medium transition-colors relative" style={middleLinkStyle}>
              ताजा अपडेट
            </a>
            <a href="#" className="middle-nav-link font-medium transition-colors relative" style={middleLinkStyle}>
              पुराना र नयाँ जानकारी
            </a>
            <a href="#" className="middle-nav-link font-medium transition-colors relative" style={middleLinkStyle}>
              दर्ता नं. ८/५०/५१
            </a>
          </div>
        </div>
      </div>

      {/* Main Purple Navbar */}
      <div className="text-white sticky top-0 shadow-md" style={{
        background: 'rgb(64, 38, 113)',
        transition: 'all 0.5s',
        zIndex: 997,
        padding: '10px 0 5px 0',
        position: 'relative' as const,
        fontSize: '14px'
      }}>
        <div className="mx-auto px-4" style={{ maxWidth: '1160px' }}>
          <div className="flex items-center justify-between" style={{ minHeight: '60px' }}>
            {/* Logo */}
            <Link href="/" className="logo" style={{
              fontSize: '32px',
              margin: 0,
              padding: 0,
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: '2px',
              textTransform: 'uppercase' as const
            }}>
              <Image
                src="https://rwua.com.np/wp-content/uploads/2023/02/cropped-RWUA-Logo-Approval-2.jpg"
                alt="RWUA Logo"
                width={180}
                height={160}
                className="img-fluid"
                style={{
                  maxHeight: '160px',
                  position: 'absolute' as const,
                  top: 0,
                  zIndex: 1200,
                  maxWidth: '100%',
                  height: 'auto',
                  verticalAlign: 'middle',
                  borderStyle: 'none'
                }}
                priority
              />
            </Link>

            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="nav-link font-medium transition-colors relative"
                style={navLinkStyle}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="nav-link font-medium transition-colors relative"
                style={navLinkStyle}
              >
                Gallery
              </Link>
              <div className="relative group hover-precise">
                <Link
                  href="/news"
                  className="nav-link font-medium transition-colors relative flex items-center px-2 py-1"
                  style={{ ...navLinkStyle, display: 'flex', alignItems: 'center' }}
                >
                  <span>News & Press</span>
                  <ChevronDown className="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" />
                </Link>

                {/* Smaller, more precise hover bridge - only covers the menu item */}
                <div className="absolute left-0 right-0 top-full h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>

                {/* Enhanced Mega Menu */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-screen max-w-5xl rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out delay-150 z-50" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)'
                }}>
                  {/* Decorative top border */}
                  <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-t-xl"></div>

                  <div className="p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                      {/* News Section */}
                      <div className="transform hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">News</h3>
                        </div>
                        <ul className="space-y-4">
                          <li className="transform hover:translate-x-2 transition-transform duration-200">
                            <Link href="/news" className="group flex items-center text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-sm font-semibold px-4 py-3 rounded-lg border border-transparent hover:border-purple-200">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-200"></span>
                              Latest News
                              <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                          <li className="transform hover:translate-x-2 transition-transform duration-200">
                            <Link href="/news/community" className="group flex items-center text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-sm font-semibold px-4 py-3 rounded-lg border border-transparent hover:border-purple-200">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-200"></span>
                              Community Updates
                              <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Press & Media */}
                      <div className="transform hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Press & Media</h3>
                        </div>
                        <ul className="space-y-4">
                          <li className="transform hover:translate-x-2 transition-transform duration-200">
                            <Link href="/press" className="group flex items-center text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 text-sm font-semibold px-4 py-3 rounded-lg border border-transparent hover:border-purple-200">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-200"></span>
                              Press Releases
                              <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                          <li className="transform hover:translate-x-2 transition-transform duration-200">
                            <Link href="/press/media-kit" className="group flex items-center text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 text-sm font-semibold px-4 py-3 rounded-lg border border-transparent hover:border-purple-200">
                              <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-200"></span>
                              Media Kit
                              <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Enhanced Bottom Section with Featured Content */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden relative">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full -mr-10 -mt-10 opacity-10"></div>
                          <div className="relative z-10">
                            <div className="flex items-center mb-3">
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <h4 className="font-bold text-gray-900 text-lg">Latest Update</h4>
                            </div>
                            <p className="text-sm text-gray-700 mb-4 font-medium leading-relaxed">ग्रामीण नारी उत्थान संघको नवीनतम गतिविधिहरू र सामुदायिक कार्यक्रमहरू</p>
                            <Link href="/news/latest" className="inline-flex items-center text-purple-700 hover:text-purple-800 font-bold text-sm group-hover:translate-x-1 transition-transform duration-200">
                              Read More
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden relative">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full -mr-10 -mt-10 opacity-10"></div>
                          <div className="relative z-10">
                            <div className="flex items-center mb-3">
                              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-md flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                              </div>
                              <h4 className="font-bold text-gray-900 text-lg">Success Stories</h4>
                            </div>
                            <p className="text-sm text-gray-700 mb-4 font-medium leading-relaxed">सफलताका कथाहरू र समुदायिक उपलब्धिहरूको विवरण</p>
                            <Link href="/success-story" className="inline-flex items-center text-purple-700 hover:text-purple-800 font-bold text-sm group-hover:translate-x-1 transition-transform duration-200">
                              View Stories
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/success-story"
                className="nav-link font-medium transition-colors relative"
                style={navLinkStyle}
              >
                Success Story
              </Link>
              <Link
                href="/vacancy"
                className="nav-link font-medium transition-colors relative"
                style={navLinkStyle}
              >
                All Vacancy
              </Link>
              <Link
                href="/contact"
                className="nav-link font-medium transition-colors relative"
                style={navLinkStyle}
              >
                Contact Us
              </Link>
              <Link
                href="/downloads"
                className="nav-link font-medium transition-colors relative"
                style={navLinkStyle}
              >
                Downloads
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-purple-800 border-t border-purple-700">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>

            {/* News & Press Dropdown for Mobile */}
            <div>
              <button
                className="w-full flex items-center justify-end px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors"
                onClick={() => setIsNewsDropdownOpen(!isNewsDropdownOpen)}
              >
                <span>News & Press</span>
                <ChevronDown className={`w-4 h-4 ml-2 transform transition-transform ${isNewsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isNewsDropdownOpen && (
                <div className="mr-4 mt-1 space-y-1">
                  <Link
                    href="/news"
                    className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
                    onClick={closeMobileMenu}
                  >
                    News
                  </Link>
                  <Link
                    href="/press"
                    className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
                    onClick={closeMobileMenu}
                  >
                    Press Releases
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/success-story"
              className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
              onClick={closeMobileMenu}
            >
              Success Story
            </Link>
            <Link
              href="/vacancy"
              className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
              onClick={closeMobileMenu}
            >
              All Vacancy
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              href="/downloads"
              className="block px-3 py-2 text-white hover:bg-purple-700 rounded-md transition-colors text-right"
              onClick={closeMobileMenu}
            >
              Downloads
            </Link>
          </div>
        </div>
      )}
    </>
  );
}