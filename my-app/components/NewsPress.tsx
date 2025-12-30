'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Home, User, Calendar, Folder, Tag } from 'lucide-react';
import TopSearch from './TopSearch';

export default function NewsPressPage() {
  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#ffffff'
    }}>
      {/* Breadcrumb Section */}
      <section className="py-4 px-0 pt-[15px]" style={{
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
              <span className="text-gray-600 font-medium">News & Press</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Search Section */}
        <TopSearch />

        <main className="mt-12">
          {/* Featured Section */}
          <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-16">
            {/* Main Post */}
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block cursor-pointer">
              <Image
                src="https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png"
                alt="हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण"
                width={900}
                height={400}
                className="rounded-md object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
              <span className="text-green-700 text-sm hidden md:block mt-4">Community Support</span>
              <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight cursor-pointer hover:text-blue-800 transition-colors duration-200">
                हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम
              </h1>
              <p className="text-gray-600 mb-4">
                सर्लाहीको हरिपुर नगरपालिकामा सिमान्तकृत दलित तथा मुसहर समुदायलाई लक्षित गरी न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ।
                शुक्रबार ग्रामीण नारी उत्थान संघ, हरिपुर–२ सर्लाहीको आयोजना तथा सेभ द चिल्ड्रेनको आर्थिक सहयोग एवम् हरिपुर नगरपालिकासँगको सहकार्य र समन्वयमा
                हरिपुर नगरपालिका वडा नं. १, २, ४, ५, ७, ८ र ९ का सिमान्तकृत दलित तथा मुसहर समुदायका ४४२ घरधुरीलाई जम्मा ५७६ थान न्यानो कम्बल वितरण गरिएको हो।
              </p>
              <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm mt-4 transition-colors duration-200 group">
                Read more
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Sub-main Posts */}
            <div className="w-full md:w-4/7">
              {/* Post 1 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10 cursor-pointer hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg"
                  alt="बालक्लब गठन"
                  width={300}
                  height={200}
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 hover:scale-105 transition-transform duration-300"
                />
                <div className="rounded px-4 hover:shadow-lg transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}>
                  <span className="text-green-700 text-sm hidden md:block">Child Rights</span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2 cursor-pointer hover:text-blue-800 transition-colors duration-200">
                    बालक्लब गठन तथा बालबालिकाको अधिकार बिषयमा छलफल
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    सर्लाहीमा विद्यालयको पहुँचमा पुग्न नसकेका २० जना अपाङ्ग बालबालिकालाई घरमै शिक्षा प्रदान हुने भएको छ।
                  </p>
                </div>
              </div>

              {/* Post 2 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10 cursor-pointer hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://rwua.com.np/wp-content/uploads/2020/01/13.jpg"
                  alt="न्यानो कम्मल बितरण"
                  width={300}
                  height={200}
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 hover:scale-105 transition-transform duration-300"
                />
                <div className="rounded px-4 hover:shadow-lg transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}>
                  <span className="text-green-700 text-sm hidden md:block">Winter Relief</span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2 cursor-pointer hover:text-blue-800 transition-colors duration-200">
                    न्यानो कम्मल बितरण कार्यक्रम
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Save The Children संस्थाको सहयोगमा न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ।
                  </p>
                </div>
              </div>

              {/* Post 3 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10 cursor-pointer hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://rwua.com.np/wp-content/uploads/2021/04/11.jpg"
                  alt="खानेपानी सुविधा"
                  width={300}
                  height={200}
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 hover:scale-105 transition-transform duration-300"
                />
                <div className="rounded px-4 hover:shadow-lg transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}>
                  <span className="text-green-700 text-sm hidden md:block">Water & Sanitation</span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2 cursor-pointer hover:text-blue-800 transition-colors duration-200">
                    समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रम
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    स्वच्छ खानेपानी पहुँचका लागि सञ्चालित कार्यक्रमका गतिविधिहरू।
                  </p>
                </div>
              </div>

              {/* Post 4 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10 cursor-pointer hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://rwua.com.np/wp-content/uploads/2021/10/1.jpg"
                  alt="साधारण सभा"
                  width={300}
                  height={200}
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 hover:scale-105 transition-transform duration-300"
                />
                <div className="rounded px-4 hover:shadow-lg transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}>
                  <span className="text-green-700 text-sm hidden md:block">General Assembly</span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2 cursor-pointer hover:text-blue-800 transition-colors duration-200">
                    ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    ग्रामीण महिलाहरूको सशक्तिकरणका लागि आयोजित वार्षिक साधारण सभाको तस्बिरहरू।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl text-gray-800">Latest News</h2>
            <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group bg-transparent border-2 border-blue-600 hover:border-blue-800 rounded-lg py-2 px-4">
              View all
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full lg:w-1/3 p-4 lg:p-0 mb-6 lg:mb-0">
              <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                background: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
              }}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png"
                    alt="कम्बल वितरण"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                    हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण
                  </h2>
                  <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                    सर्लाहीको हरिपुर नगरपालिकामा सिमान्तकृत दलित तथा मुसहर समुदायलाई लक्षित गरी न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ।
                  </p>
                  <div className="mt-4">
                    <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/3 p-4 lg:p-0 mb-6 lg:mb-0">
              <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
              }}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg"
                    alt="बालक्लब"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                    बालक्लब गठन तथा बालबालिकाको अधिकार
                  </h2>
                  <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                    सर्लाहीमा विद्यालयको पहुँचमा पुग्न नसकेका २० जना अपाङ्ग बालबालिकालाई घरमै शिक्षा प्रदान हुने भएको छ।
                  </p>
                  <div className="mt-4">
                    <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/3 p-4 lg:p-0 mb-6 lg:mb-0">
              <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(224, 231, 255, 0.6) 100%)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
              }}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://rwua.com.np/wp-content/uploads/2020/01/13.jpg"
                    alt="न्यानो कम्मल"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                    न्यानो कम्मल बितरण कार्यक्रम
                  </h2>
                  <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                    Save The Children संस्थाको सहयोगमा न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ। यस कार्यक्रममा जरुरतमन्द परिवारहरूलाई न्यानो कम्बल वितरण गरिएको थियो।
                  </p>
                  <div className="mt-4">
                    <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscribe Section */}
          <div className="rounded-lg flex md:shadow-lg mt-12 border border-gray-100 overflow-hidden" style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <Image
              src="https://rwua.com.np/wp-content/uploads/2021/10/1.jpg"
              alt="Newsletter"
              width={300}
              height={200}
              className="w-0 md:w-1/4 object-cover"
            />
            <div className="px-6 py-6 flex-1">
              <h3 className="text-3xl text-gray-800 font-bold mb-2">समाचार सदस्यता लिनुहोस्</h3>
              <p className="text-lg text-gray-600 mb-6">
                हामी हरेक हप्ता नवीनतम समाचार र पोस्टहरू पठाउँछौं
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  className="flex-1 rounded-lg bg-gray-50 px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="your@email.com"
                />
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group bg-transparent border-2 border-blue-600 hover:border-blue-800 rounded-lg py-2 px-4">
                  Subscribe
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
              <p className="text-green-700 opacity-70 text-sm mt-3">No spam. We promise</p>
            </div>
          </div>

          {/* Popular News Section */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl text-gray-800">Popular News</h2>
            <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group bg-transparent border-2 border-blue-600 hover:border-blue-800 rounded-lg py-2 px-4">
              View all
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full lg:w-1/3 p-4 lg:p-0 mb-6 lg:mb-0">
              <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(224, 231, 255, 0.6) 100%)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
              }}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://rwua.com.np/wp-content/uploads/2021/04/11.jpg"
                    alt="खानेपानी"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                    समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रम
                  </h2>
                  <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                    स्वच्छ खानेपानी पहुँचका लागि सञ्चालित कार्यक्रमका गतिविधिहरू र समुदायिक सहभागिता।
                  </p>
                  <div className="mt-4">
                    <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/3 p-4 lg:p-0 mb-6 lg:mb-0">
              <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(224, 231, 255, 0.6) 100%)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
              }}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://rwua.com.np/wp-content/uploads/2021/10/1.jpg"
                    alt="साधारण सभा"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                    ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा
                  </h2>
                  <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                    ग्रामीण महिलाहरूको सशक्तिकरणका लागि आयोजित वार्षिक साधारण सभाको मुख्य बिन्दुहरू।
                  </p>
                  <div className="mt-4">
                    <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/3 p-4 lg:p-0 mb-6 lg:mb-0">
              <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(224, 231, 255, 0.6) 100%)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
              }}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg"
                    alt="बाल अधिकार"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                    बालबालिकाको अधिकार संरक्षण कार्यक्रम
                  </h2>
                  <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                    बालबालिकाको अधिकार संरक्षणका लागि बालक्लब गठन र सचेतना कार्यक्रमहरू।
                  </p>
                  <div className="mt-4">
                    <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="pb-24"></div>

      <style jsx>{`
        /* Removed unused gallery button styles since we're now using styled links */
      `}</style>
    </div>
  );
}