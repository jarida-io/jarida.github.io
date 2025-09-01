import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Heart, Code, Globe2, ArrowRight, MessageCircle } from 'lucide-react'

const CommunitySection: React.FC = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

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

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: t('community.stats.developers'),
      description: 'Active contributors from across Africa and beyond'
    },
    {
      icon: Code,
      number: '15+',
      label: t('community.stats.projects'),
      description: 'Open source projects making real impact'
    },
    {
      icon: Globe2,
      number: '12+',
      label: t('community.stats.countries'),
      description: 'Countries represented in our community'
    },
    {
      icon: MessageCircle,
      number: '2.5K+',
      label: t('community.stats.contributions'),
      description: 'Code contributions and discussions'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: t('community.values.0.title'),
      description: t('community.values.0.description'),
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Users,
      title: t('community.values.1.title'),
      description: t('community.values.1.description'),
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Code,
      title: t('community.values.2.title'),
      description: t('community.values.2.description'),
      color: 'from-green-400 to-emerald-500'
    }
  ]

  return (
    <section ref={ref} id="community" className="section-padding bg-color-background-secondary">
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
              <Users size={16} />
              <span>Global Community</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-comfortaa text-3xl sm:text-4xl lg:text-5xl font-bold text-color-text-primary mb-6"
            >
              {t('community.title')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-quicksand text-xl text-color-text-primary/80 leading-relaxed mb-4"
            >
              {t('community.subtitle')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-inter text-lg text-color-text-primary/70 leading-relaxed max-w-3xl mx-auto"
            >
              {t('community.description')}
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-color-background-primary rounded-xl shadow-lg hover:shadow-jarida transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-jarida-purple/10 rounded-full text-jarida-purple mb-4"
                >
                  <stat.icon size={28} />
                </motion.div>
                
                <div className="font-comfortaa text-3xl font-bold text-color-text-primary mb-2">
                  {stat.number}
                </div>
                
                <div className="font-quicksand font-semibold text-color-text-primary mb-2">
                  {stat.label}
                </div>
                
                <p className="font-inter text-sm text-color-text-primary/60">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-jarida-purple mb-6 shadow-lg"
                  >
                    <value.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="font-inter text-color-text-primary/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-jarida-purple rounded-2xl p-12 text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full" />
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
              >
                <Users size={32} />
              </motion.div>

              <h3 className="font-comfortaa text-3xl font-bold mb-4">
                Ready to Make an Impact?
              </h3>
              
              <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join our community of passionate developers, designers, and innovators 
                who are building solutions for tomorrow, today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/community"
                  className="btn-charcoal group inline-flex items-center space-x-2"
                >
                  <span>{t('community.cta')}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <motion.a
                  href="https://github.com/jaridahq"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-white-outline inline-flex items-center space-x-2"
                >
                  <Code size={18} />
                  <span>Start Contributing</span>
                </motion.a>
              </div>

              {/* Social proof */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="font-quicksand text-white/80 text-sm">
                  Join developers from Google, Microsoft, Meta, and leading African tech companies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-color-background-primary rounded-xl p-8 shadow-lg">
              <h3 className="font-comfortaa text-2xl font-semibold text-color-text-primary mb-4">
                Stay Connected
              </h3>
              <p className="font-inter text-color-text-primary/70 mb-6">
                Get weekly updates on community projects, events, and opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-color-border bg-color-background-secondary text-color-text-primary placeholder-jarida-charcoal/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunitySection