'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function SaveTheChildrenSidebar() {
  return (
    <aside className="w-full lg:w-80">
      {/* Search Widget - Exact match to screenshot */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="bg-purple-800 px-6 py-4">
          <h3 className="text-xl font-bold text-white">Search</h3>
        </div>
        <div className="p-6">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="खोज्नुहोस्"
              className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-800"
            />
            <button
              type="submit"
              className="ml-[-40px] w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center hover:bg-purple-900 transition-colors"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </form>
        </div>
      </div>

      {/* Recent Posts Widget - Exact match */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-purple-800 px-6 py-4">
          <h3 className="text-xl font-bold text-white">Recent Posts</h3>
        </div>
        <div className="p-6">
          {/* Example recent post entries - add more as needed */}
          <div className="space-y-6">
            <Link href="#" className="block hover:opacity-80 transition-opacity">
              <p className="text-purple-800 font-medium text-base leading-relaxed">
                हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम ४४२ घरधुरीलाई कम्बल वितरण
              </p>
            </Link>
            <Link href="#" className="block hover:opacity-80 transition-opacity">
              <p className="text-purple-800 font-medium text-base leading-relaxed">
                बालविवाहको विषयमा छलफल तथा पुर्न बालक्लब गठन
              </p>
            </Link>
            {/* Add more recent posts with actual links/titles */}
          </div>
        </div>
      </div>
    </aside>
  );
}