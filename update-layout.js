const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'app/services');
const directories = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const skipList = ['engines-gearboxes'];

for (const dir of directories) {
  if (skipList.includes(dir)) continue;

  const pagePath = path.join(servicesDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Skip if we already injected
  if (content.includes('Visual Showcase') && content.includes('Location Section')) {
    continue;
  }

  let imagesMatch = content.match(/images=\{\[(.*?)\]\}/s);
  let images = ["/neww.png", "/from-japan.png", "/packing2.png"];
  if (imagesMatch) {
    let raw = imagesMatch[1];
    images = raw.split(',').map(s => s.trim().replace(/"/g, '').replace(/'/g, '')).filter(Boolean);
    if(images.length === 0) images = ["/neww.png", "/from-japan.png", "/packing2.png"];
  }

  let galleryJsx = `
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
              Visual Showcase
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
              Browse our selection of quality operations — all inspected and handled with maximum precision.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              ${images.map(img => `{ src: "${img}", alt: "Service Visual" }`).join(',\n              ')}
            ].map((img, index) => (
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
`;

  let locationJsx = `
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
                Freightboys <br />
                <span className="text-[#2563eb] italic">Operations.</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-500 font-medium italic leading-relaxed mb-8"
              >
                Based in South Africa, we coordinate local and international logistics, bringing you seamless cross-border transport, customs clearing, and efficient handling of all goods and vehicles.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  { icon: MapPin, label: "South Africa & Regional Borders" },
                  { icon: ShieldCheck, label: "Secure handling & fully bonded" },
                  { icon: Gauge, label: "Fast clearance & zero delays" },
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
                src="${images[0] || '/new-img/equipment.jpeg'}"
                alt="Freightboys Operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6">
                  <p className="font-black text-slate-900 text-lg uppercase tracking-tight">Logistics Hub</p>
                  <p className="text-sm text-slate-500 font-medium italic">South Africa — Custom Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
`;

  if (!content.includes('Visual Showcase')) {
    content = content.replace(/(<ServiceHero\s*[\s\S]*?\/>\n?)/, "$1" + galleryJsx);
  }

  if (!content.includes('Location Section') && content.includes('{/* CTA Section */}')) {
    content = content.replace(/(\{\/\*\s*CTA Section\s*\*\/\})/, locationJsx + "\n      $1");
  } else if (!content.includes('Location Section') && content.includes('{/* CTA */}')) {
    // some pages might use CTA instead of CTA Section
    content = content.replace(/(\{\/\*\s*CTA\s*\*\/\})/, locationJsx + "\n      $1");
  }

  const importMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+["']lucide-react["']/);
  if (importMatch) {
    let imports = importMatch[1].split(',').map(s => s.trim());
    if (!imports.includes('MapPin')) imports.push('MapPin');
    if (!imports.includes('Gauge')) imports.push('Gauge');
    if (!imports.includes('ShieldCheck')) imports.push('ShieldCheck');
    
    let newImport = `import {\n  ` + imports.join(',\n  ') + `\n} from "lucide-react"`;
    content = content.replace(importMatch[0], newImport);
  }

  fs.writeFileSync(pagePath, content, 'utf8');
}
console.log('Successfully injected sections.');
