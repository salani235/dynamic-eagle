
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Let's Connect</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto italic font-medium">
              "Dedicated & Committed to Serving You — Our Rainbow Nation"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 shrink-0 border border-blue-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600 text-sm font-medium">+27 87 550 3221</p>
                  <p className="text-slate-600 text-sm font-medium">+27 61 403 1083</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 shrink-0 border border-blue-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600 text-sm font-medium">info@dynamiceagle.co.za</p>
                  <p className="text-slate-600 text-sm font-medium">bookings@dynamiceagle.co.za</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 shrink-0 border border-blue-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    26 Office Centre and Conferencing,<br />
                    Fourway/Douglasdale,<br />
                    Johannesburg, Gauteng
                  </p>
                </div>
              </div>

              <div className="bg-blue-900 p-8 rounded-3xl shadow-xl text-white flex items-start space-x-6 border-b-4 border-amber-500">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-blue-100 text-sm">Mon - Fri: 08:00 - 17:00</p>
                  <p className="text-blue-100 text-sm">Sat: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all outline-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={6} 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all outline-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-amber-500 text-white font-black py-4 rounded-xl hover:bg-amber-600 transition-all shadow-lg flex items-center justify-center space-x-2 active:scale-[0.98]"
                  >
                    <span>Send Inquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Mockup */}
      <section className="h-96 bg-slate-300 w-full relative">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 grayscale opacity-80">
           <div className="text-slate-400 font-bold text-xl uppercase tracking-widest flex items-center">
             <MapPin className="mr-2" /> Interactive Map Area
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
