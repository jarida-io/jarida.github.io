import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Users,
  Code,
  Heart,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ContactPage: React.FC = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@jarida.io',
      description: 'Get in touch for partnerships and collaborations',
      link: 'mailto:hello@jarida.io'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/jarida-io',
      description: 'Contribute to our open-source projects',
      link: 'https://github.com/jarida-io'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Africa & Global',
      description: 'Building bridges across continents',
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '24-48 hours',
      description: 'We respond to all inquiries promptly',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/jarida-io',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/jarida-io/about/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/jarida_io',
      color: 'hover:text-blue-400'
    }
  ]

  const reasons = [
    {
      icon: Code,
      title: 'Developers',
      description: 'Join our community of African developers building impactful solutions'
    },
    {
      icon: Users,
      title: 'Organizations',
      description: 'Partner with us to support African tech innovation and talent'
    },
    {
      icon: Heart,
      title: 'Enthusiasts',
      description: 'Support our mission to empower African technology ecosystem'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Help us scale African solutions to solve global challenges'
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} - Jarida</title>
        <meta name="description" content={t('contact.description')} />
        <meta name="keywords" content="contact, jarida, african tech, collaboration, partnership" />
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-color-background-primary">
          <div className="container-jarida">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-jarida-purple/10 rounded-full text-jarida-purple font-quicksand font-medium text-sm mb-6"
              >
                <MessageSquare size={16} />
                <span>{t('contact.page.connectBadge')}</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-comfortaa text-4xl sm:text-5xl lg:text-6xl font-bold text-color-text-primary mb-6"
              >
                {t('contact.title')}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-inter text-lg sm:text-xl text-color-text-primary/70 leading-relaxed mb-8"
              >
                {t('contact.subtitle')}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="font-inter text-color-text-primary/60 leading-relaxed max-w-3xl mx-auto"
              >
                {t('contact.description')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-color-background-secondary">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-comfortaa text-3xl sm:text-4xl font-bold text-color-text-primary mb-6">
                {t('contact.page.methodsTitle')}
              </h2>
              <p className="font-inter text-lg text-color-text-primary/70 max-w-2xl mx-auto">
                {t('contact.page.methodsSubtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card-jarida p-6 text-center hover-glow"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-jarida-purple/10 rounded-xl text-jarida-purple mb-4"
                  >
                    <info.icon size={28} />
                  </motion.div>

                  <h3 className="font-comfortaa text-lg font-semibold text-color-text-primary mb-2">
                    {info.title}
                  </h3>

                  {info.link ? (
                    <motion.a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="font-quicksand text-jarida-purple hover:text-jarida-purple/80 transition-colors block mb-2"
                    >
                      {info.value}
                    </motion.a>
                  ) : (
                    <p className="font-quicksand text-color-text-primary mb-2">
                      {info.value}
                    </p>
                  )}

                  <p className="font-inter text-sm text-color-text-primary/60 leading-relaxed">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Reasons */}
        <section className="section-padding bg-color-background-primary">
          <div className="container-jarida">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="font-comfortaa text-3xl font-bold text-color-text-primary mb-4">
                    {t('contact.page.formTitle')}
                  </h2>
                  <p className="font-inter text-color-text-primary/70">
                    {t('contact.page.formSubtitle')}
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center space-x-2"
                  >
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-green-800 font-quicksand">
                      {t('contact.page.successMessage')}
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 border border-red-200 rounded-lg flex items-center space-x-2"
                  >
                    <AlertCircle className="text-red-600" size={20} />
                    <span className="text-red-800 font-quicksand">
                      {t('contact.page.errorMessage')}
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-quicksand font-medium text-color-text-primary mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-color-border bg-color-background-secondary text-color-text-primary placeholder-color-text-primary/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-quicksand font-medium text-color-text-primary mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-color-border bg-color-background-secondary text-color-text-primary placeholder-color-text-primary/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-quicksand font-medium text-color-text-primary mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-color-border bg-color-background-secondary text-color-text-primary placeholder-color-text-primary/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all resize-vertical"
                      placeholder="Tell us about your project, question, or how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>{t('contact.page.sending')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contact.form.send')}</span>
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Reasons to Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="font-comfortaa text-3xl font-bold text-color-text-primary mb-4">
                    {t('contact.page.audienceTitle')}
                  </h2>
                  <p className="font-inter text-color-text-primary/70">
                    {t('contact.page.audienceSubtitle')}
                  </p>
                </div>

                <div className="space-y-6">
                  {reasons.map((reason) => (
                    <motion.div
                      key={reason.title}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-color-background-secondary transition-colors"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-jarida-purple/10 rounded-lg flex items-center justify-center text-jarida-purple"
                      >
                        <reason.icon size={20} />
                      </motion.div>
                      
                      <div>
                        <h3 className="font-comfortaa text-lg font-semibold text-color-text-primary mb-2">
                          {reason.title}
                        </h3>
                        <p className="font-inter text-color-text-primary/70 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-12 p-6 bg-color-background-secondary rounded-xl">
                  <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-4">
                    {t('contact.page.socialTitle')}
                  </h3>
                  <p className="font-inter text-color-text-primary/70 mb-6">
                    {t('contact.page.socialSubtitle')}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-color-text-primary ${social.color} transition-colors`}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage