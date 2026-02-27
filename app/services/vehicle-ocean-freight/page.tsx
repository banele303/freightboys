"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  CheckCircle,
  Phone,
  MessageCircle,
  Ship,
  ArrowRight,
  ShieldCheck,
  Anchor
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

export default function VehicleOceanFreightPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/vintage2.png" 
            alt="Vehicle Ocean Freight Background" 
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
              VEHICLE CONTAINER SPECIALISTS
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic"
            >
              Ocean <br />
              <span className="text-[#2563eb]">Freight</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg"
            >
              Specialized vehicle container solutions. We ensure precision loading and secure maritime transit for your high-value assets.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xl shadow-2xl shadow-blue-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Book Loading Team</span>
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
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Precision <br/><span className="text-[#2563eb] italic">Vehicle Handling.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-[#2563eb] pl-8">
                Managing vehicle ocean freight requires more than just loading. It requires precision lashing, specialized chocking, and expert knowledge of maritime safety standards to ensure zero damage.
              </p>
              <div className="space-y-4">
                {[
                  "Specialized Loading into Ocean Containers",
                  "Expert Offloading from Maritime Containers",
                  "High-Precision Lashing & Securing",
                  "Detailed Inspection Reports for Every Unit",
                  "Global Shipping Coordination for Vehicles",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700 italic">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image src="/from-jap2.png" alt="Vehicle Container Loading" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white rounded-[60px] mx-6 mb-12 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2563eb]/10 blur-[150px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter italic">Trust Your <span className="text-[#2563eb]">Vehicle To Us.</span></h2>
           <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto italic font-medium">Expert vehicle container services from South Africa to the world.</p>
           <Button asChild size="xl" className="h-20 px-12 rounded-[24px] btn-primary-new text-xl shadow-2xl">
              <Link href="/contact" className="flex items-center gap-3">
                <Car className="h-6 w-6" /> Book Vehicle Loading
              </Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
