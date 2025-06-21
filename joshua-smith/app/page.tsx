"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Download,
  Code,
  Database,
  Blocks,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Projects } from "@/components/projects";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(0, 255, 157, 0.3)",
      "0 0 40px rgba(0, 255, 157, 0.5)",
      "0 0 20px rgba(0, 255, 157, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
    },
  },
};

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const skills = [
    {
      name: "JavaScript",
      level: 95,
      icon: Code,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Node.js",
      level: 90,
      icon: Database,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Solidity",
      level: 85,
      icon: Blocks,
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Python",
      level: 80,
      icon: Code,
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "MongoDB",
      level: 88,
      icon: Database,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Express.js",
      level: 92,
      icon: Code,
      color: "from-gray-400 to-gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Joshua Smith
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-green-400" />
              ) : (
                <Menu className="h-6 w-6 text-green-400" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-green-400 transition-all duration-300 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: isMobileMenuOpen ? index * 0.1 : 0,
                  }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20" />
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.div
              className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-green-400/50"
              variants={glowAnimation}
              animate="animate"
            >
              <Image
                src="/images/hero-image.png"
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Backend & Blockchain
            </span>
            <br />
            <span className="text-white">Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            CS Graduate, specializing in Backend development (JavaScript and
            python) and Solidity smart contracts. Building the future of
            decentralized applications.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-semibold px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/joshuaikechukwuodoh" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/feed?trk=p_mwlite_feed-primary_nav",
              },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "Odohjoshua82@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 rounded-full border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a passionate Computer Science graduate based in Nigeria,
                specializing in backend development and blockchain technology.
                With expertise in the JavaScript ecosystem and Solidity smart
                contracts, I build scalable web applications and decentralized
                solutions.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                My journey in tech has led me to work with cutting-edge
                technologies, from building robust APIs with Node.js to creating
                secure smart contracts on the Ethereum blockchain. I'm always
                eager to learn new technologies and contribute to innovative
                projects.
              </p>
              <div className="flex items-center text-green-400 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="rounded-2xl overflow-hidden border-2 border-green-400/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/about-image.png"
                  alt="About me"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Proficient in modern web technologies and blockchain development
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  {skill.level}% Proficiency
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Ready to bring your next project to life? Let's discuss how we can
              build something amazing together.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-semibold px-12 py-4 text-lg"
              >
                <Link href="mailto:Odohjoshua82@gmail.com">
                  <Mail className="mr-2 h-6 w-6" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Joshua Smith.
          </p>
        </div>
      </footer>
    </div>
  );
}
