import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { 
  Globe, 
  Users, 
  Code, 
  Heart, 
  Target, 
  Lightbulb, 
  GitBranch
} from 'lucide-react'
import { useProjectStats } from '../hooks/useGitHubData'

const AboutPage: React.FC = () => {
  const { t } = useTranslation()
  const { formattedStats } = useProjectStats()
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: Globe,
      title: t('about.values.impact.title'),
      description: t('about.values.impact.description')
    },
    {
      icon: Code,
      title: t('about.values.open.title'),
      description: t('about.values.open.description')
    }
  ]

  const stats = [
    {
      number: formattedStats.developers,
      label: t('about.page.stats.developers.label'),
      description: t('about.page.stats.developers.description')
    },
    {
      number: formattedStats.projects,
      label: t('about.page.stats.projects.label'),
      description: t('about.page.stats.projects.description')
    },
    {
      number: '8',
      label: t('about.page.stats.countries.label'),
      description: t('about.page.stats.countries.description')
    },
    {
      number: '1000+',
      label: t('about.page.stats.lives.label'),
      description: t('about.page.stats.lives.description')
    }
  ]

  const milestones = [
    {
      year: t('about.page.milestones.foundation.year'),
      title: t('about.page.milestones.foundation.title'),
      description: t('about.page.milestones.foundation.description')
    },
    {
      year: t('about.page.milestones.firstProject.year'),
      title: t('about.page.milestones.firstProject.title'),
      description: t('about.page.milestones.firstProject.description')
    },
    {
      year: t('about.page.milestones.expansion.year'),
      title: t('about.page.milestones.expansion.title'),
      description: t('about.page.milestones.expansion.description')
    },
    {
      year: t('about.page.milestones.recognition.year'),
      title: t('about.page.milestones.recognition.title'),
      description: t('about.page.milestones.recognition.description')
    }
  ]

  const team = [
    {
      name: t('about.page.team.contributors.name'),
      role: t('about.page.team.contributors.role'),
      description: t('about.page.team.contributors.description'),
      icon: Code
    },
    {
      name: t('about.page.team.maintainers.name'),
      role: t('about.page.team.maintainers.role'),
      description: t('about.page.team.maintainers.description'),
      icon: GitBranch
    },
    {
      name: t('about.page.team.managers.name'),
      role: t('about.page.team.managers.role'),
      description: t('about.page.team.managers.description'),
      icon: Users
    },
    {
      name: t('about.page.team.advocates.name'),
      role: t('about.page.team.advocates.role'),
      description: t('about.page.team.advocates.description'),
      icon: Heart
    }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - African Tech Innovation</title>
        <meta name="description" content={t('about.description')} />
        <meta name="keywords" content="African tech, innovation, open source, community, developers, impact" />
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-color-background-primary">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="container-jarida max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-jarida-purple/10 rounded-full text-jarida-purple font-quicksand font-medium text-sm mb-6"
            >
              <Target size={16} />
              <span>{t('about.subtitle')}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-comfortaa text-4xl sm:text-5xl lg:text-6xl font-bold text-color-text-primary mb-6"
            >
              {t('about.title')}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-inter text-lg sm:text-xl text-color-text-primary/70 leading-relaxed mb-8"
            >
              {t('about.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/community"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Users size={20} />
                <span>{t('about.page.joinCommunity')}</span>
              </a>
              <a
                href="/projects"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <GitBranch size={20} />
                <span>{t('about.page.viewProjects')}</span>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-color-background-secondary">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-comfortaa text-3xl font-bold text-color-text-primary mb-4">
                {t('about.page.impactTitle')}
              </h2>
              <p className="font-inter text-color-text-primary/70 max-w-2xl mx-auto">
                {t('about.page.impactSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-comfortaa text-3xl sm:text-4xl font-bold text-jarida-purple mb-2">
                    {stat.number}
                  </div>
                  <div className="font-quicksand text-lg font-semibold text-color-text-primary mb-2">
                    {stat.label}
                  </div>
                  <p className="font-inter text-sm text-color-text-primary/60">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-color-background-primary">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-comfortaa text-3xl font-bold text-color-text-primary mb-4">
                {t('about.page.valuesTitle')}
              </h2>
              <p className="font-inter text-color-text-primary/70 max-w-2xl mx-auto">
                {t('about.page.valuesSubtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-jarida-purple/10 rounded-full text-jarida-purple mb-6"
                  >
                    <value.icon size={32} />
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
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-color-background-secondary">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-comfortaa text-3xl font-bold text-color-text-primary mb-4">
                {t('about.page.journeyTitle')}
              </h2>
              <p className="font-inter text-color-text-primary/70 max-w-2xl mx-auto">
                {t('about.page.journeySubtitle')}
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-6 mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-jarida-purple rounded-full flex items-center justify-center text-white font-comfortaa font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-inter text-color-text-primary/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-color-background-primary">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-comfortaa text-3xl font-bold text-color-text-primary mb-4">
                {t('about.page.teamTitle')}
              </h2>
              <p className="font-inter text-color-text-primary/70 max-w-2xl mx-auto">
                {t('about.page.teamSubtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-color-background-secondary rounded-xl p-8 hover:shadow-jarida transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-jarida-purple/10 rounded-lg flex items-center justify-center text-jarida-purple">
                      <member.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-2">
                        {member.name}
                      </h3>
                      <p className="font-quicksand font-medium text-jarida-purple mb-3">
                        {member.role}
                      </p>
                      <p className="font-inter text-color-text-primary/70 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-jarida-purple">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="font-comfortaa text-3xl sm:text-4xl font-bold mb-6">
                {t('about.page.ctaTitle')}
              </h2>
              <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {t('about.page.ctaDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/community"
                  className="btn-white-bg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Users size={20} />
                  <span>{t('about.page.joinCommunity')}</span>
                </a>
                <a
                  href="/contact"
                  className="btn-white-outline px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Heart size={20} />
                  <span>{t('about.page.getInvolved')}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage