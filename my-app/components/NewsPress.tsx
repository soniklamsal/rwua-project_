'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Home, User, Calendar, Folder, Tag } from 'lucide-react';
import SaveTheChildrenSidebar from './SaveTheChildrenSidebar';

export default function NewsPressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="py-4 px-0 bg-[#ecf6fe] pt-[15px]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-end">
            <nav className="flex items-center text-sm text-gray-600 font-sans">
              <Link href="/" className="hover:text-purple-800 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                मुख्य पृष्ठ
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600 font-medium">Save The Children</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Left Column */}
            <div className="flex-1">
              <div className="space-y-8">

                {/* Card 1 */}
                <article className="p-5 mb-16 overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                  <div className="mb-5">
                    <Image
                      src="https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png"
                      alt="हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम"
                      width={780}
                      height={470}
                      className="max-w-full h-auto align-middle border-0 block"
                    />
                  </div>

                  <div>
                    <h2 className="text-[32px] leading-[38px] font-bold p-0 m-0 mb-5 font-sans">
                      <Link href="#" className="transition-all duration-300 no-underline text-[#422673]">
                        हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम ४४२ घरधुरीलाई कम्बल वितरण
                      </Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-[15px] text-sm font-sans text-[#2b99f8]">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="uppercase">RWUA NEPAL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>December 27, 2025</span>
                      </div>
                    </div>

                    <p className="text-base text-[#444444] leading-7 mb-5 font-sans">
                      सर्लाहीको हरिपुर नगरपालिकामा सिमान्तकृत दलित तथा मुसहर समुदायलाई लक्षित गरी न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ। शुक्रबार ग्रामीण नारी उत्थान संघ, हरिपुर–२ सर्लाहीको आयोजना तथा सेभ द चिल्ड्रेनको आर्थिक सहयोग एवम् हरिपुर नगरपालिकासँगको सहकार्य र समन्वयमा हरिपुर नगरपालिका वडा नं. १, २, ४, ५, ७, ८ र ९ का सिमान्तकृत दलित तथा मुसहर समुदायका ४४२ घरधुरीलाई जम्मा ५७६ थान न्यानो कम्बल वितरण गरिएको हो।

                      कार्यक्रम ग्रामीण नारी उत्थान संघकी अध्यक्ष गोमा देवी न्यौपानेको अध्यक्षता तथा हरिपुर नगरपालिकाकी उप–प्रमुख निलम राय यादवको प्रमुख आतिथ्यतामा सम्पन्न भएको थियो। कार्यक्रममा संस्थाका उपाध्यक्ष, सचिव, सदस्यहरू, कर्मचारीहरू तथा इलाका प्रहरी कार्यालय हरिपुरका प्रतिनिधिहरूको उपस्थिति रहेको थियो। न्यानो कम्बल वितरण कार्यक्रम विशेष गरी हरिपुर नगरपालिकाभित्र रहेका मुसहर तथा दलित समुदायका बस्तीहरूलाई केन्द्रमा राखी सञ्चालन गरिएको हो। जाडोयाममा अत्यन्तै आवश्यक न्यानो राहत उपलब्ध गराउने उद्देश्यले कार्यक्रम आयोजना गरिएको आयोजक संस्थाले जनाएको छ।

                      कार्यक्रमलाई सम्बोधन गर्दै नगर उप–प्रमुख निलम राय यादवले यस किसिमका सहयोगी कार्यक्रमले सिमान्तकृत समुदायलाई राहत पुग्ने विश्वास व्यक्त गर्दै अभिभावकहरूलाई आफ्ना बालबालिकाको शिक्षा, स्वास्थ्य र सुरक्षाप्रति विशेष ध्यान दिन आग्रह गर्नुभयो। उहाँले जिम्मेवार अभिभावकत्व निर्वाह गर्न सबैमा अपिल समेत गर्नुभयो। ग्रामीण नारी उत्थान संघकी अध्यक्ष न्यौपानेले संस्थाले विगतका वर्षहरूमा झैं यस वर्ष पनि सिमान्तकृत दलित, मुसहर तथा अल्पसंख्यक समुदायका बालबालिका, अपांगता भएका व्यक्ति, गर्भवती तथा सुत्केरी महिला र ज्येष्ठ नागरिकलाई केन्द्रमा राखेर न्यानो कम्बल वितरण कार्यक्रमलाई निरन्तरता दिएको बताउनुभयो।

                      उहाँले यो कार्यक्रम कम्बल वितरणमा मात्र सीमित नभई समुदायमा रहेका बालबालिका, अपांगता भएका व्यक्ति तथा गर्भवती र सुत्केरी आमाहरूको स्याहार, सुरक्षा, व्यक्तिगत सरसफाइ, स्वास्थ्य सचेतना तथा बालबालिकाको विद्यालय पहुँच अभिवृद्धिमा समेत केन्द्रित रहेको जानकारी दिनुभयो। कार्यक्रममा गर्भवती तथा सुत्केरी महिला, शारीरिक अशक्त तथा अपांगता भएका व्यक्ति र ज्येष्ठ नागरिकलाई पहिलो प्राथमिकतामा राखी कम्बल वितरण गरिएको थियो। यसका लागि आवश्यक तथ्यांक संकलन गरी वडा तथा स्थानीय तहबाट प्रमाणित गराई जिल्ला विपद् व्यवस्थापन समितिको अनुमति लिई संस्थाको प्राङ्गणमा कार्यक्रम सम्पन्न गरिएको छ।
                    </p>

                    {/* Horizontal Line */}
                    <hr className="border-t border-gray-300 mb-4" />

                    {/* Footer with folder and tag icons */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                      <div className="flex items-center gap-1">
                        <Folder className="w-4 h-4" />
                        <Link href="#" className="no-underline text-[#422673]">Community Support</Link>
                      </div>
                      <div className="flex items-center gap-1 ml-3">
                        <Tag className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>

                {/* Card 2 */}
                <article className="p-5 mb-16 overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                  <div className="mb-5">
                    <Image
                      src="https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg"
                      alt="बिहानको भेलामा पुर्न बालक्लब गठन बालबालिकाको अधिकार बिषयमा छलफल"
                      width={780}
                      height={470}
                      className="max-w-full h-auto align-middle border-0 block"
                    />
                  </div>

                  <div>
                    <h2 className="text-[32px] leading-[38px] font-bold p-0 m-0 mb-5 font-sans">
                      <Link href="#" className="transition-all duration-300 no-underline text-[#422673]">
                        बिहानको भेलामा पुर्न बालक्लब गठन बालबालिकाको अधिकार बिषयमा छलफल
                      </Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-[15px] text-sm font-sans text-[#2b99f8]">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="uppercase">RWUA NEPAL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>December 15, 2025</span>
                      </div>
                    </div>

                    <p className="text-base text-[#444444] leading-7 mb-5 font-sans">
                      सर्लाहीमा विद्यालयको पहुँचमा पुग्न नसकेका २० जना अपाङ्ग बालबालिकालाई घरमै शिक्षा प्रदान हुने भएको छ। सर्लाहीको हरिपुर, ईश्वरपुुर, गोडैता र बलरा नगरपालिकामा बहुअपांगता भएका बालबालिकाहरुलाई शिक्षाको अधिकार सुनिश्चित गर्नका लागि साक्षरता सहजकर्तालाई घरमै पठाएर शिक्षा प्रदान गरिने छ । सेभ द चिल्ड्रेनको आर्थिक सहयोग र ग्रामीण नारी उत्थान संघ हरिपुर तथा राष्ट्रिय रोजगार प्रर्वद्धन केन्द्र मलंगवामा संयुक्तरूपमा संचालित समुन्नति परियोजना अन्तर्गत बहुअपांगता भई विधालयको पहुँचमा जान नसक्ने बालबालिकाहरुलाई घरमै शिक्षा प्रदान गरिने छ ।

                      ग्रामीण नारी उत्थान संघका कार्यक्षेत्र पर्ने हरिपुर नगरपालिकाका ३ जना र ईश्वरपुर नगरपालिकाका ७ जना र राष्ट्रिय रोजगार प्रर्वद्धन केन्द्रका कार्यक्षेत्र पर्ने बलरा र गोडैता नगरपालिका गरी १० जना अपाङ्ग बालबालिकालाई घरमै शिक्षा प्रदान गरिने ग्रामीण नारी उत्थान संघका उपाध्यक्ष विष्णुप्रसाद चालिसेले बताउनु भयो ।

                      बहुअपांगता भई विधालयको पहुँचमा जान नसक्ने बालबालिकाहरुलाई घरमै शिक्षामा पहुँच पुर्याउने उधेश्यले शारीरिक अपांगता, दृश्यसम्बन्धि अपांगता, सुनाइ सम्बन्धि अपांगता, श्रवणदृष्टिविहिन अपांगता, स्वर र बोलाई सम्बन्धि अपांगता, मानसिक वा मनोसामाजिक अपांगता र बौद्विक अपांगता भएका बालबालिकाहरुलाई समेत नेपाल सरकारको संविधानमा आधारभुत शिक्षा अनिवार्य भएता पनि अझै विधालय वा कुनै श्रोत विधालयहरुमा हाल सम्म भर्ना हुन नसकेको अवस्थामा सर्लाहीमा प्रथम पटक यो अभयास गरिएको छ ।

                      हरिपुरका ३ जना र ईश्वरपुरका ७ जना तथा गोडैता र बलराका १० जना साक्षरता सहजकर्तालाई घरमै विधालय सञ्चालन सम्बन्धि ५ दिने तालिम सर्लाही नयाँरोडको सीता प्यालेसमा तालिम प्रदान गरिसकेको छ । अब बालबालिकाहरुको घरमै विधालय गई नेपाल सरकारको एकिकृत पाठ्यक्रममा आधारित कक्षा १ देखि ३ सम्मको पाठ्यक्रमको आधारमा घरमै विधालय संचालन गरेर बहु अपांगता भएका बालबालिकाले सजिलै सिक्न अपांगता मैत्री वातावरणमा कक्षा संचालन गरि बालबालिकाको शिक्षामा पहुँच बढाउने ग्रामीण नारी उत्थान संघका उपाध्यक्ष चालिसेले बताउनु भयो ।सहजकर्ताहरुले ३ वर्ष सम्म निरन्तर पढाउने तथा ३ कक्षा पुुर्ण भएपछी पछी ति बालबालिकालाई अपाङ्गमैत्री विद्यालयमा जोडिने छ ।

                      तालिमको सहजिकरण सेभ द चिल्ड्रेन बर्दिवासबाट राम बहादुर साह र रुवाका शम्भु साह तेलि र राम विश्वास चौधरी त्यस्तै आर आर पिकेका चन्द्रशेखर सहनी र महेश कुमार मण्डलले सहजिकरण गर्नु भएको थियो । कार्यक्रम संचालनको क्रममा हरिपुर नगरपालिकाका शिक्षा प्रमुख नागेश्वर राय द्वारा अनुगमन समेत गरिएको थियो । सो कार्यक्रममा रुवा बाट १० जना र आर आर पिके बाट १० जना गरि जम्मा २० जना सहजकर्ता सहभागिता भएको थियो । तालिमको समापन ग्रामीण नारी उत्थान संघ हरिपुरका अध्यक्ष गोमा देवी न्यौपानेले गर्नुभयो ।
                    </p>

                    {/* Horizontal Line */}
                    <hr className="border-t border-gray-300 mb-4" />

                    {/* Footer with folder and tag icons */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                      <div className="flex items-center gap-1">
                        <Folder className="w-4 h-4" />
                        <Link href="#" className="no-underline text-[#422673]">Child Rights</Link>
                      </div>
                      <div className="flex items-center gap-1 ml-3">
                        <Tag className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>

                {/* Card 3 */}
                <article className="p-5 mb-16 overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                  <div className="mb-5">
                    <Image
                      src="https://rwua.com.np/wp-content/uploads/2020/01/13.jpg"
                      alt="न्यानो कम्मल बितरण"
                      width={780}
                      height={470}
                      className="max-w-full h-auto align-middle border-0 block"
                    />
                  </div>

                  <div>
                    <h2 className="text-[32px] leading-[38px] font-bold p-0 m-0 mb-5 font-sans">
                      <Link href="#" className="transition-all duration-300 no-underline text-[#422673]">
                        न्यानो कम्मल बितरण
                      </Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-[15px] text-sm font-sans text-[#2b99f8]">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="uppercase">RWUA NEPAL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>January 15, 2020</span>
                      </div>
                    </div>

                    <p className="text-base text-[#444444] leading-7 mb-5 font-sans">
                      Save The Children संस्थाको सहयोगमा न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ। यस कार्यक्रममा जरुरतमन्द परिवारहरूलाई न्यानो कम्बल वितरण गरिएको थियो। यो कार्यक्रम जाडो मौसममा बिपन्न परिवारहरूलाई न्यानो राख्न सहयोग पुर्याउने उद्देश्यले गरिएको हो।
                    </p>
                    <hr className="border-t border-gray-300 mb-4" />
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                      <div className="flex items-center gap-1">
                        <Folder className="w-4 h-4" />
                        <Link href="#" className="no-underline text-[#422673]">Save The Children</Link>
                      </div>
                      <div className="flex items-center gap-1 ml-3">
                        <Tag className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>

              </div>
            </div>
            <SaveTheChildrenSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}