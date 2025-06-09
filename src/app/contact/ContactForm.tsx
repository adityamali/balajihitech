'use client';

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactItems = [
    {
      icon: <Phone className="w-10 h-10 text-primary mb-4" />,
      title: "Phone",
      content: "+91 98813 72830",
      href: "tel:+919881372830",
    },
    {
      icon: <Mail className="w-10 h-10 text-primary mb-4" />,
      title: "Email",
      content: "balajihitechg@gmail.com",
      href: "mailto:balajihitechg@gmail.com",
    },
    {
      icon: <MapPin className="w-10 h-10 text-primary mb-4" />,
      title: "Location",
      content: "Ichalkaranji, Maharashtra",
      href: "https://maps.app.goo.gl/jrgajxfWHgKkHeSN6",
    },
    {
      icon: <Clock className="w-10 h-10 text-primary mb-4" />,
      title: "Business Hours",
      content: "Mon - Sat: 9AM - 6PM",
      href: null,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)]">
        {/* Contact Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or interested in wholesale opportunities? 
            Get in touch with our team and we'll be happy to assist you.
          </p>
        </motion.div>
        
        {/* Contact Cards */}
        <div className="flex flex-col gap-8 w-full mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {item.href ? (
                  <Link href={item.href}>
                    <div className="flex flex-col items-center p-6 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors h-full shadow-sm">
                      {item.icon}
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-center">{item.content}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center p-6 border rounded-lg h-full shadow-sm">
                    {item.icon}
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-center">{item.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column contact form*/}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="p-6 border rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formState.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formState.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={6}
                    className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-50 text-green-700 rounded-md"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-50 text-red-700 rounded-md"
                  >
                    There was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right Column contact map*/}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="p-6 border rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-6">Find us on Map</h2>
              <div className="w-full h-[400px] bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4513.047611021716!2d74.45825124808842!3d16.706756240435354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQyJzI2LjQiTiA3NMKwMjcnMzUuNCJF!5e0!3m2!1sen!2sin!4v1739093188840!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Balaji Hi-Tech Garments Location"
                  className="rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Full Address</h3>
                <p className="text-muted-foreground">
                  G.NO. -486, Bhatale Mala, Datt Nagar, Ichalkaranji - 416115, Maharashtra, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}