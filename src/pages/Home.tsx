import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '../components/MagneticButton';
import TextReveal from '../components/TextReveal';
import heroimg from '../assets/Desktop - 6.png';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const projects = [
    {
      title: 'Health Sync',
      category: 'Mobile App',
      image: p1,
      link: 'https://www.behance.net/gallery/228186023/HealthSync-Fitness-App-UX-Case-Study',
    },
    {
      title: 'Infosys SpringBoard',
      category: 'Website Redesign',
      image: p2,
      link: 'https://www.behance.net/gallery/228186973/Infosys-Springboard-Redesign-Case-Study',
    },
    {
      title: 'Connexus',
      category: 'Mobile App',
      image: p3,
      link: 'https://www.behance.net/gallery/232591967/Connexus-Case-Study',
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 transition-all duration-500 
        ${scrolled ? "backdrop-blur-lg bg-black/40  border-white/10" : "bg-transparent mix-blend-difference"}`}
      >
        <a href="#hero">
        <img 
          src={logo} 
          alt="Logo"
          className="h-12 w-auto object-contain"
        />
        </a>
        <div className="flex gap-8 text-sm tracking-widest text-white/80">
          <a href="#projects" className="hover:text-gold transition-colors hover-target">PROJECTS</a>
          <a href="https://drive.google.com/file/d/1_WDfuUd2HhlhT5v9IP0f90TQ8kBzaJUR/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors hover-target">RESUME</a>
          <a href="#about" className="hover:text-gold transition-colors hover-target">ABOUT</a>
          <a href="#contact" className="hover:text-gold transition-colors hover-target">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='hero' className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">

          <img 
            src={heroimg} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
          </motion.div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-4">
            <span className="block text-outline text-transparent">HEY, I'M</span>
            <span className="block text-white">SHARATH</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <p className="text-xl md:text-2xl font-light tracking-widest text-white/80">UI / UX DESIGNER</p>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest text-white/50 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 md:px-12 lg:px-24 bg-dark-gray relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <TextReveal text="WORK THAT I'M PROUD OF" className="font-serif text-4xl md:text-6xl text-white" />
            <div className="w-24 h-[2px] bg-gold mt-8" />
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}
              >
                <div className="w-full md:w-3/5 overflow-hidden rounded-sm">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative aspect-[4/3]"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </div>
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <span className="text-gold tracking-widest text-sm mb-4 block">{project.category}</span>
                  <h3 className="font-serif text-4xl md:text-5xl mb-8 text-white group-hover:text-gold transition-colors duration-300">{project.title}</h3>
                  <MagneticButton href={project.link}>View Case Study</MagneticButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 md:px-12 lg:px-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/30 rounded-sm translate-x-4 translate-y-4" />
              <img 
                src="https://sharathdesignz.netlify.app/sharath.jpeg" 
                alt="Sharath" 
                className="w-full aspect-[3/4] object-cover rounded-sm relative z-10 filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <TextReveal text="ME, MYSELF" className="font-serif text-4xl md:text-6xl text-white mb-12" />
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                I'm Sharath, a B.Tech student at Anurag University majoring in Computer Science Engineering, with a deep focus on UI/UX Design.
              </p>
              <p>
                Since childhood, I've been the kind of person who loves fixing and creating things whether it was customizing my gadgets, sketching random logos, or redesigning everyday tools to make them more useful. That love for problem-solving slowly led me to the world of digital design and technology.
              </p>
              <p>
                In college, I discovered UX design, and it instantly felt like the perfect space where creativity, empathy, and tech meet. Now, through my designs, I aim to build thoughtful, accessible, and meaningful experiences that not only look good but genuinely help people in their everyday lives.
              </p>
              <p className="text-gold font-medium italic">
                "I believe in creating things that solve real problems and spark real joy."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 md:px-12 lg:px-24 bg-dark-gray relative z-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[200%] bg-gold/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-8xl text-white mb-8">Let's create something <span className="text-gold italic">extraordinary</span>.</h2>
            <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light">
              Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <MagneticButton href="mailto:sharathsilangari@gmail.com" className="text-lg px-12 py-6">
                Get in touch
              </MagneticButton>
              <a 
                href="https://www.linkedin.com/in/sharath-silangari-831068281/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/80 hover:text-gold transition-colors tracking-widest uppercase text-sm border-b border-white/20 hover:border-gold pb-1 hover-target"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 tracking-widest">
          <p>© 2026 SHARATH SILANGARI</p>
          <p>DESIGNED WITH PASSION</p>
        </div>
      </section>
    </div>
  );
}
