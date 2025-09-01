import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Users2, Target, Code2 } from 'lucide-react'

const AboutSection: React.FC = () => {
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

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users2,
      title: t('about.values.community.title'),
      description: t('about.values.community.description'),
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Target,
      title: t('about.values.impact.title'),
      description: t('about.values.impact.description'),
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Code2,
      title: t('about.values.open.title'),
      description: t('about.values.open.description'),
      color: 'from-jarida-purple to-purple-600'
    }
  ]

  return (
    <section ref={ref} id="about" className="section-padding bg-color-background-secondary">
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
              <Target size={16} />
              <span>{t('about.subtitle')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-comfortaa text-3xl sm:text-4xl lg:text-5xl font-bold text-color-text-primary mb-6"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-inter text-lg text-color-text-primary/70 leading-relaxed max-w-3xl mx-auto"
            >
              {t('about.description')}
            </motion.p>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-jarida p-8 hover-glow"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-jarida-purple p-3 shadow-lg"
                  >
                    <value.icon size={24} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="font-inter text-color-text-primary/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  className="h-1 bg-jarida-purple rounded-full mt-6 opacity-20"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-jarida-purple rounded-2xl p-8 text-white">
              <h3 className="font-comfortaa text-2xl font-semibold mb-4">
                Ready to Shape the Future?
              </h3>
              <p className="font-inter text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of developers, designers, and innovators who are building 
                tomorrow's solutions today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/community"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Join Our Community
                </motion.a>
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-white-outline"
                >
                  View Projects
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection