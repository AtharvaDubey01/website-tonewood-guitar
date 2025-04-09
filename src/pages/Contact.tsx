
import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-playfair font-bold text-gold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-playfair text-cream mb-6">Get in Touch</h2>
            <p className="text-cream/80 mb-8">
              Have questions about our guitars or services? Looking for a specific model?
              Our team of experts is ready to help you find the perfect instrument.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-cream">Visit Our Showroom</h3>
                  <p className="text-cream/70">
                    123 Guitar Avenue<br />
                    Nashville, TN 37203<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-cream">Call Us</h3>
                  <p className="text-cream/70">
                    +1 (615) 555-1234<br />
                    Monday-Friday: 10am-6pm CST<br />
                    Saturday: 11am-5pm CST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-cream">Email Us</h3>
                  <p className="text-cream/70">
                    info@tonewoodguitars.com<br />
                    sales@tonewoodguitars.com<br />
                    support@tonewoodguitars.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-lg p-6">
            <h2 className="text-2xl font-playfair text-cream mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-cream/80 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-wood-medium/50 border border-gold/20 text-cream focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cream/80 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-wood-medium/50 border border-gold/20 text-cream focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-cream/80 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-wood-medium/50 border border-gold/20 text-cream focus:border-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-cream/80 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-wood-medium/50 border border-gold/20 text-cream focus:border-gold focus:outline-none resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="glass-card rounded-lg overflow-hidden h-96">
          {/* Placeholder for map - in a real application, integrate Google Maps or similar */}
          <div className="w-full h-full bg-wood-medium/30 flex items-center justify-center">
            <p className="text-cream/60">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
