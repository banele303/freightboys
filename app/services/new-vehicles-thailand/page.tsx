"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle,
  MessageCircle,
  Car,
  Globe,
  Award,
  ArrowRight,
  Settings
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";

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
    icon: Award,
    title: "Brand New Models",
    description: "Sourced directly from Thailand and supplied 1 year before reaching African soil.",
  },
  {
    icon: Settings,
    title: "Tailored to Specs",
    description: "Tailor vehicles to exact customer specifications with all requested extras.",
  },
  {
    icon: Globe,
    title: "Direct Shipping",
    description: "Shipped directly to your destination country on African soil.",
  },
  {
    icon: ShieldCheck,
    title: "Full Compliance",
    description: "Comprehensive handling of all export permits and required documentation.",
  },
];

export default function NewVehiclesThailandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Hero Slider */}
      <ServiceHero
        title="New Vehicles"
        subtitle="From Thailand"
        description="Sourced from Thailand and supplied 1 year before it reaches African soil. Tailored to the specs you require with all requested extras, shipped directly to your destination country on Africa soil."
        tag="Thailand Imports"
        images={["/new-tailand.png", "/neww.png", "/gana3.png"]}
        icon={Car}
      />

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
              Exclusive <span className="text-[#2563eb] italic">Imports.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-500 font-medium italic max-w-3xl mx-auto"
            >
              We bring the latest models from Thailand, tailored precisely to your requirements and delivered directly to you.
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

      {/* Overview Section */}
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
              Tailored <span className="text-[#2563eb] italic">Specs.</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-20 rounded-[48px]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {[
                   "Sourced directly from Thailand",
                   "Available 1 year before typical African market",
                   "Customized with any required extras",
                   "Tailored to customer specifications",
                   "Direct shipping to your destination country",
                   "Premium import logistics management",
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
               Get Your <span className="gradient-text italic">Dream Vehicle.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 font-medium mb-16 max-w-3xl mx-auto italic leading-relaxed">
               Secure your brand new vehicle straight from Thailand with all custom specs configured for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] btn-primary-new text-xl shadow-2xl">
                <Link href="/contact" className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" /> Talk to an Expert
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="h-20 px-12 rounded-[24px] border-4 border-slate-100 text-xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
