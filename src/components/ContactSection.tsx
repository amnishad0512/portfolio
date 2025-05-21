import React from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">//</span> Get In Touch
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="form-group">
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md bg-secondary border border-border"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md bg-secondary border border-border"
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 rounded-md bg-secondary border border-border"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
              <Button type="submit" className="flex items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg border border-border p-6 space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span>Chhattisgarh, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <a href="mailto:amnishad0512@gmail.com" className="hover:text-primary">amnishad0512@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <a href="tel:+918435925392" className="hover:text-primary">+91 8435925392</a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/amnishad0512" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/50 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/amnishad0512/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/50 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
