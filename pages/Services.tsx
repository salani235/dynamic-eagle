import React from 'react';
import { Book, Utensils, Car, Hotel, Shield, Package } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'training',
      icon: <Book size={32} />,
      title: "Training & Development",
      description: "Comprehensive workshops including Leadership, HR, Finance, and Mining Engineering.",
      details: [
        "Leadership and Management",
        "Emotional Intelligence",
        "Project Management",
        "Asset Procurement",
        "Finance for Managers",
        "Mine Productivity",
        "Business Proposals"
      ]
    },
    {
      id: 'events',
      icon: <Utensils size={32} />,
      title: "Events & Hire Management",
      description: "Full-scale event production, catering, and equipment hire for functions.",
      details: [
        "Corporate Gala Dinner",
        "Weddings & Parties",
        "Catering & Florist",
        "Marquees & Decor",
        "Exhibition Set-ups",
        "MC’s & Speakers"
      ]
    },
    {
      id: 'driving',
      icon: <Car size={32} />,
      title: "Driving & Chauffeur",
      description: "K53 Certified driving school and professional shuttle services.",
      details: [
        "Learner's & Driver's Licences",
        "Codes A1, 8, 10, 14",
        "Defensive Driving",
        "Executive Shuttle",
        "Fleet Management",
        "Traffic Bookings"
      ]
    },
    {
      id: 'accommodation',
      icon: <Hotel size={32} />,
      title: "Accommodation & Travel",
      description: "B&B and travel arrangement services with spa treatments.",
      details: [
        "Executive B&B Suites",
        "Global Travel Booking",
        "Thai Massage & Spa",
        "Free High-speed WIFI",
        "Travel Arrangements"
      ]
    },
    {
      id: 'security',
      icon: <Shield size={32} />,
      title: "Security & Cleaning",
      description: "Professional facility maintenance and security solutions.",
      details: [
        "Commercial Cleaning",
        "24/7 Security Staff",
        "Risk Assessments",
        "Consumables Supply",
        "Hygiene Services"
      ]
    },
    {
      id: 'other',
      icon: <Package size={32} />,
      title: "Other Projects",
      description: "Tendering and miscellaneous corporate support services.",
      details: [
        "Corporate Identity Gifts",
        "Printing Rentals",
        "Stationery Supply",
        "Furniture Procurement",
        "Social Media Ads"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Header - Refined for mobile */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-[#EE3124]">
            <path d="M0 0 L100 0 L100 100 Z" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
            A diverse range of professional solutions tailored to your organization's specific needs.
          </p>
        </div>
      </section>

      {/* Main Grid - Better mobile padding */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-6 md:p-14 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-[#EE3124]/5 text-[#EE3124] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-[#EE3124]/10">
                    {/* Fix: Cast to React.ReactElement<any> to allow 'size' property when cloning the icon component */}
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-slate-600 mb-6 text-sm md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {service.details.map((item, i) => (
                        <div key={i} className="flex items-center text-slate-500 text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 bg-[#F37021] rounded-full mr-2 shrink-0"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-House Training - Mobile layout adjustments */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
           <div className="bg-slate-950 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center border border-slate-800 shadow-2xl">
              <div className="lg:w-1/2 p-8 md:p-20 order-2 lg:order-1 text-center lg:text-left">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">In-House <span className="text-[#EE3124]">Training</span></h2>
                 <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                   Custom solutions at your doorstep. We design training that fits your specific industry and team dynamics perfectly.
                 </p>
                 <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center text-white font-bold text-sm md:text-base">
                       <div className="w-8 h-8 rounded-full bg-[#EE3124] flex items-center justify-center mr-4 text-xs shadow-lg shadow-[#EE3124]/30 shrink-0">1</div>
                       Cost-efficient for groups
                    </div>
                    <div className="flex items-center text-white font-bold text-sm md:text-base">
                       <div className="w-8 h-8 rounded-full bg-[#EE3124] flex items-center justify-center mr-4 text-xs shadow-lg shadow-[#EE3124]/30 shrink-0">2</div>
                       Industry-specific case studies
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 w-full h-64 md:h-96 lg:h-full order-1 lg:order-2">
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="In house training" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;