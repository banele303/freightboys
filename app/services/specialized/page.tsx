"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle,
  Phone,
  MessageCircle,
  Truck,
  Box,
  Package,
  ShieldCheck,
  Wind,
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

const specializedServices = [
  {
    icon: Box,
    title: "Container Sales",
    short: "New & Used Units",
    image: "/new-img/conteiner2.jpeg",
    description: "We offer sales of new and used shipping containers for diverse applications, ensuring high quality and structural durability.",
    link: "/services/container-sales"
  },
  {
    icon: Package,
    title: "Household Effects",
    short: "Relocations & Packing",
    image: "/new-img/new-img3.jpeg",
    description: "Professional packaging and loading into containers if you are leaving the country, moving within, or relocating into South Africa. We handle your customs clearing, transport, and unpacking.",
    link: "/services/household-effects"
  },
  {
    icon: Truck,
    title: "Cross Border Transport",
    short: "All Goods & Abnormal Cargo",
    image: "/new-img/new-img4.jpeg",
    description: "We offer cross border transport for all goods as well as specialized logistics for abnormal and project cargo.",
    link: "/services/cross-border-transport"
  },
  {
    icon: ShieldCheck,
    title: "Seafreight Assessments",
    short: "Lashing Certificates",
    image: "/new-img/new-img5.jpeg",
    description: "We offer seafreight assessments and lashing certificates to ensure your goods are compliant for seafreight insurance whilst on the water.",
    link: "/services/seafreight-assessments"
  },
  {
    icon: Truck,
    title: "National Transport",
    short: "Container & Bulk Cargo",
    image: "/new-img/new-img6.jpeg",
    description: "We also offer reliable local and national transport solutions for containerized goods as well as bulk cargo.",
    link: "/services/national-transport"
  },
  {
    icon: Wind,
    title: "Container Fumigation",
    short: "Customs Compliance",
    image: "/new-img/VID-new.mp4",
    description: "We offer container fumigation services to guarantee pest-free, compliant shipments meeting global agricultural standards.",
    link: "/services/container-fumigation"
  },
  {
    icon: Anchor,
    title: "Stevedoring Services",
    short: "Port Capabilities",
    image: "/new-img/new-img8.jpeg",
    description: "We are currently in the process of applying for a full stevedoring license, expanding our port operational capabilities, vessel loading, and discharging.",
    link: "/services/stevedoring"
  }
];

export default function SpecializedServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image 
             src="/new-img/new-img12.jpeg" 
             alt="Specialized Logistics" 
             fill 
             className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
             initial="hidden"
             animate="visible"
             variants={staggerContainer}
             className="max-w-4xl mx-auto"
          >
             <motion.span variants={fadeInUp} className="text-[#2563eb] font-black uppercase tracking-[0.3em] mb-4 block text-sm drop-shadow-lg">
                Going Beyond Borders
             </motion.span>
             <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 uppercase italic leading-[0.9]">
                Specialized <br/> <span className="text-[#2563eb]">Expertise</span>
             </motion.h1>
             <motion.p variants={fadeInUp} className="text-xl text-slate-300 font-medium max-w-2xl mx-auto italic drop-shadow-md">
                From household effect packaging and customs clearance to certified seafreight assessments and pending stevedoring licenses. We are your all-in-one logistics solution.
             </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid Iteration */}
      <section className="py-24">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
               {specializedServices.map((service, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col hover:-translate-y-2 transition-transform duration-500"
                  >
                     <div className="relative aspect-[4/3] w-full overflow-hidden">
                        {service.image.endsWith('.mp4') ? (
                           <video 
                              src={service.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                           />
                        ) : (
                           <Image 
                              src={service.image} 
                              alt={service.title} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                           />
                        )}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                           <service.icon className="w-6 h-6 text-[#2563eb]" />
                        </div>
                     </div>
                     <div className="p-8 flex flex-col flex-1">
                        <span className="text-[#2563eb] font-black uppercase tracking-widest text-[10px] mb-2">{service.short}</span>
                        <h3 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight mb-4 group-hover:text-[#2563eb] transition-colors">{service.title}</h3>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-8">{service.description}</p>
                        <div className="mt-auto">
                           <Button asChild className="w-full bg-slate-900 group-hover:bg-[#2563eb] text-white rounded-xl uppercase tracking-widest font-black text-[11px] h-12 shadow-xl transition-all">
                              <Link href={service.link} className="flex items-center justify-center gap-2">
                                 View Service <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                           </Button>
                        </div>
                     </div>
                  </motion.div>
               ))}
               
               {/* Contact Block */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8 }}
                 className="group bg-[#2563eb] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-12 text-center text-white relative overflow-hidden"
               >
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200')] opacity-10 mix-blend-overlay object-cover"></div>
                 <MessageCircle className="w-16 h-16 text-white mb-6 relative z-10" />
                 <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 relative z-10">Don't See What You Need?</h3>
                 <p className="text-white/80 font-medium italic mb-8 relative z-10">Contact our experts directly and we'll arrange a custom freight solution specifically for your requirements.</p>
                 <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2563eb] rounded-xl uppercase tracking-widest font-black text-[11px] h-14 px-8 w-full group relative z-10">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                       Call +27 (0) 84 266 7178 <Phone className="w-4 h-4" />
                    </Link>
                 </Button>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
