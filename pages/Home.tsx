
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Shield, BookOpen, ChevronRight, Download, Star } from 'lucide-react';

const Home: React.FC = () => {
  const coreServices = [
    {
      title: "Training & Development",
      description: "Leadership, HR, Finance, and technical workshops to empower your workforce.",
      icon: <BookOpen className="text-[#EE3124]" size={32} />,
      link: "/services"
    },
    {
      title: "Events & Management",
      description: "From corporate gala dinners to weddings, we handle every detail with precision.",
      icon: <Star className="text-[#EE3124]" size={32} />,
      link: "/services"
    },
    {
      title: "Transport & Driving",
      description: "K53 certified training and professional chauffeur services for corporate travel.",
      icon: <Award className="text-[#EE3124]" size={32} />,
      link: "/services"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Better mobile scaling */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Corporate skyscraper" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-[#EE3124]/20 text-[#EE3124] rounded-full text-xs md:text-sm font-bold mb-6 border border-[#EE3124]/30 uppercase tracking-widest">
              Empowering the SADC Region
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.2] md:leading-[1.1]">
              The Eagle has Landed with <span className="text-[#F37021]">Knowledge.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              A 100% black-owned multi-utility enterprise delivering professional training, event management, and world-class service solutions since 2014.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-[#EE3124] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D6281B] transition-all shadow-xl shadow-[#EE3124]/20 text-center active:scale-95"
              >
                Explore Services
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all text-center"
              >
                Our Story
              </Link>
              <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 px-6">
  {/* Company Profile – separate button */}
  <a
    href="/Dynamic-Eagle-Company-Profile.pdf"
    target="_blank"                           // opens in new tab
    rel="noopener noreferrer"                 // required security
    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all hover:shadow-2xl hover:scale-105 min-w-[320px]"
  >
    <Download size={24} />
    Open / Download Company Profile
  </a>
  </div>
            </div>
          </div>
        </div>

        {/* Stats - Hidden on mobile, but keep for desktop */}
        <div className="absolute bottom-12 right-6 md:right-12 hidden lg:flex space-x-8">
           <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-slate-400">Years of Excellence</div>
           </div>
           <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-[#F37021]">Level 1</div>
              <div className="text-sm text-slate-400">BBBEE Contributor</div>
           </div>
        </div>
      </section>
      
  <div className="text-center mt-12">
  {/* K53 Driving School Flyer – separate button */}
  <a
    href="/driving-school-flyer2.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all hover:shadow-2xl hover:scale-105 min-w-[320px]"
  >
    <Download size={24} />
    Open / Download K53 Driving School Flyer
  </a>
</div>

      <section class="accreditation py-8 bg-white text-center">
  <h2 class="text-xl font-bold mb-4 text-gray-600">Official Accreditation & Compliance</h2>
  <div class="flex flex-wrap justify-center gap-8">
    <div class="flex flex-col items-center">
      <img src="images/services-seta.png" alt="Services SETA #6485" class="h-16 w-auto object-contain"/>
      <p class="text-sm text-gray-500">SERVICES SETA #6485</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="images/1gseta.jpg" alt="LGSETA Accredited" class="h-16 w-auto object-contain"/>
      <p class="text-sm text-gray-500">LGSETA Accredited</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="images/sabpp.png" alt="CN14CPD0026SABPP" class="h-16 w-auto object-contain"/>
      <p class="text-sm text-gray-500">CN14CPD0026SABPP</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="images/bee-level-1.png" alt="BEE Level 1" class="h-16 w-auto object-contain"/>
      <p class="text-sm text-gray-500">BEE Level 1 Provider</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="images/saqa.png" alt="SAQA Compliant" class="h-16 w-auto object-contain"/>
      <p class="text-sm text-gray-500">SAQA Compliant</p>
    </div>
  </div>
</section>

      {/* Services Snapshot - Improved mobile grid spacing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Core Expertise</h2>
            <p className="text-slate-600 italic px-4">We provide a wide range of services to a diversified client base across Africa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreServices.map((service, idx) => (
              <div key={idx} className="group p-6 md:p-10 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                <div className="mb-6 p-4 bg-[#EE3124]/5 rounded-2xl inline-block group-hover:scale-110 transition-transform self-start">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link to={service.link} className="flex items-center text-[#EE3124] font-bold group-hover:translate-x-2 transition-transform mt-auto">
                  Learn more <ChevronRight size={18} className="ml-1" />
                </Link>
              </div> 
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview - Mobile-friendly layout */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square md:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <img src="/images/training2.jpg" alt="Training Session" className="w-full h-full object-cover" />
            </div>
            {/* Hidden overlay stat on very small devices */}
            <div className="absolute -bottom-6 -right-6 w-56 bg-slate-900 p-6 rounded-[2rem] shadow-xl hidden sm:block border-t-4 border-[#EE3124]">
              <Award className="text-[#EE3124] mb-3" size={32} />
              <p className="text-white font-bold text-sm italic">"Securing high quality and reliability in world-class service."</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 md:mb-8 text-center lg:text-left">Who We Are</h2>
            <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Dynamic Eagle Training and Networking (Pty) Ltd is a multi-utility company headquartered in Johannesburg. We are dedicated to providing cost-effective, professional services that distinguish us as a service provider of choice.
              </p>
              <p className="hidden md:block">
                Our mission is to contribute to the enrichment of quality of service around the SADC region through innovative multi-utility solutions that address the diverse needs of our clients.
              </p>
            </div>
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl shadow-sm">
                <Shield className="text-[#EE3124] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Integrity</h4>
                  <p className="text-xs md:text-sm">Our Strength</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl shadow-sm">
                <Users className="text-[#EE3124] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Accountability</h4>
                  <p className="text-xs md:text-sm">Our Culture</p>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-10 text-center lg:text-left">
              <Link to="/about" className="text-[#EE3124] font-extrabold text-lg flex items-center justify-center lg:justify-start hover:underline">
                Read our full profile <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="trusted py-12 bg-gray-50 text-center">
  <h2 class="text-xl font-semibold mb-6 text-gray-700">Trusted By South Africa's Leading Organizations</h2>
  <div class="flex flex-wrap justify-center gap-6 md:gap-10 grayscale opacity-80 hover:grayscale-0 transition">
    <img src="images/prasa.png" alt="PRASA" class="h-12 w-auto object-contain"/>
    <img src="images/eskom.png" alt="ESKOM" class="h-12 w-auto object-contain"/>
    <img src="images/petro-sa.png" alt="PETRO SA" class="h-12 w-auto object-contain"/>
    <img src="images/transnet.png" alt="TRANSNET" class="h-12 w-auto object-contain"/>
    <img src="images/sita.png" alt="SITA" class="h-12 w-auto object-contain"/>
    <img src="images/rand-water.png" alt="RAND WATER" class="h-12 w-auto object-contain"/>
  </div>
</section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full text-[#EE3124] fill-current">
            <path d="M0 0 L100 0 L100 100 Z" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8 px-2">Ready to Transform Your Organization?</h2>
          <p className="text-white/80 text-base md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto font-medium px-4">
            Contact us today for a free consultation on our training programs, event planning, or corporate services.
          </p>
          <Link 
            to="/contact" 
            className="inline-block w-full sm:w-auto bg-[#EE3124] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-slate-950 transition-all shadow-2xl active:scale-95"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
