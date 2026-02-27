"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ArrowRight, 
  Settings, 
  Disc, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award,
  ChevronRight,
  Phone,
  Package,
  ShoppingBag,
  Star,
  Quote,
  LayoutGrid,
  Cog,
  Gauge,
  Flame,
  ShieldAlert,
  Play,
  Cpu,
  Layers,
  Box,
  Terminal,
  Sparkles,
  BadgeCheck,
  Calendar,
  Headset,
  Globe,
  CreditCard,
  Anchor,
  Wind,
  Bike
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Elite Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const heroSlides = [
  {
    title: "CUSTOMS",
    subtitle: "CLEARING",
    desc: "Professional customs clearing and forwarding services. Efficient movement of goods across borders.",
    image: "/vintage6.png",
    tag: "South Africa Export",
    accent: "text-[#3b82f6]"
  },
  {
    title: "ROAD",
    subtitle: "FREIGHT",
    desc: "Reliable road transportation solutions for local and cross-border cargo movement throughout Southern Africa.",
    image: "/newpn.png",
    tag: "Global Logistics",
    accent: "text-[#2563eb]"
  },
  {
    title: "NEW",
    subtitle: "2025 RIDES",
    desc: "Premium sourcing and logistics for brand new 2025 models for cross-border use out of South Africa.",
    image: "/gana3.png",
    tag: "Cross-Border Elite",
    accent: "text-[#1d4ed8]"
  }
];

const categories = [
  { 
    name: "Customs Clearing", 
    icon: ShieldCheck, 
    count: "Expert Brokerage",
    image: "/from-jap2.png",
    href: "/services"
  },
  { 
    name: "Road Freight", 
    icon: Truck, 
    count: "Regional Logistics",
    image: "/from-jpg.png",
    href: "/services"
  },
  { 
    name: "Container Solutions", 
    icon: Box, 
    count: "Import & Export",
    image: "/new-img/container.jpeg",
    href: "/services"
  },
  { 
    name: "Cargo Forwarding", 
    icon: Layers, 
    count: "Global Chain",
    image: "/from-jp2.png",
    href: "/services"
  },
  { 
    name: "Logistics Expert", 
    icon: Headset, 
    count: "24/7 Support",
    image: "/from-jpg.png",
    href: "/services"
  },
  { 
    name: "Container Sales", 
    icon: Box, 
    count: "New & Used",
    image: "/new-img/conteiner2.jpeg",
    href: "/services/container-sales"
  },
  { 
    name: "Household Effects", 
    icon: Package, 
    count: "Relocations",
    image: "/new-img/new-img3.jpeg",
    href: "/services/household-effects"
  },
  { 
    name: "Border Transport", 
    icon: Truck, 
    count: "Project Cargo",
    image: "/new-img/new-img4.jpeg",
    href: "/services/cross-border-transport"
  },
  { 
    name: "Sea Assessments", 
    icon: ShieldCheck, 
    count: "Lashing Certs",
    image: "/new-img/new-img5.jpeg",
    href: "/services/seafreight-assessments"
  },
  { 
    name: "National Transport", 
    icon: Truck, 
    count: "Bulk Cargo",
    image: "/new-img/new-img6.jpeg",
    href: "/services/national-transport"
  },
  { 
    name: "Fumigation", 
    icon: Wind, 
    count: "Compliance",
    image: "/new-img/VID-new.mp4",
    href: "/services/container-fumigation"
  },
  { 
    name: "Stevedoring", 
    icon: Anchor, 
    count: "Operations",
    image: "/new-img/new-img8.jpeg",
    href: "/services/stevedoring"
  },
  { 
    name: "Motorbikes", 
    icon: Bike, 
    count: "Transport",
    image: "/new-img/bike2.jpeg",
    href: "/services"
  },
  { 
    name: "Wrapping & Crating", 
    icon: Package, 
    count: "Export Protection",
    image: "/new-img/crafting5.jpeg",
    href: "/services"
  },
  { 
    name: "Engines & Gearboxes", 
    icon: Zap, 
    count: "Cash & Carry",
    image: "/new-img/engine1.jpeg",
    href: "/services/engines-gearboxes"
  }
];

const features = [
  {
    icon: ShieldCheck,
    title: "Customs Clearing",
    desc: "Expert brokerage services ensuring full compliance and efficient border crossings."
  },
  {
    icon: Truck,
    title: "Road Freight",
    desc: "Reliable transportation across South Africa and neighboring countries."
  },
  {
    icon: Box,
    title: "Import & Export",
    desc: "Comprehensive container loading and unloading services for global trade."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Ensuring your goods reach their destination on time and in perfect condition."
  }
];

const homeBlogPosts = [
  {
    title: "Best Practices for Export Crating",
    excerpt: "Learn the essential standards for securing cargo for international seafreight movement.",
    date: "Feb 24, 2026",
    category: "Crating",
    image: "/vintage5.png",
    slug: "crating-best-practices"
  },
  {
    title: "Handling Abnormal Out of Gauge Cargo",
    excerpt: "The challenges and solutions for transporting oversized machinery across South Africa.",
    date: "Feb 20, 2026",
    category: "Heavy Lift",
    image: "/from-jp2.png",
    slug: "abnormal-cargo-handling"
  },
  {
    title: "Seafreight Cargo Security",
    excerpt: "Why professional lashing is critical for safety and insurance in maritime logistics.",
    date: "Feb 15, 2026",
    category: "Lashing",
    image: "/gana2.png",
    slug: "cargo-security-guide"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col bg-white text-slate-900 selection:bg-primary selection:text-black overflow-hidden">
      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 1: HERO — MATCHING REFERENCE IMAGE           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#f0f2f5] pt-4 pb-6 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Main 3-Column Grid */}
          <div className="grid grid-cols-12 gap-3">

            {/* LEFT SIDEBAR — Logistics Visuals */}
            <div className="hidden lg:flex col-span-2 flex-col gap-2">
              {[
                "/from-japan.png",
                "/neww.png",
              ].map((img, i) => (
                <div key={i} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-sm group cursor-pointer">
                  <Image
                    src={img}
                    alt="Logistics Operation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
            </div>

                {/* CENTER — Wide Dark Yellow Slider */}
            <div className="col-span-12 lg:col-span-8">
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl bg-[#0a0a0a]">
                
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/80 z-20" />
                </div>

                <AnimatePresence>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center text-center"
                  >
                    {/* Background product images */}
                    <div className="absolute inset-0">
                      <Image
                        src={heroSlides[currentSlide].image}
                        alt="Hero slide"
                        fill
                        className="object-cover opacity-20 transition-opacity duration-1000"
                      />
                    </div>

                    {/* Text content - Centered */}
                    <div className="relative z-10 p-6 sm:p-10 max-w-3xl">
                      <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block bg-[#ef4444] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-md mb-6"
                      >
                        Freight Excellence
                      </motion.span>

                      <motion.h2
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-6xl lg:text-7xl font-black text-white italic leading-[1] mb-6 uppercase drop-shadow-2xl"
                      >
                        {heroSlides[currentSlide].title}<br />
                        <span className="text-[#2563eb]">&</span> {heroSlides[currentSlide].subtitle}
                      </motion.h2>

                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white text-sm sm:text-lg mb-8 max-w-xl mx-auto font-medium drop-shadow-md leading-relaxed"
                      >
                        {heroSlides[currentSlide].desc}
                      </motion.p>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <Link href="/services" className="hidden sm:block">
                          <Button className="rounded-full bg-[#ef4444] text-white hover:bg-[#2563eb] font-black px-10 h-14 text-xs uppercase tracking-widest shadow-xl shadow-red-500/20 transition-all border border-white/10">
                            Our Services
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button className="rounded-full bg-[#2563eb] text-white hover:bg-[#1d4ed8] font-black px-10 h-14 text-xs uppercase tracking-widest border border-white/20 shadow-xl shadow-blue-500/20 transition-all">
                            Get a Quote
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all border-2",
                        currentSlide === i
                          ? "bg-white border-white scale-110"
                          : "bg-transparent border-white/50 hover:border-white"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Smooth Scrolling Services Strip */}
              <div className="mt-3 overflow-hidden rounded-md bg-white shadow-sm">
                <div className="flex animate-marquee-slow gap-5 py-4 px-3">
                  {[...Array(2)].map((_, setIdx) => (
                    <div key={setIdx} className="flex gap-5 shrink-0">
                      {[
                        { name: "Customs Clearing", status: "24/7 Available", img: "/vintage.png" },
                        { name: "Road Freight", status: "Regional Fleet", img: "/packing2.png" },
                        { name: "Container Solutions", status: "Import & Export", img: "/from-jpg.png" },
                        { name: "Vehicle Freight", status: "Ocean Shipping", img: "/from-jpn3.png" },
                        { name: "Border Control", status: "Certified Agents", img: "/packing.png" },
                        { name: "SADC Logistics", status: "Cross-Border", img: "/from-japan.png" },
                      ].map((service, idx) => (
                        <div key={`${setIdx}-${idx}`} className="flex items-center gap-4 bg-slate-50 rounded-md px-4 py-3 min-w-[220px] hover:bg-slate-100 transition-colors cursor-pointer group">
                          <div className="w-14 h-14 rounded-sm overflow-hidden relative shrink-0">
                            <Image src={service.img} alt={service.name} fill unoptimized className="object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-[#2563eb] transition-colors uppercase tracking-tighter">{service.name}</p>
                            <p className="text-[10px] font-black text-[#2563eb] uppercase">{service.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR — Bike Imagery */}
            <div className="hidden lg:flex col-span-2 flex-col gap-2">
              {[
                "/new-img/bike.jpeg",
                "/new-img/bike2.jpeg",
              ].map((img, i) => (
                <div key={i} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-sm group cursor-pointer">
                  <Image
                    src={img}
                    alt="Motorbike Transport & Imports"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
            </div>

          </div>



        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 2: BRAND TRUST MARQUEE                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="marquee-container">
          <div className="marquee-content gap-16 items-center" style={{ "--duration": "30s" } as React.CSSProperties}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-16 px-8 text-black">
                {["Customs Clearing", "Road Freight Logistics", "Container Solutions", "Vehicle Ocean Freight", "Vintage Vehicles Packing", "Import Used Vehicles", "Container Sales", "Household Effects", "Cross Border Transport", "Seafreight Assessments", "Local & National Transport", "Container Fumigation", "Stevedoring Services"].map((service) => (
                  <span key={`${setIdx}-${service}`} className="text-slate-300 text-2xl font-black uppercase tracking-widest whitespace-nowrap hover:text-slate-900 transition-colors cursor-default">
                    {service}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 3: SHOP BY CATEGORY — Compact 5-Column Grid   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#f8fafc] text-slate-900 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[#2563eb] font-black text-[10px] uppercase tracking-widest mb-1 block">Our Specialty</span>
              <h2 className="text-2xl font-black text-slate-900 leading-none uppercase italic">Freight <span className="text-[#2563eb]">Solutions</span></h2>
            </div>
            <Link href="/dealership" className="text-[10px] font-black uppercase tracking-widest text-[#ef4444] hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, idx) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative h-[180px] overflow-hidden rounded-md bg-white shadow-sm"
              >
                {/* Background Media */}
                {category.image.endsWith('.mp4') ? (
                  <video 
                    src={category.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent group-hover:from-[#ef4444]/60 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="mb-2 p-1.5 w-fit bg-white/10 backdrop-blur-md rounded border border-white/20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  <h3 className="text-sm font-black text-white uppercase italic tracking-tighter leading-tight">
                    {category.name}
                  </h3>
                  
                  <p className="text-[9px] font-bold text-white/60 uppercase group-hover:text-white transition-colors">
                    {category.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 4: WHY CHOOSE US                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 4: WHY CHOOSE US                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-slate-900 rounded-[48px] mx-4 sm:mx-6 overflow-hidden text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/hero-deco.jpg" 
            alt="Background" 
            fill 
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#ef4444] font-black uppercase tracking-[0.3em] text-[11px] block mb-4">Why Logistics Leaders Trust Us</span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
              THE <span className="text-[#2563eb]">FREIGHT</span>BOYS <span className="text-[#ef4444] italic uppercase">PROMISE.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group border border-white/10"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2563eb] group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-[#2563eb] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-white group-hover:text-[#ef4444] transition-colors">{feature.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 5: FEATURED / BEST SELLERS — Clean & Simple   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-white text-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#2563eb] font-black uppercase tracking-widest text-xs block mb-3">Core Expertise</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase italic">
                Our Specialized <span className="text-[#ef4444]">Services.</span>
              </h2>
            </div>
            <Link href="/services">
              <Button variant="outline" className="h-12 px-8 rounded-full border-[#2563eb]/20 text-slate-900 hover:bg-[#2563eb] hover:text-white font-black uppercase tracking-widest text-[10px] transition-all">
                View All Services
              </Button>
            </Link>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { name: "Customs Clearing & Forwarding", description: "I do customs clearing and forwarding. Expert customs brokerage ensuring efficient movement of goods across borders.", price: "Expert Service", tag: "Certified", image: "/vintage4.png", link: "/services" },
              { name: "Road Freight Logistics", description: "I do roadfreight. Secure and timely road transportation for local and cross-border cargo across Southern Africa.", price: "Custom Quote", tag: "Reliable", image: "/packing2.png", link: "/services" },
              { name: "Container Solutions", description: "I load and unload cargo into containers either into or out of the country ie import export. Professional stuffing & unpacking.", price: "Safety First", tag: "Operations", image: "/new-img/container.jpeg", link: "/services" },
              { name: "Vehicle Ocean Freight", description: "I specialize in loading and offloading vehicles in ocean freight containers. Precision lashing and secure global transit.", price: "Specilaist", tag: "Maritime", image: "/from-jpn3.png", link: "/services" },
              { name: "Vintage Vehicles Packing", description: "Relocation of prized used collectors vehicles to New Zealand. Carefully lashed to ensuring scratch-free delivery.", price: "R 3,950.00", tag: "NZ Export", image: "/vintage.png", link: "/services" },
              { name: "Import Used Vehicles", description: "Used cars from Japan & Singapore to South Africa. BONDED as transit to SADC COUNTRIES IN AFRICA. KNE103U.", price: "R 1,950.00", tag: "Bonded", image: "/from-japan.png", link: "/services" },
              { name: "Container Sales", description: "Sales of new and used shipping containers for diverse applications, ensuring high quality and structural durability.", price: "Custom Quote", tag: "Sales", image: "/new-img/conteiner2.jpeg", link: "/services/container-sales" },
              { name: "Household Effects", description: "Professional packaging and loading into containers for those leaving the country or moving within. Customs assistance.", price: "Custom Quote", tag: "Relocations", image: "/new-img/new-img4.jpeg", link: "/services/household-effects" },
              { name: "Cross Border Transport", description: "Specialized cross-border transport for all goods, including abnormal and project cargo, ensuring safe delivery.", price: "Custom Quote", tag: "Abnormal", image: "/new-img/new-img6.jpeg", link: "/services/cross-border-transport" },
              { name: "Seafreight Assessments", description: "We offer seafreight assessments and lashing certificates to ensure your goods are compliant for marine insurance.", price: "Certified", tag: "Marine", image: "/new-img/new-img8.jpeg", link: "/services/seafreight-assessments" },
              { name: "Local & National Transport", description: "Reliable local and national transport solutions tailored for both containerized goods and bulk cargo across South Africa.", price: "Custom Quote", tag: "Logistics", image: "/new-img/new-img10.jpeg", link: "/services/national-transport" },
              { name: "Container Fumigation", description: "Professional container fumigation services to guarantee pest-free, compliant shipments meeting global standards.", price: "Custom Quote", tag: "Fumigation", image: "/new-img/VID-new.mp4", link: "/services/container-fumigation" },
              { name: "Stevedoring Services", description: "We are currently applying for a full stevedoring license, expanding port capabilities, vessel loading, and discharging.", price: "Pending", tag: "Operations", image: "/new-img/new-img14.jpeg", link: "/services/stevedoring" },
              { name: "Equipment Hire", description: "We also have an equipment hire option available for specialized lifting, transport, and site operations.", price: "Daily Rates", tag: "Machinery", image: "/packing.png", link: "/services/equipment-hire" },
              { name: "Motorbike Transport & Imports", description: "We also handle the specialized transport and import of motorcycles, ensuring safe, secure, and scratch-free delivery.", price: "Custom Quote", tag: "Bikes", image: "/new-img/bike2.jpeg", link: "/services" },
              { name: "Vehicle Wrapping & Crating", description: "Professional wrapping, packaging, and crating of new and used commercial vehicles. Trusted for international exports including to the Caribbean.", price: "Custom Quote", tag: "Crating", image: "/new-img/crafting5.jpeg", link: "/services" },
            ].map((item, idx) => (
              <Link href={item.link || "/services"} key={idx} className="block group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden p-[2px] pb-0">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                    {item.image.endsWith('.mp4') ? (
                      <video 
                        src={item.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        unoptimized
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    )}
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2563eb] text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-3xl font-black text-slate-900 leading-tight mb-6 group-hover:text-[#2563eb] transition-colors">
                    {item.name}
                  </h4>
                  
                  <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 italic">
                    {item.description}
                  </p>

                  {/* Footer Action */}
                  <div className="mt-auto pt-6 border-t border-slate-200/60 flex items-center justify-between relative group/servicePrice">
                    <div className="flex items-start cursor-help">
                      <span className="text-xl font-black text-slate-900 tracking-tight">{item.price}</span>
                      {item.price.includes("R") && (
                        <span className="text-sm text-[#2563eb] font-black ml-1">*</span>
                      )}
                    </div>

                    {/* Pricing Tooltip */}
                    {item.price.includes("R") && (
                      <div className="absolute bottom-full left-0 mb-4 w-60 bg-slate-900/95 backdrop-blur-md text-white border border-white/10 rounded-2xl p-4 opacity-0 invisible group-hover/servicePrice:opacity-100 group-hover/servicePrice:visible transition-all duration-300 z-50 shadow-2xl translate-y-2 group-hover/servicePrice:translate-y-0 pointer-events-none text-left">
                        <span className="text-[#2563eb] font-black uppercase tracking-[0.2em] block mb-1 text-[8px]">Important</span>
                        <p className="text-[10px] font-medium leading-relaxed text-slate-300">
                          Price estimates fluctuate depending on the dollar exchange rate. All listed prices must include VAT.
                        </p>
                        {/* Tooltip Arrow */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900/95 border-b border-r border-white/10 rotate-45 transform pointer-events-none"></div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-[#2563eb] font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                      Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
             </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6: SOCIAL PROOF                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-slate-900 text-white rounded-[48px] mx-4 sm:mx-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" alt="" fill className="object-cover grayscale" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] block mb-6">Testimonials</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-16">
                TRUSTED BY <span className="text-primary italic">EXPERTS.</span>
              </h2>
              <div className="space-y-12">
                <div className="relative pl-10 border-l-4 border-primary">
                  <Quote className="absolute -left-7 top-0 h-14 w-14 text-primary opacity-20" />
                  <p className="text-2xl font-medium italic mb-8 leading-relaxed text-white/80">
                    &quot;Freightboys handled our abnormal cargo movement with absolute precision. Their rigging team is hands down the best in the business.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-black text-xl text-black">AS</div>
                    <div>
                      <h5 className="font-black uppercase tracking-tight text-lg">Andre Swart</h5>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Operations Manager, S.A. Minerals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Delivery Time", val: "24h" },
                { label: "Quality Check", val: "100%" },
                { label: "Support Avail.", val: "18h" },
                { label: "Return Rate", val: "<0.1%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 rounded-3xl text-center hover:bg-white/10 transition-colors group"
                >
                  <h4 className={cn(
                    "text-5xl font-black mb-3",
                    i % 2 === 0 ? "text-[#2563eb]" : "text-[#ef4444]"
                  )}>{stat.val}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6.5: LATEST FROM THE HUB                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[#2563eb] font-black uppercase tracking-[0.3em] text-[11px] block mb-6">Expert Insights</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none text-slate-900 mb-8 uppercase">
                LATEST FROM <br />
                <span className="text-[#ef4444] italic">THE HUB.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium italic">
                Technical guides, maintenance tips, and the latest logistics industry news.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="rounded-full px-10 h-14 border-2 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
                View All Articles
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {homeBlogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog`}>
                  <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 border border-slate-100 shadow-xl shadow-black/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 font-medium italic line-clamp-2 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] pt-2">
                      Read Blueprint <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6.9: CORE PILLARS (RED)                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] text-white overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[60%] rounded-full bg-black/10 blur-[80px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { 
                icon: Truck, 
                title: "Fast Delivery", 
                desc: "Nationwide shipping across South Africa" 
              },
              { 
                icon: ShieldCheck, 
                title: "OEM Parts", 
                desc: "100% Genuine and certified inventory" 
              },
              { 
                icon: CreditCard,
                title: "Secure Payment", 
                desc: "EFT, Card & Mobile payments accepted" 
              },
              { 
                icon: Headset, 
                title: "Expert Support", 
                desc: "Direct technical advice from SPARES CITY" 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-4 flex flex-col items-center text-center group"
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/10">
                    <feature.icon className="w-8 h-8 text-white group-hover:text-[#dc2626] transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-white/90 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/80 font-medium leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 7: FINAL CTA                                 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.85] mb-8">
              READY TO<br />
              <span className="gradient-text italic uppercase">SHIP?</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-14 max-w-xl mx-auto">
              Premium logistics and cross-border freight solutions at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/services">
                <Button size="xl" className="h-14 px-10 rounded-full bg-slate-900 text-white hover:bg-primary hover:text-black text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  Our Services
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="xl" variant="outline" className="h-14 px-10 rounded-full border-2 border-slate-200 text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
