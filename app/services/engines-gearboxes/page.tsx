"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle,
  MessageCircle,
  Zap,
  MapPin,
  Award,
  ArrowRight,
  Wrench,
  Cpu,
  Gauge,
  Phone
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
    icon: Zap,
    title: "Complete Sets",
    description: "Preloved complete engines and gearboxes with computer ECU included — ready to install.",
  },
  {
    icon: Award,
    title: "Great Condition",
    description: "Low kilometer units that are fully inspected for great condition and reliable performance.",
  },
  {
    icon: Cpu,
    title: "ECU Included",
    description: "Each unit comes with the original computer ECU for seamless plug-and-play integration.",
  },
  {
    icon: ShieldCheck,
    title: "Cash and Carry",
    description: "Convenient cash and carry process at our EngineLand store for immediate pickup.",
  },
];

const engineImages = [
  { src: "/new-img/engine1.jpeg", alt: "Complete Engine Unit" },
  { src: "/new-img/engine2.jpeg", alt: "Engine & Gearbox Set" },
  { src: "/new-img/engine3.jpeg", alt: "Low KM Engine Assembly" },
];

export default function EnginesGearboxesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Hero Slider */}
      <ServiceHero
        title="Engines &"
        subtitle="Gearboxes"
        description="Preloved complete engines and gearboxes with computer ECU, boasting low kilometers and great condition. Cash and carry available directly from our EngineLand store on Sylvester Ntuli Road, Durban."
        tag="Preloved Automotive Parts"
        images={["/new-img/engine1.jpeg", "/new-img/engine2.jpeg", "/new-img/engine3.jpeg"]}
        icon={Wrench}
      />

      {/* Engine Gallery Section */}
      <section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#2563eb] font-black uppercase tracking-[0.3em] text-[11px] block mb-4"
            >
              Our Inventory
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 uppercase"
            >
              Premium <span className="text-[#2563eb] italic">Stock.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-500 font-medium italic max-w-2xl mx-auto"
            >
              Browse our selection of quality preloved engines and gearboxes — all inspected, low kilometer, and ready for immediate pickup.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {engineImages.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl shadow-black/10 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
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
              Quality <span className="text-[#2563eb] italic">Assured.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-500 font-medium italic max-w-3xl mx-auto"
            >
              We provide the highest caliber used automotive parts, prioritizing longevity and performance for every unit.
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
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/5 blur-[100px]" />
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-black tracking-tighter mb-12 text-center uppercase leading-none"
            >
              Direct <span className="text-[#2563eb] italic">Availability.</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-20 rounded-[48px]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {[
                   "Preloved complete engines",
                   "Preloved complete gearboxes",
                   "Computer ECU included with every unit",
                   "Low kilometer — verified assessments",
                   "Inspected for great running condition",
                   "Cash and carry from EngineLand, Durban",
                   "Sylvester Ntuli Road location",
                   "Wide range of makes and models available",
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

      {/* Location Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-[#2563eb] font-black uppercase tracking-[0.3em] text-[11px] block mb-6"
              >
                Visit Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-8 uppercase leading-none"
              >
                EngineLand <br />
                <span className="text-[#2563eb] italic">Durban.</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-500 font-medium italic leading-relaxed mb-8"
              >
                Visit our dedicated EngineLand store on Sylvester Ntuli Road in Durban. Browse our full range of preloved engines and gearboxes in person, inspect the quality yourself, and take your purchase home the same day.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  { icon: MapPin, label: "Sylvester Ntuli Road, Durban" },
                  { icon: Gauge, label: "Low KM verified — great condition" },
                  { icon: ShieldCheck, label: "Cash & carry — no delays" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#2563eb] shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl"
            >
              <Image
                src="/new-img/engine2.jpeg"
                alt="EngineLand Store Durban"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6">
                  <p className="font-black text-slate-900 text-lg uppercase tracking-tight">EngineLand Store</p>
                  <p className="text-sm text-slate-500 font-medium italic">Sylvester Ntuli Road, Durban — Cash & Carry</p>
                </div>
              </div>
            </motion.div>
          </div>
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
               Get Your <span className="gradient-text italic">Engine Today.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 font-medium mb-16 max-w-3xl mx-auto italic leading-relaxed">
               Drop by our EngineLand store on Sylvester Ntuli Road or contact us to check availability of specific makes and models.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] btn-primary-new text-xl shadow-2xl">
                <Link href="/contact" className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" /> Contact Us
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
