"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ShieldCheck, ArrowRight, Phone, FileText, Anchor, Award, LifeBuoy } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function SeafreightAssessmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image src="/new-img/new-img8.jpeg" alt="Seafreight Assessments" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#2563eb]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-2xl shadow-blue-500/40 rounded-full">
              <Anchor className="h-4 w-4" /> Marine Compliance
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10 uppercase italic">
              Seafreight <br /> <span className="text-[#ef4444]">Assessments</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
              Professional seafreight assessments and lashing certificates to ensure your goods are compliant and insured whilst on the water.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button asChild size="xl" className="h-20 px-12 rounded-[24px] bg-[#ef4444] hover:bg-[#dc2626] text-white text-xl shadow-2xl shadow-red-500/20 border border-white/10 group overflow-hidden relative font-black uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Get Assessment</span>
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

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest mb-2 block">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">What We <span className="text-[#ef4444]">Provide</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lashing Certificates", desc: "Official lashing certification confirming your cargo is properly secured and meets international maritime standards.", icon: FileText, color: "bg-[#ef4444]" },
              { title: "Seafreight Insurance", desc: "Comprehensive insurance advisory and facilitation for your goods whilst in transit on the water.", icon: ShieldCheck, color: "bg-[#2563eb]" },
              { title: "Compliance Reports", desc: "Detailed assessment reports ensuring your goods meet all seafreight regulatory requirements.", icon: Award, color: "bg-[#ef4444]" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl">
              <Image src="/new-img/new-img5.jpeg" alt="Marine Assessment" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/20 to-transparent" />
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest">Why It Matters</span>
              <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Maritime <br /><span className="text-[#ef4444] italic">Compliance.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                Improperly secured cargo can lead to damage, insurance claims, and port delays. Our certified assessments ensure your shipments are fully compliant before departure.
              </p>
              <div className="space-y-4">
                {["Certified lashing inspections", "International maritime standard compliance", "Insurance documentation support", "Pre-departure cargo verification", "Risk assessment reporting", "Expert surveyors on-site"].map((item, i) => (
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

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2563eb] font-black text-[10px] uppercase tracking-widest mb-2 block">Assessment Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">How It <span className="text-[#2563eb]">Works</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book Assessment", desc: "Contact us to schedule your seafreight assessment." },
              { step: "02", title: "On-Site Inspection", desc: "Our certified surveyors inspect and assess your cargo." },
              { step: "03", title: "Lashing & Securing", desc: "We verify all securing mechanisms meet global standards." },
              { step: "04", title: "Certification", desc: "You receive your official lashing certificate and insurance clearance." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 group hover:bg-[#2563eb] hover:border-[#2563eb] transition-all duration-500">
                <span className="text-6xl font-black text-slate-100 group-hover:text-white/20 absolute top-4 right-6 transition-colors">{item.step}</span>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-white uppercase tracking-tight mb-3 transition-colors relative z-10">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-white/80 font-medium italic text-sm leading-relaxed transition-colors relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#ef4444] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/new-img/new-img8.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-6">Need A Lashing <span className="text-white/80">Certificate?</span></h2>
          <p className="text-white/80 text-lg font-medium mb-10 max-w-xl mx-auto italic">Ensure your cargo is compliant, insured, and ready for safe ocean transit.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-white text-[#ef4444] rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center gap-2">
              Book Assessment <ArrowRight className="w-4 h-4" />
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
