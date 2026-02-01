
import React, { useState } from 'react';
import { Maximize2, Search, Camera } from 'lucide-react';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Corporate Leadership Seminar',
      category: 'Training',
      image: '/images/training-certs.jpg',
      description: 'Senior management workshop at our Johannesburg facility.'
    },
    {
      id: '2',
      title: 'Executive Fleet Parade',
      category: 'Logistics',
      image: '/images/chauffeur.jpg',
      description: 'Our fleet of affordable chauffeured vehicles ready for deployment.'
    },
    {
      id: '3',
      title: 'Gala Dinner Decor',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
      description: 'Bespoke event planning for a national awards ceremony.'
    },
    {
      id: '4',
      title: 'B&B Suite Interior',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
      description: 'Comfortable affordable suites for business travelers.'
    },
    {
      id: '5',
      title: 'Mining Safety Certification',
      category: 'Training',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      description: 'On-site technical safety training for industrial clients.'
    },
    {
      id: '6',
      title: 'Wedding Reception Setup',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
      description: 'Elegant marquee setups for private functions.'
    },
    {
      id: '7',
      title: 'Team Building at Sun City',
      category: 'Training',
      image: '/images/training.jpg',
      description: 'Outdoor team building excursion for a corporate client.'
    },
    {
      id: '8',
      title: 'Airport Transfer Service',
      category: 'Logistics',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
      description: 'Professional chauffeur service for international delegates.'
    },
    {
      id: '9',
      title: 'Spa & Wellness Center',
      category: 'Hospitality',
      image: '/images/spa.jpg',
      description: 'Integrated wellness facilities at our B&B location.'
    }
  ];

  const categories = ['All', 'Training', 'Events', 'Logistics', 'Hospitality'];
  
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Gallery Header */}
      <section className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Header background" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Visual highlights of our professional services, successful events, and corporate training achievements across the region.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-blue-900 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="text-slate-400" size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Search images..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-amber-500 outline-none text-sm transition-all"
            />
          </div>
        </div>
      </section>

      {/* Masonry-Style Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="relative break-inside-avoid rounded-[2rem] overflow-hidden group cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg mb-3 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-200 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-amber-500 font-bold text-sm">
                      <Maximize2 size={16} className="mr-2" /> View Full Case
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-32 text-center">
              <Camera size={64} className="mx-auto text-slate-200 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900">No images found</h3>
              <p className="text-slate-600 mt-2">Try adjusting your filters to see more from our portfolio.</p>
            </div>
          )}
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Looking for World-Class Service?</h2>
            <p className="text-xl text-slate-600 mb-12">
              Our gallery is just a glimpse of the quality and professionalism we bring to every project. Let's make your next venture our next success story.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#/contact" className="bg-blue-900 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-slate-900 transition-all shadow-xl">
                Get a Quote
              </a>
              <a href="#/services" className="bg-white text-blue-900 border-2 border-blue-900 px-10 py-5 rounded-full font-black text-lg hover:bg-blue-50 transition-all">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
