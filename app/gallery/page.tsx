"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2, Play, Camera, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const galleryItems = [
  { type: "video", src: "/new-img/VID-here.mp4", alt: "Logistics Overview Video", category: "Operations" },
  { type: "image", src: "/new-img/new-img6.jpeg", alt: "Cross Border Transport", category: "Transport" },
  { type: "image", src: "/new-img/container.jpeg", alt: "Container Loading", category: "Containers" },
  { type: "image", src: "/new-img/new-img15.jpeg", alt: "Specialized Shipping", category: "Shipping" },
  { type: "image", src: "/new-img/new-img2.jpeg", alt: "Container Sales", category: "Sales" },
  { type: "video", src: "/new-img/VID-new.mp4", alt: "Operational Overview", category: "Operations" },
  { type: "image", src: "/new-img/conteiner2.jpeg", alt: "Container Yard", category: "Containers" },
  { type: "image", src: "/new-img/new-img3.jpeg", alt: "Shipping Processes", category: "Shipping" },
  { type: "image", src: "/new-img/new-img12.jpeg", alt: "Heavy Lifting Logistics", category: "Logistics" },
  { type: "image", src: "/new-img/new-img14.jpeg", alt: "Stevedoring Operations", category: "Operations" },
  { type: "video", src: "/new-img/videos.mp4", alt: "General Freight Transport", category: "Transport" },
  { type: "image", src: "/new-img/new-img17.jpeg", alt: "Port Activities", category: "Operations" },
  { type: "image", src: "/new-img/new-img5.jpeg", alt: "Abnormal Cargo Transport", category: "Transport" },
  { type: "image", src: "/new-img/new-img8.jpeg", alt: "Warehouse Operations", category: "Logistics" },
  { type: "image", src: "/new-img/new-img10.jpeg", alt: "Bulk Cargo Handling", category: "Logistics" },
  { type: "image", src: "/new-img/new-img11.jpeg", alt: "Intermodal Shipping", category: "Shipping" },
  { type: "image", src: "/new-img/new-img13.jpeg", alt: "Maritime Handling", category: "Operations" },
  { type: "image", src: "/new-img/new-img16.jpeg", alt: "International Transit", category: "Transport" },
  { type: "image", src: "/new-img/new-img4.jpeg", alt: "Household Relocations", category: "Logistics" },
  { type: "image", src: "/new-img/new-img7.jpeg", alt: "Fumigation Services", category: "Operations" },
  { type: "image", src: "/new-img/new-img9.jpeg", alt: "Cargo Inspection", category: "Logistics" },
  { type: "image", src: "/new-img/equipment.jpeg", alt: "Container Solutions", category: "Containers" },
];

export default function GalleryPage() {
  const [hoveredFile, setHoveredFile] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Operations", "Transport", "Containers", "Shipping", "Logistics"];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <video 
          src="/new-img/VID-new.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        
        {/* Red accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ef4444]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-[#2563eb]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-20 text-center mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-red-500/40 rounded-full"
          >
            <Camera className="h-4 w-4" /> Our Work In Action
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-[0.85] mb-6"
          >
            Media <br /> <span className="text-[#ef4444]">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-medium italic max-w-xl mx-auto"
          >
            A visual showcase of Freightboys' expertise — from port to doorstep, across borders and beyond.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 cursor-pointer",
                  activeFilter === cat 
                    ? "bg-[#ef4444] text-white shadow-lg shadow-red-500/30" 
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                )}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto hidden md:flex items-center gap-2 text-slate-300 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#ef4444] rounded-full animate-pulse" />
              {filteredItems.length} Items
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.08 }}
                onMouseEnter={() => setHoveredFile(item.src)}
                onMouseLeave={() => setHoveredFile(null)}
                className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group cursor-pointer border border-slate-100/50 bg-slate-50 flex items-center justify-center transform hover:-translate-y-1"
              >
                {item.type === "video" ? (
                  <div className="w-full relative aspect-[4/5]">
                    <video 
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-1000",
                        hoveredFile === item.src ? "scale-110" : "scale-100"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-[#ef4444]/40 transition-all duration-500" />
                    <div className="absolute top-4 right-4 bg-[#ef4444] p-2.5 rounded-xl shadow-lg shadow-red-500/30">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full relative overflow-hidden">
                    <Image 
                      src={item.src} 
                      alt={item.alt}
                      width={800}
                      height={800}
                      unoptimized
                      className={cn(
                        "w-full h-auto object-cover transition-transform duration-1000",
                        hoveredFile === item.src ? "scale-110" : "scale-100"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-[#ef4444]/30 transition-all duration-500" />
                  </div>
                )}
                
                {/* Overlay Hover Details */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <div className="bg-white/10 backdrop-blur-md self-end p-2.5 rounded-xl mb-auto transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-[#ef4444] text-white text-[8px] font-black uppercase tracking-widest rounded-full mb-2 shadow-lg">{item.category}</span>
                    <h3 className="text-white font-black text-lg tracking-tight uppercase leading-tight drop-shadow-lg">{item.alt}</h3>
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">{item.type === "video" ? "▶ VIDEO" : "◻ PHOTO"}</p>
                  </div>
                </div>

                {/* Subtle red border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ef4444]/40 transition-colors duration-500 pointer-events-none z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ef4444]/5 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[200px] bg-[#ef4444]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[150px] bg-[#2563eb]/10 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "500+", color: "text-[#ef4444]" },
              { label: "Countries Served", value: "25+", color: "text-[#2563eb]" },
              { label: "Years of Experience", value: "15+", color: "text-[#ef4444]" },
              { label: "Happy Clients", value: "1,200+", color: "text-[#2563eb]" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <h3 className={cn("text-4xl md:text-5xl font-black tracking-tighter mb-2", stat.color)}>{stat.value}</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-24 bg-gradient-to-br from-[#ef4444] to-[#dc2626] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/new-img/new-img12.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#2563eb]/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6 leading-[0.9]"
          >
            Impressed By <br /> What You See?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 font-medium mb-12 max-w-xl mx-auto italic"
          >
            Get in touch with Freightboys today to see how our expertise can accelerate your logistics and maritime needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="mailto:Freightboys@gmail.com" 
              className="px-10 py-5 bg-white text-[#ef4444] rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-black/20 hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center gap-2"
            >
              Email Us <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:+27842667178" 
              className="px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#ef4444] transition-all cursor-pointer"
            >
              +27 84 266 7178
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
