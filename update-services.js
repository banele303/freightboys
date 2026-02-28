const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'app/services');

function toTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getIconForService(name) {
  if (name.includes('container') || name.includes('packing')) return 'Package';
  if (name.includes('transport') || name.includes('freight')) return 'Truck';
  if (name.includes('vehicle') || name.includes('car')) return 'Car';
  if (name.includes('sea') || name.includes('boat')) return 'Ship';
  if (name.includes('customs') || name.includes('finance')) return 'FileText';
  if (name.includes('engine') || name.includes('workshop')) return 'Wrench';
  return 'Briefcase';
}

function generatePageContent(dirName) {
  const title = toTitleCase(dirName);
  const firstWord = title.split(' ')[0];
  const restWords = title.split(' ').slice(1).join(' ') || 'Services';
  const icon = getIconForService(dirName);

  return `"use client";

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
  Phone,
  Package,
  Truck,
  Car,
  Ship,
  FileText,
  Briefcase
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
    icon: ShieldCheck,
    title: "Expert Handling",
    description: "Our team ensures the highest level of care and precision for all ${title.toLowerCase()} requirements.",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description: "We set the standard for quality and reliability in the logistics and freight sector.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Optimized processes guarantee swift and efficient execution of your requests.",
  },
  {
    icon: CheckCircle,
    title: "Fully Compliant",
    description: "All operations are carried out strictly according to international and local regulations.",
  },
];

const galleryImages = [
  { src: "/new-img/new-img4.jpeg", alt: "${title} Operations 1" },
  { src: "/new-img/new-img6.jpeg", alt: "${title} Operations 2" },
  { src: "/new-img/new-img8.jpeg", alt: "${title} Operations 3" },
];

export default function ${dirName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Hero Slider */}
      <ServiceHero
        title="${firstWord}"
        subtitle="${restWords}"
        description="Comprehensive ${title.toLowerCase()} services tailored to meet your most demanding logistics and operational needs. We prioritize speed, security, and precision."
        tag="Premium Freight Services"
        images={["/new-img/new-img4.jpeg", "/new-img/new-img6.jpeg", "/new-img/new-img8.jpeg"]}
        icon={${icon}}
      />

      {/* Gallery Section */}
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
              Our Operations
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 uppercase"
            >
              Premium <span className="text-[#2563eb] italic">Execution.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-500 font-medium italic max-w-2xl mx-auto"
            >
              Browse a snapshot of our ${title.toLowerCase()} processes in action, handled by our expert logistics personnel.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {galleryImages.map((img, index) => (
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
              We provide the highest caliber service, prioritizing efficiency and performance for every operation.
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
              Service <span className="text-[#2563eb] italic">Highlights.</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-20 rounded-[48px]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {[
                   "Professional implementation",
                   "End-to-end logistics solutions",
                   "Certified operators and specialists",
                   "Real-time operational tracking",
                   "Comprehensive risk management",
                   "Scalable to project requirements",
                   "Customer-first service approach",
                   "Competitive and transparent pricing",
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
               Enhance Your <span className="gradient-text italic">Logistics.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 font-medium mb-16 max-w-3xl mx-auto italic leading-relaxed">
               Get in touch with us today to discuss your specific requirements and receive a customized plan for our ${title.toLowerCase()} service.
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
`;
}

const ignoreList = ['engines-gearboxes', 'page.tsx']; // already completed or is main

const directories = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

for (const dir of directories) {
  if (ignoreList.includes(dir)) continue;

  const pagePath = path.join(servicesDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    console.log('Updating', pagePath);
    const content = generatePageContent(dir);
    fs.writeFileSync(pagePath, content, 'utf8');
  } else {
    // create it? user said all services pages.
    console.log('Creating', pagePath);
    fs.mkdirSync(path.join(servicesDir, dir), { recursive: true });
    const content = generatePageContent(dir);
    fs.writeFileSync(pagePath, content, 'utf8');
  }
}

console.log('Done updating services pages.');
