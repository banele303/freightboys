"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Anchor, Users, ArrowUpFromLine, Activity, Phone, Ship } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function StevedoringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image src="/new-img/new-img14.jpeg" alt="Stevedoring Operations" fill className="object-cover opacity-30 object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#2563eb]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-blue-500/40 rounded-full">
              <Ship className="h-4 w-4" /> Port Operations
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic">
              Stevedoring <br /> <span className="text-[#ef4444]">Services</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
              We are currently in the process of applying for a fully-fledged stevedoring license to handle complex vessel loading and discharging operations at major South African ports.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#ef4444] hover:bg-[#dc2626] text-white text-xl shadow-2xl shadow-red-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Enquire Now</span>
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

      {/* Core Expertise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest mb-2 block">Our Vision</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">Vessel <span className="text-[#ef4444]">Handling</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Breakbulk Handling", desc: "Expert discharging and loading of heavy, non-containerized breakbulk cargo direct to vessel or wharf.", icon: ArrowUpFromLine, color: "bg-[#ef4444]" },
              { title: "Vessel Operations", desc: "Coordinating massive terminal operations safely, efficiently, and precisely within port windows.", icon: Anchor, color: "bg-[#2563eb]" },
              { title: "Manpower Deployment", desc: "Highly skilled teams of riggers, winchmen, operators and supervisors managing the load.", icon: Users, color: "bg-[#ef4444]" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
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

      {/* Detail Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl">
              <Image src="/new-img/new-img5.jpeg" alt="Port Logistics" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/20 to-transparent" />
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest block">Licensing In Progress</span>
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Future <br/><span className="text-[#ef4444] italic">Operations.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                As we finalize our formal stevedoring licensing, we are aligning our massive logistics infrastructure, heavy lifting equipment, and port teams to provide world-class vessel operations.
              </p>
              <div className="space-y-4">
                {["Heavy lift and project cargo handling", "Ro-Ro (Roll-on/Roll-off) vessel services", "Lashing, securing, and dunnage specialists", "Complete gear supply and certified tackle", "Ship-to-shore and shore-to-ship precision", "24/7 port side operational management"].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#ef4444] flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700 italic">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety & Productivity */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight uppercase italic text-slate-900 mb-4">Safety <br/> <span className="text-[#2563eb]">First.</span></h2>
              <p className="text-slate-500 text-lg font-medium italic mb-8">Stevedoring requires immense coordination. Operational safety and rapid turnaround times are our foundational priorities.</p>
              <div className="bg-[#ef4444]/10 border border-[#ef4444]/20 p-6 rounded-3xl">
                <Activity className="w-8 h-8 text-[#ef4444] mb-4" />
                <h4 className="font-black text-[#ef4444] uppercase tracking-widest text-sm mb-2">Turnaround Commitment</h4>
                <p className="text-[#ef4444]/80 text-sm italic">Minimizing port delays directly saves vessel charters money.</p>
              </div>
            </div>
            <div className="lg:col-span-2 relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl">
              <Image src="/new-img/new-img17.jpeg" alt="Port Docking" fill unoptimized className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#ef4444] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/new-img/new-img14.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">Discuss Port <span className="text-white/80">Operations?</span></h2>
          <p className="text-white/80 text-lg font-medium mb-10 max-w-xl mx-auto italic">Get in touch to discuss our forthcoming stevedoring capabilities and logistics integrations.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-white text-[#ef4444] rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center gap-2">
              Contact Our Port Team <ArrowRight className="w-4 h-4" />
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
