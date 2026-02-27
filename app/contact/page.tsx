"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Package,
  ArrowRight,
  ShieldCheck,
  Truck
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Convex Mutation
  const createInquiry = useMutation(api.inquiries.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createInquiry({
        ...formData,
      });
      setIsSubmitted(true);
      toast.success("Quote request received! Our experts will call you.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to process request. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* cinematic Header */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <NextImage 
            src="/vintage6.png" 
            alt="Contact Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-blue-500/40 rounded-full"
            >
              <Phone className="h-4 w-4" />
              Direct Logistics Desk
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic"
            >
              ELITE <br />
              <span className="text-[#2563eb]">COMMUNICATION.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-3xl text-slate-300 font-medium leading-relaxed max-w-3xl italic drop-shadow-lg"
            >
              South Africa&apos;s most responsive logistics experts. Professional advice on all your cargo requirements — local movement, cross-border and overseas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Interaction Area */}
      <section className="pb-32 -mt-16 relative z-20 px-6">
        <div className="container mx-auto px-0">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact Details Pane */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-10"
            >
              <div className="bg-slate-50 p-12 rounded-[50px] border border-slate-100 shadow-xl shadow-black/5">
                <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8 leading-none">THE FREIGHT <br /><span className="text-primary italic">EXPERIENCE.</span></h3>
                <div className="space-y-8">
                   <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Location</p>
                         <p className="text-xl font-bold text-slate-900 italic leading-tight">Professional Logistics Hub<br />South Africa</p>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Availability</p>
                         <p className="text-xl font-bold text-slate-900 italic leading-tight">Ready to facilitate<br />Your movement 24/7</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="grid gap-6">
                <Link href="tel:+27842667178" className="group p-8 bg-white border border-slate-100 rounded-[32px] flex items-center gap-8 hover:shadow-2xl transition-all">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="h-7 w-7 text-slate-900" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Logistics Line</p>
                      <h4 className="text-2xl font-black text-slate-900 italic">+27 84 266 7178</h4>
                   </div>
                </Link>
                <Link href="mailto:Freightboys@gmail.com" className="group p-8 bg-white border border-slate-100 rounded-[32px] flex items-center gap-8 hover:shadow-2xl transition-all">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="h-7 w-7 text-slate-900" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Inquiry</p>
                      <h4 className="text-2xl font-black text-slate-900 italic">Freightboys@gmail.com</h4>
                   </div>
                </Link>
              </div>
            </motion.div>

            {/* Smart Form Pane */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-slate-900 p-12 md:p-20 rounded-[60px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 relative z-10"
                    >
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10">
                         <CheckCircle className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-6">Quote Request <br /><span className="text-primary italic">Logged.</span></h3>
                      <p className="text-xl text-slate-400 font-medium italic mb-12">Our cargo specialists will evaluate your requirements and contact you shortly.</p>
                      <Button onClick={() => setIsSubmitted(false)} className="rounded-full px-12 py-8 bg-white text-black font-black uppercase tracking-widest hover:bg-primary transition-all">
                         New Request
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" className="relative z-10">
                      <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-12 leading-none">REQUEST A <br /><span className="text-primary italic">QUOTE.</span></h3>
                      <form onSubmit={handleSubmit} className="space-y-8">
                         <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                               <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Full Name</label>
                               <input 
                                 type="text" 
                                 required
                                 placeholder="e.g. John Doe"
                                 className="w-full h-18 px-8 bg-white/5 border border-white/10 rounded-3xl text-white font-bold focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-white/10"
                                 value={formData.name}
                                 onChange={(e) => setFormData({...formData, name: e.target.value})}
                               />
                            </div>
                            <div className="space-y-3">
                               <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Phone Number</label>
                               <input 
                                 type="tel" 
                                 required
                                 placeholder="e.g. +27 84 266 7178"
                                 className="w-full h-18 px-8 bg-white/5 border border-white/10 rounded-3xl text-white font-bold focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-white/10"
                                 value={formData.phone}
                                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
                               />
                            </div>
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Email Address</label>
                            <input 
                              type="email" 
                              required
                              placeholder="e.g. Freightboys@gmail.com"
                              className="w-full h-18 px-8 bg-white/5 border border-white/10 rounded-3xl text-white font-bold focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-white/10"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Requested Service (Crating, Rigging, etc.)</label>
                            <textarea 
                              required
                              rows={5}
                              placeholder="Tell us about your cargo requirements..."
                              className="w-full p-8 bg-white/5 border border-white/10 rounded-3xl text-white font-bold focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none placeholder:text-white/10"
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                         </div>
                         <Button 
                           type="submit" 
                           disabled={isSubmitting}
                           className="w-full h-20 rounded-[32px] btn-primary-new text-xl shadow-2xl transition-all disabled:opacity-50"
                         >
                           {isSubmitting ? "TRANSMITTING..." : "GET QUOTE NOW"}
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Geospatial Section */}
      <section className="py-32 bg-[#F8F9FB] rounded-[60px] mx-6 mb-12">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <span className="text-primary font-black uppercase tracking-[0.4em] text-[11px] block mb-6 italic">Geographical Presence</span>
                 <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none text-slate-900 mb-10">THE HUB OF <br /><span className="gradient-text uppercase italic">SA LOGISTICS.</span></h2>
                 <p className="text-xl text-slate-500 font-medium italic mb-12">Strategically positioned for rapid response and efficient nationwide logistics access.</p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-widest text-[11px]">
                       <Truck className="h-5 w-5 text-primary" /> Daily Movement Across SA
                    </div>
                    <div className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-widest text-[11px]">
                       <MapPin className="h-5 w-5 text-primary" /> Central Operations Hub
                    </div>
                    <div className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-widest text-[11px]">
                       <ShieldCheck className="h-5 w-5 text-primary" /> Secure Loading Dock
                    </div>
                 </div>
              </div>
              <div className="relative rounded-[60px] overflow-hidden border-[12px] border-white shadow-2xl shadow-black/10 h-[500px]">
                 <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 italic">
                    Logistics Hub Map View
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
