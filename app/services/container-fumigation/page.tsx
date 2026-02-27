"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Wind, ArrowRight, Phone, ShieldX, Globe, Leaf } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function ContainerFumigationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <video 
          src="/new-img/VID-new.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-25" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />

        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#ef4444]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-red-500/40 rounded-full">
              <Wind className="h-4 w-4" /> Bio-Security Certified
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic">
              Container <br /> <span className="text-[#ef4444]">Fumigation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
              Professional container fumigation services to guarantee pest-free, compliant shipments meeting global agricultural standards.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#ef4444] hover:bg-[#dc2626] text-white text-xl shadow-2xl shadow-red-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Request Fumigation</span>
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

      {/* Detail Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="/new-img/new-img13.jpeg" alt="Fumigation Process" fill className="object-cover" />
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 order-1 lg:order-2">
              <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest block">Export Requirements</span>
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Export <br/><span className="text-[#ef4444] italic">Compliance.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                Ensure your shipments arrive safely without biological delays at the destination port. We provide rapid and effective fumigation required by international standards.
              </p>
              <div className="space-y-4">
                {[ 
                  "Certified bio-security treatments", 
                  "ISPM 15 compliance standards applied", 
                  "Safe and effective modern fumigation methods", 
                  "Post-treatment clearance documentation provided", 
                  "Protecting global agriculture and supply chains",
                  "Rapid turnaround to prevent shipping delays"
                ].map((item, i) => (
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

      {/* Why Fumigation */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight uppercase italic text-slate-900 mb-4">Why is <span className="text-[#ef4444]">Fumigation</span> Critical?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">Un-treated cargo can harbor invasive pests and diseases that threaten ecosystems. Global ports strictly enforce fumigation regulations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow text-center">
              <ShieldX className="w-12 h-12 text-[#ef4444] mx-auto mb-6" />
              <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">Pest Eradication</h3>
              <p className="text-slate-500 italic">Destroys wood-boring insects, termites, and agricultural pests hiding in wooden pallets and packaging materials.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow text-center">
              <Globe className="w-12 h-12 text-[#2563eb] mx-auto mb-6" />
              <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">Border Entry</h3>
              <p className="text-slate-500 italic">Most countries require a valid fumigation certificate for entry. Without it, cargo may be denied, quarantined, or destroyed at your cost.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow text-center">
              <Leaf className="w-12 h-12 text-[#ef4444] mx-auto mb-6" />
              <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">Safe & Certified</h3>
              <p className="text-slate-500 italic">Our methods are highly effective yet dissipate safely before transit, leaving no harmful residues on your cargo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#ef4444] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/new-img/new-img13.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">Secure Your <span className="text-white/80">Shipment.</span></h2>
          <p className="text-white/80 text-lg font-medium mb-10 max-w-xl mx-auto italic">Don't risk delays or rejections at the border. Get your cargo certified today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-white text-[#ef4444] rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center gap-2">
              Book Fumigation <ArrowRight className="w-4 h-4" />
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
