"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon?: React.ElementType;
}

export default function ServiceHero({ images, title, subtitle, description, tag, icon: Icon }: ServiceHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-white pt-24 pb-8 md:pt-32 md:pb-16 px-4 md:px-6"> {/* Light clean background */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area (5 columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-[#2563eb] text-[10px] font-black uppercase tracking-[0.2em] border border-slate-200">
                  {Icon && <Icon className="w-4 h-4" />}
                  {tag}
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[0.95] mb-6 uppercase tracking-tight">
                {title} <br className="hidden lg:block" />
                <span className="text-[#2563eb] italic">{subtitle}</span>
              </h1>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-lg italic">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black px-8 h-14 text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all border border-blue-600/50">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-slate-200 text-slate-700 font-black px-8 h-14 text-xs uppercase tracking-widest hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all">
                  <a href="tel:+27842667178" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Slider Area (7 columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[40px] overflow-hidden bg-slate-100 shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentSlide]}
                    alt={`${title} slider image`}
                    fill
                    priority
                    className="object-cover"
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none" />
                </motion.div>
              </AnimatePresence>
              
              {/* Slider Dots Overlay */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        currentSlide === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                      )}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
