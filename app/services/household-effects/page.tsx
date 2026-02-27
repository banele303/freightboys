"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Package, ArrowRight, Phone, Truck, ShieldCheck, MapPin, Clock, Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function HouseholdEffectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image src="/new-img/new-img4.jpeg" alt="Household Effects" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ef4444]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-red-500/40 rounded-full">
              <Package className="h-4 w-4" /> Local & International Relocation
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic">
              Household <br /> <span className="text-[#ef4444]">Effects</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
              Professional packaging and loading into containers tailored for leaving the country, moving within, or coming to South Africa.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#ef4444] hover:bg-[#dc2626] text-white text-xl shadow-2xl shadow-red-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Request Quote</span>
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

      {/* Services Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest mb-2 block">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">Our <span className="text-[#ef4444]">Process</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We assess your household goods and plan the best packing and shipping strategy.", icon: Star },
              { step: "02", title: "Professional Packing", desc: "Our expert team carefully packs all your belongings using industry-grade materials.", icon: Package },
              { step: "03", title: "Transport & Customs", desc: "We handle all customs documentation and transport logistics door-to-door.", icon: Truck },
              { step: "04", title: "Delivery & Unpack", desc: "Your goods arrive safely. We unpack everything and return the container.", icon: CheckCircle },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 group hover:bg-[#ef4444] hover:border-[#ef4444] transition-all duration-500"
              >
                <span className="text-7xl font-black text-slate-100 group-hover:text-white/20 absolute top-4 right-6 transition-colors">{item.step}</span>
                <div className="w-14 h-14 bg-[#ef4444]/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <item.icon className="w-7 h-7 text-[#ef4444] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-white uppercase tracking-tight mb-3 transition-colors">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-white/80 font-medium italic text-sm leading-relaxed transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="/new-img/new-img5.jpeg" alt="Relocation Packing" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ef4444]/30 to-transparent" />
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 order-1 lg:order-2">
              <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest">Comprehensive Solutions</span>
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Seamless <br /><span className="text-[#ef4444] italic">Relocations.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                Whether you are leaving the country, moving within South Africa, or relocating into the country — we handle your customs clearing, transport, and unpacking your goods before returning the container.
              </p>
              <div className="space-y-4">
                {["Professional packing and loading", "Local and international moves", "Full customs clearing assistance", "Unpacking at your destination", "Container returns handled", "Insurance advisory available", "Door-to-door service"].map((item, i) => (
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

      {/* Moving Scenarios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2563eb] font-black text-[10px] uppercase tracking-widest mb-2 block">Tailored Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">We Handle <span className="text-[#2563eb]">Every Move</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Leaving South Africa", desc: "Complete export packing, customs documentation, and container loading for international emigration.", image: "/new-img/new-img6.jpeg", icon: MapPin },
              { title: "Moving Within SA", desc: "National household relocations with professional packing, transport, and unpacking services.", image: "/new-img/new-img3.jpeg", icon: Truck },
              { title: "Arriving in SA", desc: "Import clearance, container offloading, delivery, and complete unpacking at your new home.", image: "/new-img/new-img12.jpeg", icon: ShieldCheck },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#ef4444] rounded-2xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-3">{item.title}</h3>
                  <p className="text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#ef4444] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/new-img/new-img4.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">Ready To <span className="text-white/80">Move?</span></h2>
          <p className="text-white/80 text-lg font-medium mb-10 max-w-xl mx-auto italic">Let Freightboys take the stress out of your relocation — locally or internationally.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-white text-[#ef4444] rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center gap-2">
              Get A Free Quote <ArrowRight className="w-4 h-4" />
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
