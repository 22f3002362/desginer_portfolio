"use client";

import {motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import {useRef, useState, useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {
  Palette,
  PenTool,
  Layout,
  Aperture,
  Package,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import {X} from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Poster Designing",
    description:
      "Craft visually stunning posters that convey powerful messages with impactful design and typography.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Logo Designing",
    description:
      "Design unique and memorable logos that establish a strong brand identity and visual presence.",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Banner Designing",
    description:
      "Create eye-catching banners optimized for web and print, ensuring high engagement and visibility.",
  },
  {
    icon: <Aperture className="w-8 h-8" />,
    title: "Portrait Photography",
    description:
      "Capture emotions and expressions with professional portrait photography that tells a compelling story.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Product Photography",
    description:
      "Highlight product details and aesthetics with high-quality, market-ready photography that enhances brand appeal.",
  },
];

const designCategories = ["All", "Posters", "Logos", "Banners"];

const projects = [
  {
    title: "Festive frames",
    category: "Posters",
    image: "/images/projects/poster1.png",
    description: "Diwali photography event organised by college society",
  },
  {
    title: "GDG IIT Madras",
    category: "Logos",
    image: "/images/projects/logo2.png",
    description:
      "Desgined the logo for World's biggest Students community by Google",
  },
  {
    title: "Tech Conference",
    category: "Banners",
    image: "/images/projects/banner1.png",
    description: "Event Banner organised by GDG IITM",
  },
  {
    title: "Festive Frames",
    category: "Posters",
    image: "/images/projects/poster2.png",
    description: "Dusshera Photography event organized by College Society",
  },
  {
    title: "IRIS Photography Society",
    category: "Logos",
    image: "/images/projects/logo1.png",
    description:
      "Re-Designed the Logo of the society where I used to serve as a Secretary",
  },
  {
    title: "Seeds Stories India",
    category: "Banners",
    image: "/images/projects/banner4.png",
    description: "Designed a professional banner for a startup company",
  },
  {
    title: "Launch your Career into Orbit",
    category: "Posters",
    image: "/images/projects/poster3.png",
    description: "Carrer related guidance session hosted by GDG IITM",
  },
  {
    title: "Seed Stories India",
    category: "Logos",
    image: "/images/projects/logo3.png",
    description: "Designed the logo for a startup Company.",
  },
  {
    title: "Seeds Stories India",
    category: "Banners",
    image: "/images/projects/banner3.png",
    description: "Designed a professional banner for a startup company",
  },
  {
    title: "Cold Mailing webinar",
    category: "Posters",
    image: "/images/projects/poster4.png",
    description: "A webinar hosted by GDG IITM",
  },
  {
    title: "Chow Bihar Express",
    category: "Logos",
    image: "/images/projects/logo4.jpg",
    description: "Designed a logo for a restaurant",
  },
  {
    title: "Machine Learning Summer School",
    category: "Posters",
    image: "/images/projects/poster5.png",
    description: "A Session on ML Summer School organised by Amazon and IITM",
  },
];

const photographyCategories = [
  "All",
  "Portrait",
  "Product",
  "Street",
  "Wildlife",
  "Nature",
];

const photographs = [
  {
    title: "Cat",
    category: "Wildlife",
    image: "/images/photography/cat.webp",
  },
  {
    title: "Campus Deer",
    category: "Wildlife",
    image: "/images/photography/deer.webp",
  },
  {
    title: "Boat Nirvana ",
    category: "Product",
    image: "/images/photography/earphone.webp",
  },
  {
    title: "DragonFly",
    category: "Wildlife",
    image: "/images/photography/firefly.webp",
  },
  {
    title: "Sky",
    category: "Nature",
    image: "/images/photography/sky1.webp",
  },
  {
    title: "Sunset",
    category: "Street",
    image: "/images/photography/street.webp",
  },
  {
    title: "Deer",
    category: "Wildlife",
    image: "/images/photography/deer2.webp",
  },
  {
    title: "Evening Dawn",
    category: "Nature",
    image: "/images/photography/sky2.webp",
  },
  {
    title: "A Happy Dog",
    category: "Wildlife",
    image: "/images/photography/smiledog.webp",
  },
  {
    title: "An Amazed Dog",
    category: "Wildlife",
    image: "/images/photography/dog.webp",
  },
  {
    title: "A wild Chameleon",
    category: "Wildlife",
    image: "/images/photography/chameleon.webp",
  },
  {
    title: "A Cycle in the Woods",
    category: "Street",
    image: "/images/photography/cycle_boy.webp",
  },
  {
    title: "A Family of Monkeys",
    category: "Wildlife",
    image: "/images/photography/monkies.webp",
  },
  {
    title: "Night View in IITM",
    category: "Nature",
    image: "/images/photography/night_life.webp",
  },
  {
    title: "A chilling monkey",
    category: "Nature",
    image: "/images/photography/monkey.webp",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDesignCategory, setSelectedDesignCategory] = useState("All");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const containerRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredPhotographs = photographs.filter(
    (photo) => selectedCategory === "All" || photo.category === selectedCategory
  );

  const filteredProjects = projects.filter(
    (project) =>
      selectedDesignCategory === "All" ||
      project.category === selectedDesignCategory
  );

  return (
    <div ref={containerRef} className="bg-background overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{y, opacity}}
        className="relative min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0" />
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            I'm Akarsh Gupta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Graphic Designer and Photographer
          </p>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5}}
            className="flex gap-4 justify-center"
          >
            <a
              href="#work"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              View Work
            </a>
            <a
              href="https://akarsh-gupta.vercel.app"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Developer Portfolio
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-4xl font-bold text-center mb-16"
          >
            Hands-On Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-4xl font-bold text-center mb-16"
          >
            Featured Work
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {designCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedDesignCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedDesignCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                  onClick={() => setPreviewImage(project.image)} // Pass the function
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Photography</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {photographyCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPhotographs.map((photo, index) => (
                <PhotographyCard
                  key={photo.title}
                  {...photo}
                  index={index}
                  onClick={() => setPreviewImage(photo.image)} // Pass the function
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Project</h2>
            <p className="text-muted-foreground mb-8">
              Let's create something amazing together
            </p>
            <a
              href="mailto:akarshg5317@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card text-card-foreground">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Akarsh Gupta</h3>
              <p className="text-muted-foreground">
                Creative Graphic Designer & Photographer based in Bihar,
                specializing in bringing ideas to life through visual
                storytelling.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Hands-On Experience
                  </a>
                </li>
                <li>
                  <a
                    href="https://akarsh-gupta.vercel.app"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Developer
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:akarshg5317@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    akarshg5317@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+918709186793"
                    className="hover:text-primary transition-colors"
                  >
                    +91 8709186793
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Bihar Sharif, Bihar</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/theakarshgupta"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Github"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/theakarshgupta"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/the_akarshgupta"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/theakarsh.gupta"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Akarsh Gupta. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {previewImage && (
          <PreviewModal
            image={previewImage}
            onClose={() => setPreviewImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ServiceCard({icon, title, description, index}: ServiceCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, y: 20}}
      animate={inView ? {opacity: 1, y: 0} : {}}
      transition={{duration: 0.5, delay: index * 0.1}}
      className="bg-card p-6 rounded-xl hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
  description: string;
  onClick: () => void; // Add this prop
}

function ProjectCard({
  image,
  title,
  category,
  index,
  description,
  onClick, // Add this prop
}: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, scale: 0.9}}
      animate={inView ? {opacity: 1, scale: 1} : {}}
      exit={{opacity: 0, scale: 0.9}}
      transition={{duration: 0.5, delay: index * 0.1}}
      layout
      className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-card cursor-pointer"
      onClick={onClick} // Use the passed function
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-sm font-medium mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}

interface PhotographyCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
  onClick: () => void; // Add this prop
}

function PhotographyCard({
  image,
  title,
  category,
  index,
  onClick, // Add this prop
}: PhotographyCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, scale: 0.9}}
      animate={inView ? {opacity: 1, scale: 1} : {}}
      exit={{opacity: 0, scale: 0.9}}
      transition={{duration: 0.5, delay: index * 0.1}}
      layout
      className="group relative aspect-square overflow-hidden rounded-xl bg-card cursor-pointer"
      onClick={onClick} // Use the passed function
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-sm font-medium mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}

function PreviewModal({image, onClose}: {image: string; onClose: () => void}) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{scale: 0.9}}
        animate={{scale: 1}}
        exit={{scale: 0.9}}
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
          aria-label="Close preview"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="h-full w-full">
          <Image
            src={image}
            alt="Preview"
            className="rounded-lg object-contain max-h-[80vh]"
            width={1200}
            height={800}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "80vh",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
