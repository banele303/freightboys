"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Globe,
  Zap,
  CheckCircle,
  Phone,
  MessageCircle,
  Car,
  Ship,
  Container,
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

const features = [
  {
    icon: Globe,
    title: "Japan & Singapore Sourcing",
    description: "Expert logistics for used vehicles specifically from major hubs in Japan and Singapore.",
  },
  {
    icon: ShieldCheck,
    title: "Bonded Transit Services",
    description: "Fully bonded transit solutions for SADC countries, ensuring secure cross-border movement.",
  },
  {
    icon: Ship,
    title: "Containerized Shipping",
    description: "Specialized 5 and 6 unit containerized vehicle shipping to maximize efficiency and safety.",
  },
  {
    icon: Zap,
    title: "Efficient Clearance",
    description: "Rapid customs clearing and forwarding to minimize delays at the port.",
  },
];

export default function ImportUsedVehiclesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/from-japan.png" 
            alt="Import Used Vehicles Background" 
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
              <Car className="h-4 w-4" />
              Service Code: KNE103U
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic"
            >
              Used <br />
              <span className="text-[#2563eb]">Vehicles</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg"
            >
              Specialist containerized importation (5-6 units) from Japan & Singapore. Seamless transit to South Africa and SADC countries.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black text-[#2563eb] mb-12"
            >
              R 1,950.00 <span className="text-lg text-slate-400 font-medium italic">/ Unit Support</span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xl shadow-2xl shadow-blue-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Start Inquiry</span>
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

      {/* Features Grid */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 uppercase"
            >
              Global <span className="text-[#2563eb] italic">Transit.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-500 font-medium italic max-w-3xl mx-auto"
            >
              Focusing on the South African industry with dedicated bonded transit for our partners in neighboring SADC countries.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:border-blue-500/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2563eb] transition-colors">
                  <feature.icon className="h-8 w-8 text-slate-700 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed italic text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 md:py-40 bg-slate-900 text-white relative overflow-hidden rounded-[60px] mx-6">
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-black tracking-tighter mb-12 text-center uppercase leading-none"
            >
              The Freightboys <span className="text-[#2563eb] italic">Promise.</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-20 rounded-[48px]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {[
                   "Direct Japan & Singapore routes",
                   "Bonded transit warehousing",
                   "Vehicle condition verification",
                   "Customs documentation & duties",
                   "SADC cross-border coordination",
                   "Container packing optimization",
                   "Real-time shipment tracking",
                   "Local delivery in South Africa",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <CheckCircle className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors italic">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 text-slate-900 leading-tight uppercase">
               Ready to <span className="gradient-text italic">Import?</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 font-medium mb-16 max-w-3xl mx-auto italic leading-relaxed">
               Partner with South Africa's leading containerized vehicle import specialists for seamless transit to SADC and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] btn-primary-new text-xl shadow-2xl">
                <Link href="/contact" className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" /> Start Inquiry
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="h-20 px-12 rounded-[24px] border-4 border-slate-100 text-xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
