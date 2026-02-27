"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Settings,
  Battery,
  Disc,
  Wind,
  ShieldCheck,
  Zap,
  Package,
  ShoppingBag,
  ChevronRight,
  Truck,
  Wrench,
  Activity,
  Box,
  Cog,
  Layers,
  Gauge,
  Award,
  Gem,
  Anchor,
  ArrowDownToLine,
  Car,
  Ship
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const serviceCategories = [
  {
    icon: ShieldCheck,
    title: "Customs Clearing & Forwarding",
    subtitle: "Professional Brokerage",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
    description: "I do customs clearing and forwarding. Expert customs brokerage services ensuring efficient movement of goods across borders with full compliance support.",
    tags: ["Import/Export", "Compliance", "Brokerage"],
    link: "/services/customs-clearing-forwarding",
    price: "Expert Service"
  },
  {
    icon: Truck,
    title: "Road Freight",
    subtitle: "Reliable Logistics",
    image: "https://images.unsplash.com/photo-1519003300449-424ad040507b?q=80&w=1200",
    description: "I do roadfreight. Secure and timely road transportation solutions for both local and cross-border cargo movement throughout Southern Africa with real-time tracking.",
    tags: ["Cross-Border", "Local Delivery", "Secure"],
    link: "/services/road-freight",
    price: "Custom Quote"
  },
  {
    icon: Box,
    title: "Container Solutions",
    subtitle: "Import & Export",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    description: "I load and unload cargo into containers either into or out of the country ie import export. Professional stuffing and de-stuffing with maximum safety standards.",
    tags: ["LCL/FCL", "Import", "Export"],
    link: "/services/container-solutions",
    price: "Custom Quote"
  },
  {
    icon: Ship,
    title: "Vehicle Ocean Freight",
    subtitle: "Container Specialists",
    image: "/offloading.png",
    description: "I specialize in loading and offloading vehicles in ocean freight containers. High-precision lashing and secure transit for vehicles worldwide.",
    tags: ["Vehicles", "Ocean Freight", "Loading"],
    link: "/services/vehicle-ocean-freight",
    price: "Specialist Rate"
  },
  {
    icon: Car,
    title: "Import Used Vehicles",
    subtitle: "5 & 6 Unit Containers",
    image: "/from-japan.png",
    description: "Used cars from Japan & Singapore to South Africa. BONDED as transit to SADC COUNTRIES IN AFRICA. Our specialized 5 & 6 unit containerized shipping maximizes efficiency. Ref: KNE103U.",
    tags: ["Used Cars", "Bonded", "Japan/Singapore"],
    link: "/services/import-used-vehicles",
    price: "R 1,950.00"
  },
  {
    icon: Layers,
    title: "Container Offloading",
    subtitle: "Used & New Rides",
    image: "/new-tailand.png",
    description: "Expert offloading and unpacking of new and used vehicles from shipping containers. Used and new rides taken out from shipping containers with precision handling.",
    tags: ["Offloading", "Unpacking", "Handling"],
    link: "/services/container-offloading",
    price: "R 4,566.00"
  },
  {
    icon: Award,
    title: "Brand New 2025 Vehicles",
    subtitle: "Cross-Border Ready",
    image: "/from-jp2.png",
    description: "Brand new cars for cross-border use out of South Africa to SADC regions. Logistics handled with premium care for showroom-ready delivery.",
    tags: ["2025 Models", "New Cars", "Export"],
    link: "/services/cross-border-new-cars",
    price: "R 2,999,999.00"
  },
  {
    icon: Gem,
    title: "Vintage Vehicles Packing",
    subtitle: "Prized Relocation",
    image: "/vintage.png",
    description: "Receiving and inspection of used collectors vehicles relocation by owner to New Zealand 🇳🇿. Prized vehicles carefully driven in and lashed to perfection ensuring they are received scratch free.",
    tags: ["Vintage", "New Zealand", "Relocation"],
    link: "/services/vintage-vehicles-packing",
    price: "R 3,950.00"
  },
  {
    icon: Anchor,
    title: "Boat Export to Ghana",
    subtitle: "Maritime Logistics",
    image: "/to-gana.png",
    description: "We handle the loading and packaging lashing and inspection reports before and after of all types of cargo handling from South Africa to Ghana and worldwide.",
    tags: ["Boat Export", "Ghana", "Worldwide"],
    link: "/services/boat-export-ghana",
    price: "R 10,000.00"
  },
  {
    icon: ArrowDownToLine,
    title: "Thailand Vehicle Import",
    subtitle: "New Ride Unpacking",
    image: "/tailand.png",
    description: "Unpacking of import cargo specializing in brand new vehicles from Thailand 🇹🇭. Professional handling to maintain showroom standards. Ref: KNE101B.",
    tags: ["Thailand", "Import", "Unpacking"],
    link: "/services/thailand-vehicle-import",
    price: "R 1,950.00"
  },
  {
    icon: Package,
    title: "General Export Packing",
    subtitle: "Commodity Loading",
    image: "/packing.png",
    description: "We handle all types of commodity loading into shipping containers. Expert stuffing and securing for safe international maritime transport.",
    tags: ["Export", "Packing", "Container"],
    link: "/services/general-export-packing",
    price: "R 6,789.00"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#F8F9FB]">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/5 rounded-bl-[100px] -z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-8"
            >
              <Package className="h-3 w-3 text-primary" /> Integrated Logistics Solutions
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-[80px] font-black tracking-tighter leading-[0.9] text-slate-900 mb-8"
            >
              FREIGHT <br />
              <span className="gradient-text italic uppercase">EXCELLENCE.</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed italic"
            >
              Professional customs clearing, road freight, and container solutions for the South African freight industry. Ensuring your imports and exports move <span className="text-slate-900 not-italic font-bold">seamlessly and efficiently</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden bg-slate-100 mb-12 group-hover:shadow-3xl group-hover:-translate-y-4 transition-all duration-700 shadow-2xl shadow-black/5 p-[2px] pb-0">
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                    <Image 
                      src={category.image} 
                      alt={category.title} 
                      fill 
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                    />
                  </div>
                  <div className="absolute top-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-primary transition-colors z-10">
                    <category.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="px-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                       {category.tags.map(tag => (
                         <span key={tag} className="px-3 py-1 bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-400 rounded-full border border-slate-100">{tag}</span>
                       ))}
                    </div>
                    {category.price && (
                      <span className="text-sm font-black text-[#2563eb]">{category.price}</span>
                    )}
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tight text-slate-900 mb-6">{category.title}</h3>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 italic">{category.description}</p>
                  
                  <Button asChild variant="ghost" className="p-0 h-auto text-slate-900 font-black uppercase tracking-widest text-[11px] group/btn hover:bg-transparent">
                    <Link href={category.link || "/contact"} className="flex items-center gap-2">
                      {category.link === "/services" ? "Get Quote" : "Explore Details"} <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Logistics */}
      <section className="py-32 bg-slate-900 text-white rounded-[60px] mx-6 mb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-20">
             <div className="space-y-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                   <Truck className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-4xl font-black tracking-tight leading-none">GLOBAL <br /><span className="text-primary italic">MOVEMENT.</span></h4>
                <p className="text-slate-400 font-medium leading-relaxed italic">Seamless cross-border and local road freight services tailored to your needs.</p>
             </div>
             <div className="space-y-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                   <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-4xl font-black tracking-tight leading-none">SECURITY <br /><span className="text-primary italic">ASSURED.</span></h4>
                <p className="text-slate-400 font-medium leading-relaxed italic">Professional customs clearing and compliance to secure your global shipments.</p>
             </div>
             <div className="space-y-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                   <Activity className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-4xl font-black tracking-tight leading-none">PROFESSIONAL <br /><span className="text-primary italic">ADVICE.</span></h4>
                <p className="text-slate-400 font-medium leading-relaxed italic">Consult with our logistics experts for efficient container loading and unloading.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-none mb-12 uppercase">
            REQUEST A <span className="gradient-text italic uppercase">QUOTE.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
             <Button asChild size="xl" className="h-20 px-12 rounded-[24px] btn-primary-new text-xl shadow-2xl">
                <a href="tel:+27842667178" className="flex items-center gap-3">
                   <Phone className="h-6 w-6" /> Call Desk
                </a>
             </Button>
             <Button asChild size="xl" variant="outline" className="h-20 px-12 rounded-[24px] border-4 border-slate-100 text-xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                <a href="mailto:info@freightboys.co.za" className="flex items-center gap-3">
                   <MessageCircle className="h-6 w-6" /> Email Us
                </a>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
