import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

// Components
import Logo from '@components/common/Logo'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/jaridahq',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/jaridahq',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/jarida',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@jarida.dev',
      color: 'hover:text-jarida-purple'
    }
  ]

  const quickLinks = [
    { label: t('footer.links.about'), path: '/about' },
    { label: t('footer.links.projects'), path: '/projects' },
    { label: t('footer.links.community'), path: '/community' },
    { label: t('footer.links.contact'), path: '/contact' }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-jarida-charcoal text-jarida-white">
      <div className="container-jarida">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center mb-6 focus-jarida rounded-lg p-1">
                <Logo className="h-10 w-auto" />
              </Link>
              
              <p className="font-inter text-jarida-white/80 text-lg leading-relaxed mb-6 max-w-md">
                {t('footer.tagline')}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-jarida-white/70 transition-all duration-300 hover:scale-110 focus-jarida rounded-lg p-2 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-comfortaa text-lg font-semibold text-jarida-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="font-quicksand text-jarida-white/70 hover:text-jarida-white hover:text-jarida-purple transition-colors duration-300 focus-jarida rounded px-1 py-1"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="font-comfortaa text-lg font-semibold text-jarida-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <p className="font-quicksand text-jarida-white/70">
                  <span className="block font-medium text-jarida-white">Email:</span>
                  <a 
                    href="mailto:hello@jarida.dev"
                    className="hover:text-jarida-purple transition-colors duration-300 focus-jarida rounded px-1"
                  >
                    hello@jarida.dev
                  </a>
                </p>
                <p className="font-quicksand text-jarida-white/70">
                  <span className="block font-medium text-jarida-white">Location:</span>
                  Nairobi, Kenya & Global Remote
                </p>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-jarida-white/20"
          >
            <div className="text-center">
              <h3 className="font-comfortaa text-xl font-semibold text-jarida-white mb-4">
                Stay Updated
              </h3>
              <p className="font-quicksand text-jarida-white/70 mb-6 max-w-md mx-auto">
                Get the latest updates on our projects and African tech innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-jarida-white/10 border border-jarida-white/20 text-jarida-white placeholder-jarida-white/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-colors"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 border-t border-jarida-white/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-quicksand text-jarida-white/60 text-center md:text-left">
              {t('footer.copyright')}
            </p>
            
            <div className="flex items-center space-x-1 text-jarida-white/60 font-quicksand">
              <span>{t('footer.madeWith').split('❤️')[0]}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>{t('footer.madeWith').split('❤️')[1]}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer