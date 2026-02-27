"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight,
  Zap,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Box,
  Anchor,
  Car
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.597 6.011L0 24l6.135-1.61a11.77 11.77 0 005.911 1.583h.005c6.637 0 12.05-5.414 12.05-12.05a11.767 11.767 0 00-3.518-8.517z"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreServices = [
    { title: "Customs Clearing", subtitle: "Clearance & Forwarding", href: "/services/customs-clearing-forwarding", icon: ShieldCheck },
    { title: "Road Freight", subtitle: "Local & Cross-Border", href: "/services/road-freight", icon: Truck },
    { title: "Container Solutions", subtitle: "Stuffing & Unpacking", href: "/services/container-solutions", icon: Box },
    { title: "Vehicle Freight", subtitle: "Ocean Freight Experts", href: "/services/vehicle-ocean-freight", icon: Anchor },
  ];

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-[5000] transition-all duration-500 bg-white/50 backdrop-blur-sm px-0 md:px-6 py-0 md:py-3">
        {/* Top Utility Bar - Hidden on Mobile */}
        <div className={cn(
          "hidden lg:flex container mx-auto mb-2 px-8 py-2 justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500",
          scrolled ? "opacity-0 translate-y-[-20px] pointer-events-none h-0" : "opacity-100 translate-y-0 h-auto"
        )}>
          <div className="flex items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-[#2563eb]" />
              <span>24/7 Logistics Support</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-[#2563eb]" />
              <span>Johannesburg • Durban</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+27621328721" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
              <Phone className="w-3 h-3" />
              <span>Call: +27 (0) 62 132 8721</span>
            </a>
            <div className="w-[1px] h-3 bg-slate-200" />
            <a href="https://wa.me/27621328721" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] hover:opacity-80 transition-all">
              <WhatsAppIcon className="w-4 h-4" />
              <span className="font-black">WhatsApp Now</span>
            </a>
          </div>
        </div>

        {/* Main Glass Navbar */}
        <header className={cn(
          "w-full transition-all duration-500",
          scrolled 
            ? "bg-white border shadow-2xl rounded-b-[40px] md:rounded-[40px]" 
            : "bg-white border border-slate-100 rounded-b-[32px] md:rounded-[40px] shadow-sm"
        )}>
          <div className="flex items-center justify-between pl-4 pr-6 md:pl-8 md:pr-12 h-20 md:h-28">
            
            {/* Logo Section */}
            <Link href="/" className="relative flex items-center group shrink-0 ml-0">
              <div className="relative w-48 h-14 md:w-64 md:h-20 transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/freight-logo.png" 
                  alt="Freightboys Logo" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Center Navigation - Desktop */}
            <nav className="hidden xl:flex items-center gap-1">
              <Link href="/" className={cn(
                "px-5 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                pathname === "/" ? "bg-[#2563eb] text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              )}>
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="px-5 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 outline-none transition-all group">
                  Services <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[600px] p-6 rounded-[40px] shadow-2xl border-white/20 bg-white/95 backdrop-blur-2xl mt-4 grid grid-cols-2 gap-2">
                  <DropdownMenuLabel className="col-span-2 text-[10px] font-black uppercase tracking-[.3em] text-slate-400 mb-2 px-4">
                    Logistics Excellence
                  </DropdownMenuLabel>
                  {coreServices.map((service) => (
                    <DropdownMenuItem key={service.href} asChild className="p-0 bg-transparent focus:bg-transparent">
                      <Link href={service.href} className="flex items-center gap-4 p-4 rounded-[24px] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-black text-slate-900 uppercase tracking-tighter text-sm">{service.title}</span>
                          <span className="text-[10px] text-slate-400 font-medium italic">{service.subtitle}</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="col-span-2 mt-4 pt-4 border-t border-slate-100 flex justify-between items-center px-4">
                    <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#2563eb] flex items-center gap-2 transition-colors">
                      Explore All <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[9px] font-bold text-slate-300 uppercase">Trusted worldwide</span>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/global" className={cn(
                "px-5 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                pathname === "/global" ? "bg-[#2563eb] text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              )}>
                Global Reach
              </Link>

              <Link href="/about" className={cn(
                "px-5 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                pathname === "/about" ? "bg-[#2563eb] text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              )}>
                About Us
              </Link>

              <Link href="/contact" className={cn(
                "px-5 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                pathname === "/contact" ? "bg-[#2563eb] text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              )}>
                Contact
              </Link>
            </nav>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              
              {/* Quick Contact - Desktop */}
              <div className="hidden lg:flex flex-col items-end mr-2">
                 <span className="text-[10px] font-black text-[#2563eb] uppercase tracking-widest">24/7 Live Status</span>
                 <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-900">+27 62 132 8721</span>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Get Quote - Desktop Primary */}
                <Button asChild size="lg" className="hidden xl:flex h-14 px-8 rounded-2xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-xl shadow-blue-500/20 group overflow-hidden relative">
                  <Link href="/contact" className="flex items-center gap-2">
                    <span className="relative z-10 font-black uppercase tracking-widest text-[11px]">Get Quote</span>
                    <Zap className="w-4 h-4 relative z-10 fill-white" />
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-white/20 skew-x-[-20deg]"
                    />
                  </Link>
                </Button>

                {/* Mobile Menu Toggle */}
                <button 
                  className="xl:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-slate-900 text-white shadow-xl shadow-black/10 transition-all active:scale-90"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay - Independent Layer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md xl:hidden z-[9998]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white shadow-2xl xl:hidden z-[9999] overflow-y-auto"
            >
              <div className="p-8 pb-32">
                <div className="relative mb-12 flex justify-between items-start">
                  <div className="w-full h-24 relative -ml-4">
                    <Image src="/freight-logo.png" alt="Logo" fill className="object-contain object-left" />
                  </div>
                  <button onClick={() => setIsOpen(false)} className="shrink-0 p-3 rounded-xl bg-slate-100/80 text-slate-900 border border-slate-200 backdrop-blur-sm">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</p>
                  <div className="grid gap-2">
                    <Link href="/" onClick={() => setIsOpen(false)} className="px-6 py-4 rounded-2xl bg-slate-50 font-black uppercase tracking-widest text-xs flex justify-between items-center group">
                      Home <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="px-6 py-4 rounded-2xl bg-slate-50 font-black uppercase tracking-widest text-xs flex justify-between items-center group">
                      About Us <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                    <Link href="/global" onClick={() => setIsOpen(false)} className="px-6 py-4 rounded-2xl bg-slate-50 font-black uppercase tracking-widest text-xs flex justify-between items-center group">
                      Global Network <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="px-6 py-4 rounded-2xl bg-slate-50 font-black uppercase tracking-widest text-xs flex justify-between items-center group">
                      Contact <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </div>

                  <div className="grid gap-2">
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="px-6 py-4 rounded-2xl bg-slate-50 font-black uppercase tracking-widest text-xs flex justify-between items-center group w-full"
                    >
                      Services 
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden grid gap-2 pl-4 border-l-2 border-slate-100 ml-4 mt-2"
                        >
                          {coreServices.map((service) => (
                            <Link 
                              key={service.href} 
                              href={service.href} 
                              onClick={() => setIsOpen(false)} 
                              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 hover:bg-[#2563eb] hover:text-white transition-all group"
                            >
                              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#2563eb] group-hover:bg-white/20 group-hover:text-white">
                                <service.icon className="w-4 h-4" />
                              </div>
                              <span className="font-bold text-[10px] uppercase tracking-tighter">{service.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-10">
                    <Button asChild className="w-full h-16 rounded-2xl bg-[#2563eb] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>Get Expert Quote</Link>
                    </Button>
                  </div>

                  <div className="pt-12 flex flex-col items-center gap-4">
                    <a href="https://wa.me/27621328721" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#25D366]">
                      <WhatsAppIcon className="w-6 h-6" />
                      <span className="font-black text-sm uppercase tracking-widest">Chat on WhatsApp</span>
                    </a>
                    <p className="text-[10px] font-medium text-slate-400 italic">24/7 Professional Freight Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
