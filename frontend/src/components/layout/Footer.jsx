import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com",
      color: "hover:text-pink-400"
    },
    {
      name: "Twitter", 
      icon: Twitter,
      url: "https://www.twitter.com",
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: "https://www.linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com", 
      color: "hover:text-blue-500"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com",
      color: "hover:text-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-16 px-6 border-t border-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.h2 
              className="text-white text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Anarc
            </motion.h2>
            <p className="text-gray-400 text-base mb-6 leading-relaxed max-w-md">
              The fusion of beauty and technology — precision-engineered smartwatches designed for the modern lifestyle. Experience innovation that moves with you.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@anarc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-xl font-semibold mb-6 relative">
              Explore
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h3>
            <ul className="space-y-3 text-md">
              {['Home', 'Products', 'Gallery', 'About', 'Contact', 'Support'].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={`/${item.toLowerCase()}`} 
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-xl font-semibold mb-6 relative">
              Connect
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500"></div>
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 ${social.color} transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50`}
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-white text-lg font-medium mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2025 Anarc. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Made By</span>
              <motion.span 
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              <span>Arpita Rawat</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;