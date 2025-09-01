import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Clock, Send, Github, Twitter, Linkedin } from 'lucide-react'

const ContactSection: React.FC = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: t('contact.info.email'),
      link: `mailto:${t('contact.info.email')}`
    },
    {
      icon: MapPin,
      title: 'Location',
      content: t('contact.info.location'),
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: t('contact.info.response'),
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/jaridahq',
      color: 'hover:text-gray-900'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/jaridahq',
      color: 'hover:text-blue-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/jarida',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <section ref={ref} id="contact" className="section-padding bg-color-background-secondary">
      <div className="container-jarida">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-jarida-purple/10 rounded-full text-jarida-purple font-quicksand font-medium text-sm mb-6"
            >
              <Mail size={16} />
              <span>Get In Touch</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-comfortaa text-3xl sm:text-4xl lg:text-5xl font-bold text-color-text-primary mb-6"
            >
              {t('contact.title')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-quicksand text-xl text-color-text-primary/80 leading-relaxed mb-4"
            >
              {t('contact.subtitle')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-inter text-lg text-color-text-primary/70 leading-relaxed max-w-3xl mx-auto"
            >
              {t('contact.description')}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 w-12 h-12 bg-jarida-purple/10 rounded-lg flex items-center justify-center text-jarida-purple"
                    >
                      <info.icon size={20} />
                    </motion.div>
                    <div>
                      <h3 className="font-comfortaa text-lg font-semibold text-color-text-primary mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-inter text-color-text-primary/70 hover:text-jarida-purple transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="font-inter text-color-text-primary/70">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="font-comfortaa text-lg font-semibold text-color-text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-color-background-primary rounded-lg shadow-md flex items-center justify-center text-color-text-primary/70 transition-all duration-300 hover:shadow-jarida ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="card-jarida p-8">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block font-quicksand font-medium text-color-text-primary mb-2"
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-color-border bg-color-background-primary text-color-text-primary placeholder-jarida-charcoal/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block font-quicksand font-medium text-color-text-primary mb-2"
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-color-border bg-color-background-primary text-color-text-primary placeholder-jarida-charcoal/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block font-quicksand font-medium text-color-text-primary mb-2"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-color-border bg-color-background-primary text-color-text-primary placeholder-jarida-charcoal/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project, ideas, or how you'd like to get involved..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full btn-primary inline-flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>{t('contact.form.sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t('contact.form.send')}</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
                    >
                      <p className="font-quicksand font-medium">
                        {t('contact.form.success')}
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center"
                    >
                      <p className="font-quicksand font-medium">
                        {t('contact.form.error')}
                      </p>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection