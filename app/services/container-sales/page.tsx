"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle, Box, ArrowRight, Home, ShieldCheck, MapPin, Search } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function ContainerSalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image src="/new-img/conteiner2.jpeg" alt="Container Sales" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        </div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#ef4444]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-red-500/40 rounded-full">
              <Box className="h-4 w-4" /> New & Used Units
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic">
              Container <br /> <span className="text-[#ef4444]">Sales</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
              Sales of new and used shipping containers for diverse applications, ensuring high quality and structural durability.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#ef4444] hover:bg-[#dc2626] text-white text-xl shadow-2xl shadow-red-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Request Pricing</span>
                  <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="h-20 px-12 rounded-[24px] border-2 border-white/20 text-white text-xl font-black uppercase tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-all">
                <a href="tel:+27842667178" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" /> Call Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Uses & Use Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2563eb] font-black text-[10px] uppercase tracking-widest mb-2 block">Versatile Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">Container <span className="text-[#2563eb]">Applications</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Export Shipping", desc: "Cargo-worthy condition for safe international sea freight.", color: "bg-[#ef4444]" },
              { icon: Box, title: "Site Storage", desc: "Wind, water, and weather tight for on-site secure storage.", color: "bg-[#2563eb]" },
              { icon: Home, title: "Modifications", desc: "Converted into site offices, homes, or pop-up retail.", color: "bg-[#ef4444]" },
              { icon: Search, title: "Specialized", desc: "Reefer (refrigerated), open-top, and flat-rack availability.", color: "bg-[#2563eb]" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-slate-500 font-medium italic text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-24 md:py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl order-2 lg:order-1">
                  <Image src="/new-img/new-img3.jpeg" alt="Containers Inventory" fill className="object-cover" />
               </div>
               <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 order-1 lg:order-2">
                  <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest block">Massive Inventory</span>
                  <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Premium <br/><span className="text-[#ef4444] italic">Stock.</span></h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                    Whether you need a container for shipping overseas or secure on-site storage, our extensive inventory has you covered with the best units available.
                  </p>
                  <div className="space-y-4">
                     {[ "High-quality brand new units available", "Cargo-worthy and wind/watertight used stock", "Various sizes (10ft, 20ft, 40ft, High Cube)", "Readily available for immediate modification", "Secure crane delivery across South Africa", "Highly competitive market pricing"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <CheckCircle className="h-6 w-6 text-[#ef4444] flex-shrink-0" />
                           <span className="text-lg font-bold text-slate-700 italic">{item}</span>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Sizes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest mb-2 block">Specifications</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">Common <span className="text-[#ef4444]">Sizes</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: "20ft GP (General Purpose)", capacity: "33.2 cbm", payload: "Up to 28,000 kg", ideal: "Standard storage, site offices, small cargo." },
              { size: "40ft GP (General Purpose)", capacity: "67.7 cbm", payload: "Up to 26,000 kg", ideal: "Large equipment, heavy volume shipping, housing." },
              { size: "40ft HC (High Cube)", capacity: "76.4 cbm", payload: "Up to 26,000 kg", ideal: "Extra tall goods, maximum volume capacity." },
            ].map((unit, i) => (
              <div key={i} className="bg-slate-900 text-white p-10 rounded-[32px] border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-2xl font-black uppercase text-[#ef4444] mb-8">{unit.size}</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Volume</span>
                    <span className="font-black italic">{unit.capacity}</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Payload</span>
                    <span className="font-black italic">{unit.payload}</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-300 font-medium italic"><span className="text-white font-black not-italic uppercase tracking-widest text-[10px] block mb-1">Ideal For:</span> {unit.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#ef4444] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/new-img/new-img3.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">Need A <span className="text-white/80">Container?</span></h2>
          <p className="text-white/80 text-lg font-medium mb-10 max-w-xl mx-auto italic">Get in touch for current stock lists, condition reports, and immediate delivery quotes.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-white text-[#ef4444] rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center gap-2">
              Request Pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+27842667178" className="px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#ef4444] transition-all cursor-pointer">
              +27 84 266 7178
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
