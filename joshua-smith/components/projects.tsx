import { ExternalLink, Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {
      title: "DeFi Trading Platform",
      description: "A decentralized trading platform built with Solidity smart contracts and Node.js backend. Features automated market making and yield farming.",
      technologies: ["Solidity", "Node.js", "React", "Web3.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system using Ethereum blockchain. Ensures vote integrity and provides real-time results.",
      technologies: ["Solidity", "Truffle", "React", "IPFS", "MetaMask"],
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "E-commerce API",
      description: "Scalable REST API for e-commerce platform with payment integration, inventory management, and user authentication.",
      technologies: ["Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Real-time Chat App",
      description: "Real-time messaging application with WebSocket connections, file sharing, and group chat functionality.",
      technologies: ["Node.js", "Socket.io", "React", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "NFT Marketplace",
      description: "Full-stack NFT marketplace with minting, buying, and selling functionality. Built with modern web3 technologies.",
      technologies: ["Solidity", "Next.js", "Hardhat", "IPFS", "Ethereum"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management API",
      description: "Comprehensive task management system with team collaboration, deadlines, and progress tracking features.",
      technologies: ["Python", "Django", "PostgreSQL", "Celery", "Redis"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest work in blockchain development and backend systems
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                
                {/* Featured Badge */}
                <motion.div 
                  className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-medium"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Zap className="w-3 h-3" />
                  Featured
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-32 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="sm" variant="ghost" className="p-2 h-8 w-8 text-gray-400 hover:text-cyan-400">
                      <Github className="w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="sm" variant="ghost" className="p-2 h-8 w-8 text-gray-400 hover:text-cyan-400">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
