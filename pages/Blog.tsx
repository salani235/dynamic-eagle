
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Mastering the Boardroom: Why Soft Skills are the New Hard Skills',
      excerpt: 'In the modern corporate landscape, technical ability is just the entry price. Discover how our leadership training bridges the gap between management and true inspiration.',
      content: 'Full article content about training...',
      category: 'Training',
      date: 'May 12, 2024',
      author: 'UB Benjamin',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Event Logistics: Creating Seamless Experiences from Scratch',
      excerpt: 'From gala dinners to high-stakes exhibitions, the difference between success and failure lies in the invisible details. Learn our 5-step process for event perfection.',
      content: 'Full article content about events...',
      category: 'Events',
      date: 'April 28, 2024',
      author: 'RK Khazamula',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Safe Roads, Strong Business: The Future of Corporate Chauffeur Services',
      excerpt: 'Reliability in transport isn’t just about being on time—it’s about the peace of mind that allows an executive to focus on the next big deal while in transit.',
      content: 'Full article content about logistics...',
      category: 'Logistics',
      date: 'April 15, 2024',
      author: 'Transport Team',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      title: 'Hospitality Reimagined: More Than Just a Bed and Breakfast',
      excerpt: 'Discover why Dynamic Eagle’s accommodation solutions are becoming the preferred sanctuary for business travelers in Johannesburg.',
      content: 'Full article content about hospitality...',
      category: 'Hospitality',
      date: 'March 22, 2024',
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '5',
      title: 'Mine Machine Productivity: Enhancing Technical Excellence',
      excerpt: 'How specialized technical training for mining equipment can lead to a 30% increase in operational efficiency and site safety.',
      content: 'Full article content about technical training...',
      category: 'Training',
      date: 'March 05, 2024',
      author: 'Technical Dept',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const categories = ['All', 'Training', 'Events', 'Logistics', 'Hospitality'];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Blog & Insights</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Deep dives into corporate excellence, training methodologies, and service innovation across the SADC region.
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
                    ? 'bg-amber-500 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-900 outline-none text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4 font-bold">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5 text-amber-500" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1.5 text-amber-500" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-900 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center text-blue-900 font-black text-sm hover:translate-x-2 transition-transform">
                      Continue Reading <ArrowRight size={16} className="ml-2 text-amber-500" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <div className="text-slate-300 mb-4">
                <Tag size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">No articles found in this category</h3>
              <p className="text-slate-600 mt-2">Try selecting another category or check back soon.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-6 text-amber-500 font-bold hover:underline"
              >
                Show all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-12 md:p-16 rounded-[3rem] text-center border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-blue-200 mb-10">Subscribe to our newsletter to receive the latest corporate insights and service updates directly to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your work email" 
                className="flex-grow bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <button className="bg-amber-500 text-white font-black px-8 py-4 rounded-xl hover:bg-amber-600 transition-all shadow-lg active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
