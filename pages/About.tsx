
import React from 'react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-slate-950 py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Identity</h1>
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
            Founded in 2014, Dynamic Eagle is a premier multi-utility company committed to excellence across the SADC region.
          </p>
        </div>
      </section>

      {/* Director's Message - Stacked on mobile */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
             <div className="lg:w-1/3 text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="Director" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-slate-900">Directors</h3>
                <p className="text-[#F37021] font-bold text-sm">Mr. UB Benjamin & Mrs. RK Khazamula</p>
             </div>
             <div className="lg:w-2/3 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 italic">"Director's Message"</h2>
                <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                  <p>
                    Dynamic Eagle Training and Networking’s mission is to contribute to the enrichment of quality of service around the SADC region through the creation of an innovative multi-utility company that will address the diverse needs of our clients.
                  </p>
                  <p>
                    We recognize that we have multiple responsibilities to our many stakeholders. We not only have a responsibility to provide innovative service ideas that are compatible to the dynamics that today's technology dictates, but we must also empower our people.
                  </p>
                  <p className="font-bold text-slate-900 pt-2">
                    We are most proud to be a South African company and to be part of this wonderful rainbow nation.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values - Single column on mobile */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Our Mission</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                To contribute to the enrichment of quality of service around the SADC region through the creation of an innovative multi-utility company that will address the diverse needs of our clients.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Our Vision</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                To become SADC's multi-utility company of choice – a company that continuously develops innovative servicing ideas through social, economic and humanistic means.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-[#F37021]" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Our Values</h3>
              <ul className="space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex items-center"><CheckCircle2 className="text-[#F37021] mr-3 shrink-0" size={18} /> Innovation: Our Imperative</li>
                <li className="flex items-center"><CheckCircle2 className="text-[#F37021] mr-3 shrink-0" size={18} /> Integrity: Our Strength</li>
                <li className="flex items-center"><CheckCircle2 className="text-[#F37021] mr-3 shrink-0" size={18} /> Accountability: Our Culture</li>
                <li className="flex items-center"><CheckCircle2 className="text-[#F37021] mr-3 shrink-0" size={18} /> Professionalism & Loyalty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - 2 columns on mobile */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dedication to Quality</h2>
            <p className="text-base md:text-xl text-slate-400 leading-relaxed px-2">
              We recognize that we must earn the trust of our customers every day through the efficacy and quality of our service.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#EE3124] mb-2">100%</div>
              <div className="text-slate-400 uppercase tracking-widest text-[10px] md:text-xs font-bold">Black Owned</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#EE3124] mb-2">SETA</div>
              <div className="text-slate-400 uppercase tracking-widest text-[10px] md:text-xs font-bold">Accredited</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#EE3124] mb-2">SADC</div>
              <div className="text-slate-400 uppercase tracking-widest text-[10px] md:text-xs font-bold">Wide Reach</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#EE3124] mb-2">24/7</div>
              <div className="text-slate-400 uppercase tracking-widest text-[10px] md:text-xs font-bold">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
