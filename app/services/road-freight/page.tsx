"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  CheckCircle,
  Phone,
  MessageCircle,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap
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

export default function RoadFreightPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/vintage5.png" 
            alt="Road Freight Background" 
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
              <Truck className="h-4 w-4" />
              RELIABLE SADC LOGISTICS
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic"
            >
              Road <br />
              <span className="text-[#2563eb]">Freight</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg"
            >
              Secure and timely road transportation solutions. We move your cargo across borders with real-time tracking and verified freight protocols.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xl shadow-2xl shadow-blue-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Get Transport Quote</span>
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
            <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-slate-50 order-2 lg:order-1">
              <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200" alt="Trucking Fleet" fill className="object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">On Time <br/><span className="text-[#2563eb] italic">Every Time.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-[#2563eb] pl-8">
                Our extensive fleet and partner network allow us to move any commodity across the SADC region. From local deliveries in South Africa to long-haul cross-border logistics.
              </p>
              <div className="space-y-4">
                {[
                  "Specialized SADC Cross-Border Transport",
                  "Local Road Freight within South Africa 🇿🇦",
                  "Real-time GPS tracking and transit updates",
                  "Verified and secure freight protocols",
                  "Dedicated logistics coordination desk",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700 italic">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white rounded-[60px] mx-6 mb-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#2563eb]/20 blur-[120px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter italic">Move Your <span className="text-[#2563eb]">Cargo Today.</span></h2>
           <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto italic font-medium">Reliable road freight solutions tailored for your business needs.</p>
           <Button asChild size="xl" className="h-20 px-12 rounded-[24px] btn-primary-new text-xl shadow-2xl">
              <Link href="/contact" className="flex items-center gap-3">
                <Phone className="h-6 w-6" /> Call for Dispatch
              </Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
