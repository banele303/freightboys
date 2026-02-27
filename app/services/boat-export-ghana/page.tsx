"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle,
  Phone,
  MessageCircle,
  Anchor,
  Globe,
  FileText,
  ArrowRight
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function BoatExportGhanaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/to-gana.png" 
            alt="Boat Export to Ghana" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-blue-500/40 rounded-full"
            >
              <Anchor className="h-4 w-4" />
              MARITIME EXPORT SOLUTIONS
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic"
            >
              Boat Export <br />
              <span className="text-[#2563eb]">to Ghana</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg"
            >
              Total export packing, loading, and lashing of boats from South Africa. Precision maritime logistics for Ghana and worldwide.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black text-[#2563eb] mb-12 flex items-center justify-center gap-2 relative group md:w-fit mx-auto"
            >
              R 10,000.00 <span className="text-lg text-slate-400 font-medium italic">/ Full Package</span>
              <span className="text-2xl text-white font-black cursor-help hover:text-[#ef4444] transition-colors ml-2">*</span>

              {/* Dark Theme Pricing Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 md:w-72 bg-[#0a0a0a]/95 backdrop-blur-xl text-white rounded-2xl p-4 md:p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 pointer-events-none transform translate-y-3 group-hover:translate-y-0 text-left">
                <span className="text-[#2563eb] font-black uppercase tracking-[0.2em] block mb-1 text-[8px] md:text-[10px]">Pricing Notice</span>
                <p className="text-[10px] md:text-xs font-medium leading-relaxed text-slate-300 font-sans tracking-normal">
                  Price estimates fluctuate depending on the dollar exchange rate. All listed prices must include VAT.
                </p>
                {/* Tooltip Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a]/95 border-t border-l border-white/10 rotate-45 transform pointer-events-none"></div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xl shadow-2xl shadow-blue-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Get Export Quote</span>
                  <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white/20 skew-x-[-20deg]"
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="/gana2.png" alt="Boat Lashing Operations" fill className="object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Worldwide <br/><span className="text-primary italic">Boat Transit.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                From South Africa to Ghana 🇬🇭 and worldwide destinations, we provide specialized maritime loading and inspection services for high-value marine cargo.
              </p>
              <div className="space-y-4">
                {[
                  "Dedicated Boat export packing and lashing",
                  "Inclusive pre-loading and post-loading inspection reports",
                  "Professional cargo handling standards for South Africa 🇿🇦",
                  "Verified worldwide 🌐 delivery network",
                  "Heavy-duty marine-grade lashing equipment",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700 italic">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
