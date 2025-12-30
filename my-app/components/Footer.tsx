'use client';

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-[#374151] py-12 px-4 sm:px-6 lg:px-20" style={{
      background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.4) 0%, rgba(219, 234, 254, 0.4) 50%, rgba(224, 231, 255, 0.4) 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 pb-8 border-b border-[#374151] border-opacity-20 md:grid-cols-2 lg:grid-cols-3">

          {/* Contact/Access Section */}
          <div className="text-[#374151]">
            <h3 className="mb-4 text-lg font-bold text-[#374151]">Contact/Access</h3>

            {/* Logo */}
            <div className="flex-shrink-0 mb-4">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-[#422673]">RWUA</div>
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-start mb-4">
              <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-[#374151]" />
              <address className="text-sm not-italic text-[#374151]">
                Haripur Municipality-2<br />
                Sarlahi, Nepal
              </address>
            </div>

            {/* Phone */}
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 mr-3 flex-shrink-0 text-[#374151]" />
              <span className="text-sm text-[#374151]">046-411109</span>
            </div>

            {/* Email */}
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 mt-1 mr-3 text-[#374151] flex-shrink-0" />
              <span className="text-sm text-[#374151]">rwua.haripur@rwua.org</span>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                <Instagram className="w-4 h-4 text-[#374151]" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                <Twitter className="w-4 h-4 text-[#374151]" />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                <Youtube className="w-4 h-4 text-[#374151]" />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                <Facebook className="w-4 h-4 text-[#374151]" />
              </a>
            </div>
          </div>

          {/* Our Mission/Ethics */}
          <div className="text-center relative">
            <h3 className="mb-4 text-lg font-bold text-[#374151]">Our Mission</h3>
            <p className="mb-4 text-sm text-center leading-relaxed text-[#374151]">
              ग्रामीण नारी उत्थान संघ हरिपुरले विपन्न समुदाय र ग्रामीण भेगका नागरिकहरुको सशक्तिकरण एवं शिक्षण सम्बन्धि विविध किसिमका कार्यक्रमहरूलाई अगाडि बढाउदै आएको छ। हाम्रो मिशन सत्यनिष्ठा, उत्कृष्टता र जिम्मेवारीमा आधारित छ।
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#374151]">
              Newsletter <sup className="text-red-500">*</sup>
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[#374151]">
              हाम्रो न्यूजलेटरमा सदस्यता लिएर तपाईंले हाम्रा नवीनतम कार्यक्रमहरू र गतिविधिहरूको बारेमा जानकारी प्राप्त गर्न सक्नुहुन्छ।
            </p>

            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 mb-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:bg-white focus:ring-blue-600 focus:border-blue-500 text-gray-900"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group bg-transparent border-2 border-blue-600 hover:border-blue-800 rounded-lg py-3 px-6"
                >
                  SUBSCRIBE
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center">
          <p className="mb-2 text-xs text-[#374151]">
            ©2025 Rural Women Upliftment Association, Sarlahi. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-xs">
            <Link href="#" className="text-[#374151] transition-colors duration-300 hover:text-[#422673]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#374151] transition-colors duration-300 hover:text-[#422673]">
              Terms of Service
            </Link>
            <Link href="#" className="text-[#374151] transition-colors duration-300 hover:text-[#422673]">
              Cookie Policy
            </Link>
            <Link href="#" className="text-[#374151] transition-colors duration-300 hover:text-[#422673]">
              Legal Notices
            </Link>
          </div>
          <p className="mt-2 text-xs text-[#374151]">
            Made with <Heart className="inline w-3 h-3 text-red-500 mx-1" /> by <strong>Sarbatra Inc</strong>
          </p>
        </div>
      </div>

      {/* Mobile Bottom Menu - Optional for mobile navigation */}
      <div className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
        <nav className="flex items-center justify-around h-16">
          <Link
            href="/"
            className="flex flex-col items-center justify-center p-2 transition-colors duration-200 hover:text-[#422673] text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span className="mt-1 text-xs">Home</span>
          </Link>

          <Link
            href="/gallery"
            className="flex flex-col items-center justify-center p-2 transition-colors duration-200 hover:text-[#422673] text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="mt-1 text-xs">Gallery</span>
          </Link>

          <Link
            href="/news"
            className="flex flex-col items-center justify-center p-2 transition-colors duration-200 hover:text-[#422673] text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            <span className="mt-1 text-xs">News</span>
          </Link>

          <Link
            href="/contact"
            className="flex flex-col items-center justify-center p-2 transition-colors duration-200 hover:text-[#422673] text-gray-500"
          >
            <Phone className="w-6 h-6" />
            <span className="mt-1 text-xs">Contact</span>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        /* Removed unused gallery button styles since we're now using styled links */
      `}</style>
    </footer>
  );
}