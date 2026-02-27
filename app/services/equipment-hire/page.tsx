"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Phone, Wrench, Package, Truck, Clock, ShieldCheck, Cog } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function EquipmentHirePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image src="/new-img/equipment.jpeg" alt="Equipment Hire" fill className="object-cover opacity-30 object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#ef4444]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-red-500/40 rounded-full">
              <Wrench className="h-4 w-4" /> Logistics Machinery
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic">
              Equipment <br /> <span className="text-[#ef4444]">Hire</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
              We also have an equipment hire option available. Access our premium fleet of heavy lifting, handling, and logistics machinery with flexible terms.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#ef4444] hover:bg-[#dc2626] text-white text-xl shadow-2xl shadow-red-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Hire Equipment</span>
                  <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="h-20 px-12 rounded-[24px] border-2 border-white/20 text-white text-xl font-black uppercase tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-all">
                <a href="tel:+27842667178" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" /> Call For Rates
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest block">Heavy Duty</span>
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Power Your <br/><span className="text-[#ef4444] italic">Project.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                From port operations to site logistics, having the right equipment is critical. We offer a well-maintained fleet available for daily, weekly, or monthly hire.
              </p>
              <div className="space-y-4">
                {["Heavy duty forklifts and reach stackers", "Mobile cranes for abnormal loads", "Lowbed and flatbed trailers", "Container handling equipment", "Generators and site-support units", "Fully serviced and certified machinery"].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#ef4444] flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700 italic">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl">
              <Image src="/new-img/equipment-two.jpeg" alt="Heavy Machinery" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ef4444]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2563eb] font-black text-[10px] uppercase tracking-widest mb-2 block">Available Inventory</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">Our <span className="text-[#2563eb]">Equipment</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: "Lifting & Handling", desc: "Forklifts (3T to 16T), reach stackers, and empty container handlers for terminal and warehouse operations.", color: "bg-[#ef4444]" },
              { icon: Truck, title: "Haulage & Transport", desc: "Skeletal trailers, lowbeds, step-decks, and heavy-duty prime movers for localized or national moving.", color: "bg-[#2563eb]" },
              { icon: Cog, title: "Site Infrastructure", desc: "Portable lighting, generators, temporary fencing, and specialized tools required for complex logistics.", color: "bg-[#ef4444]" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Certified", desc: "Load tested & compliant", color: "text-[#ef4444]" },
              { icon: Wrench, title: "Maintained", desc: "Serviced between every hire", color: "text-[#2563eb]" },
              { icon: Clock, title: "Flexible", desc: "Daily to monthly contracts", color: "text-[#ef4444]" },
              { icon: Truck, title: "Delivered", desc: "Rapid site-delivery options", color: "text-[#2563eb]" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center hover:shadow-xl transition-all group">
                <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-4 scale-100 group-hover:scale-110 transition-transform`} />
                <h4 className="font-black text-slate-900 uppercase text-sm tracking-tight mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs font-medium italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#ef4444] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/new-img/equipment.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">Need Heavy <span className="text-white/80">Support?</span></h2>
          <p className="text-white/80 text-lg font-medium mb-10 max-w-xl mx-auto italic">Get in touch to check equipment availability and secure your booking.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-white text-[#ef4444] rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center gap-2">
              Check Availability <ArrowRight className="w-4 h-4" />
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
