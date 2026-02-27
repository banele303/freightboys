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
  FileText,
  Globe,
  ArrowRight,
  ClipboardCheck
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

export default function CustomsClearingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/vintage6.png" 
            alt="Customs Clearing Background" 
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
              <ShieldCheck className="h-4 w-4" />
              FULLY COMPLIANT BROKERAGE
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic"
            >
              Customs <br />
              <span className="text-[#2563eb]">Clearing</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg"
            >
              Precision logistics and expert customs brokerage. We ensure your cargo moves across borders with zero delays and 100% compliance.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xl shadow-2xl shadow-blue-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Start Request</span>
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Seamless <br/><span className="text-[#2563eb] italic">Border Logistics.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-[#2563eb] pl-8">
                We simplify the complex world of international trade. Our team handles everything from tariff classifications to duty calculations, ensuring your cargo moves without delay.
              </p>
              <div className="space-y-4">
                {[
                  "Expert Import & Export Customs Documentation",
                  "SARS and Customs Compliance Management",
                  "Accurate Tariff Classification & Duty Calculations",
                  "Cross-border forwarding for SADC & Global routes",
                  "Real-time tracking of clearance status",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700 italic">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image src="/from-jap2.png" alt="Seamless Border Logistics" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white rounded-[60px] mx-6 mb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2563eb]/20 blur-[120px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter italic">Ready for <span className="text-[#2563eb]">Global Trade?</span></h2>
           <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto italic font-medium">Partner with South Africa's most professional customs clearing unit today.</p>
           <Button asChild size="xl" className="h-20 px-12 rounded-[24px] btn-primary-new text-xl shadow-2xl">
              <Link href="/contact" className="flex items-center gap-3">
                <Phone className="h-6 w-6" /> Contact Our Broker
              </Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
