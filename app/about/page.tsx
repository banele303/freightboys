"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  Target,
  ArrowRight,
  Truck,
  Package,
  Activity,
  CheckCircle,
  Quote
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <NextImage 
            src="/vintage.png" 
            alt="About Freightboys Background" 
            fill 
            className="object-cover opacity-30"
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
              <HeartHandshake className="h-4 w-4" />
              ESTABLISHED LOGISTICS ELITE
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic"
            >
              THE ARCHITECTS <br />
              <span className="text-[#2563eb]">OF CARGO.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-3xl text-slate-300 font-medium leading-relaxed max-w-3xl italic drop-shadow-lg"
            >
              Freightboys is South Africa&apos;s premier customs clearing and forwarding provider, bridging the gap between <span className="text-white not-italic font-black">global trade</span> and local commerce.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                 <span className="text-[#2563eb] font-black uppercase tracking-[0.4em] text-[11px] block italic border-l-4 border-[#2563eb] pl-6">Our Legacy</span>
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] uppercase">BEYOND THE <br/><span className="text-[#2563eb] italic">SHIPMENT.</span></h2>
                 <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-8">
                   We don't just move boxes; we move businesses. From complex customs clearing to high-speed road freight, our specialty is the seamless flow of goods.
                 </p>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   Founded on the principles of precision and service, Freightboys has evolved into a logistics powerhouse. We ensure your assets reach their destination with zero compromises, every single time.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="px-10 py-8 bg-slate-50 rounded-[40px] border border-slate-100 group hover:bg-[#2563eb] transition-all duration-500">
                       <p className="text-6xl font-black text-[#2563eb] mb-2 group-hover:text-white">15+</p>
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white/60 text-wrap">Years Of Excellence</p>
                    </div>
                    <div className="px-10 py-8 bg-slate-50 rounded-[40px] border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
                       <p className="text-6xl font-black text-slate-900 mb-2 group-hover:text-white">100%</p>
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white/60 text-wrap">Quality Guarantee</p>
                    </div>
                 </div>
              </motion.div>
              
              <div className="relative">
                 <div className="relative rounded-[60px] overflow-hidden shadow-2xl shadow-black/10 border-[15px] border-white z-10">
                    <NextImage 
                      src="/newpn.png" 
                      alt="Operations Team" 
                      width={800} 
                      height={1000} 
                      className="object-cover h-[700px] w-full"
                    />
                 </div>
                 <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -right-8 -bottom-8 w-72 h-72 bg-[#2563eb] rounded-[50px] z-20 flex items-center justify-center p-12 text-center text-white shadow-3xl shadow-blue-500/30"
                 >
                    <Quote className="absolute top-8 left-8 h-12 w-12 text-white/10" />
                    <p className="text-2xl font-black leading-tight uppercase italic">"Precision is our signature."</p>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#0a0a0a] rounded-[80px] mx-6">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 italic uppercase">OUR <span className="text-[#2563eb] not-italic">PILLARS.</span></h2>
             <p className="text-xl text-slate-400 font-medium italic">High-performance logistics built on absolute trust.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Reliability", 
                desc: "Every shipment is treated with elite care, ensuring perfect arrivals worldwide.",
                color: "bg-blue-900/20 text-[#2563eb]"
              },
              { 
                icon: Truck, 
                title: "Efficiency", 
                desc: "Advanced routing and real-time tracking for the fastest SADC movements.",
                color: "bg-blue-900/20 text-[#2563eb]"
              },
              { 
                icon: Activity, 
                title: "Versatility", 
                desc: "From specialized abnormal cargo to precision container stuffing, we do it all.",
                color: "bg-blue-900/20 text-[#2563eb]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl p-12 rounded-[50px] border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-white">{item.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
           <div className="relative bg-slate-900 p-16 lg:p-32 rounded-[80px] overflow-hidden text-center max-w-6xl mx-auto">
              <div className="absolute inset-0 z-0">
                <NextImage 
                  src="/packing2.png" 
                  alt="Commitment" 
                  fill 
                  className="object-cover opacity-20"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10"
              >
                 <h2 className="text-6xl md:text-[100px] font-black tracking-tighter text-white mb-12 leading-[0.85] uppercase">
                   JOIN THE <span className="text-[#2563eb] italic">ELITE</span> <br/>FREIGHT ERA.
                 </h2>
                 <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto italic leading-relaxed">
                   Experience the most professional customs and road freight service in Southern Africa.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-8">
                    <Button asChild size="xl" className="h-20 px-16 rounded-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xl shadow-2xl shadow-blue-500/40 relative overflow-hidden group font-black uppercase tracking-widest">
                       <Link href="/services">
                         <span className="relative z-10">Our Services</span>
                         <motion.div 
                           initial={{ x: "-100%" }}
                           whileHover={{ x: "100%" }}
                           transition={{ duration: 0.5 }}
                           className="absolute inset-0 bg-white/20 skew-x-[-20deg]"
                         />
                       </Link>
                    </Button>
                    <Button asChild size="xl" variant="outline" className="h-20 px-16 rounded-[24px] border-4 border-white/10 text-white hover:bg-white hover:text-black transition-all font-black text-xl tracking-widest uppercase">
                       <Link href="/contact">Get in Touch</Link>
                    </Button>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
