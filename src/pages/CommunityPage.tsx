import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  Users, 
  Heart, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Code,
  BookOpen,
  Zap,
  Globe,
  Star,
  TrendingUp,
  Eye,
  Bell,
  Send,
  CheckCircle
} from 'lucide-react'
import { useProjectStats } from '../hooks/useGitHubData'

const CommunityPage: React.FC = () => {
  const { t } = useTranslation()
  const { formattedStats } = useProjectStats()
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

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

  const socialPlatforms = [
    {
      key: 'linkedin',
      title: t('community.page.social.linkedin.title'),
      description: t('community.page.social.linkedin.description'),
      cta: t('community.page.social.linkedin.cta'),
      preview: t('community.page.social.linkedin.preview'),
      badge: t('community.page.social.linkedin.badge'),
      url: 'https://www.linkedin.com/company/jarida-io/about/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      features: ['Professional Updates', 'Industry Insights', 'Career Opportunities'],
      stats: '500+ Connections'
    },
    {
      key: 'instagram',
      title: t('community.page.social.instagram.title'),
      description: t('community.page.social.instagram.description'),
      cta: t('community.page.social.instagram.cta'),
      preview: t('community.page.social.instagram.preview'),
      badge: t('community.page.social.instagram.badge'),
      url: 'https://www.instagram.com/jarida.io/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      features: ['Behind the Scenes', 'Team Highlights', 'Visual Stories'],
      stats: 'Daily Content'
    },
    {
      key: 'whatsapp',
      title: t('community.page.social.whatsapp.title'),
      description: t('community.page.social.whatsapp.description'),
      cta: t('community.page.social.whatsapp.cta'),
      preview: t('community.page.social.whatsapp.preview'),
      badge: t('community.page.social.whatsapp.badge'),
      url: 'https://whatsapp.com/channel/0029VbAjhIX4o7qEKJS48e1E',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      features: ['Real-time Updates', 'Community Chat', 'Instant Notifications'],
      stats: 'Live Channel'
    }
  ]

  const communityStats = [
    { 
      icon: Users, 
      label: t('community.stats.developers'), 
      value: formattedStats.developers,
      color: 'text-blue-600'
    },
    { 
      icon: Code, 
      label: t('community.stats.projects'), 
      value: formattedStats.projects,
      color: 'text-green-600'
    },
    { 
      icon: Globe, 
      label: t('community.stats.countries'), 
      value: '8',
      color: 'text-purple-600'
    },
    { 
      icon: Star, 
      label: 'GitHub Stars', 
      value: formattedStats.stars,
      color: 'text-yellow-600'
    },
  ]

  const getStartedActions = [
    {
      key: 'contribute',
      title: t('community.page.getStarted.actions.contribute.title'),
      description: t('community.page.getStarted.actions.contribute.description'),
      cta: t('community.page.getStarted.actions.contribute.cta'),
      icon: Code,
      color: 'bg-jarida-purple',
      hoverColor: 'hover:bg-purple-700',
      href: '/projects'
    },
    {
      key: 'connect',
      title: t('community.page.getStarted.actions.connect.title'),
      description: t('community.page.getStarted.actions.connect.description'),
      cta: t('community.page.getStarted.actions.connect.cta'),
      icon: Heart,
      color: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700',
      href: '#social-platforms'
    },
    {
      key: 'learn',
      title: t('community.page.getStarted.actions.learn.title'),
      description: t('community.page.getStarted.actions.learn.description'),
      cta: t('community.page.getStarted.actions.learn.cta'),
      icon: BookOpen,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      href: '/resources'
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('community.page.title')} - Jarida</title>
        <meta name="description" content={t('community.page.description')} />
        <meta name="keywords" content="African tech community, developers, innovation, social media, networking" />
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
                <Users size={16} />
                <span>Growing Community</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-comfortaa text-4xl sm:text-5xl lg:text-6xl font-bold text-color-text-primary mb-6"
              >
                {t('community.page.title')}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-inter text-lg sm:text-xl text-color-text-primary/70 leading-relaxed mb-8"
              >
                {t('community.page.subtitle')}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="font-inter text-color-text-primary/60 leading-relaxed mb-12"
              >
                {t('community.page.description')}
              </motion.p>

              {/* Community Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {communityStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-color-background-secondary border border-color-border"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg ${stat.color} mb-3`}
                    >
                      <stat.icon size={20} />
                    </motion.div>
                    <div className="font-comfortaa text-2xl font-bold text-color-text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="font-quicksand text-sm text-color-text-primary/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Social Media Showcase */}
        <section id="social-platforms" className="section-padding bg-color-background-secondary">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-comfortaa text-3xl sm:text-4xl font-bold text-color-text-primary mb-6">
                {t('community.page.social.title')}
              </h2>
              <p className="font-inter text-lg text-color-text-primary/70 max-w-2xl mx-auto">
                {t('community.page.social.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
            >
              {socialPlatforms.map((platform) => (
                <motion.div
                  key={platform.key}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredSocial(platform.key)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative card-jarida p-8 hover-glow overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <platform.icon size={128} className={platform.textColor} />
                    </div>

                    {/* Badge */}
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 ${platform.bgColor} rounded-full text-xs font-quicksand font-medium ${platform.textColor} mb-4`}>
                      <Zap size={12} />
                      <span>{platform.badge}</span>
                    </div>

                    {/* Platform Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl text-white shadow-lg`}
                        >
                          <platform.icon size={24} />
                        </motion.div>
                        <div>
                          <h3 className="font-comfortaa text-xl font-bold text-color-text-primary">
                            {platform.title}
                          </h3>
                          <p className="font-quicksand text-sm text-color-text-primary/60">
                            {platform.stats}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-color-text-primary/70 leading-relaxed mb-6">
                      {platform.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {platform.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle size={16} className={platform.textColor} />
                          <span className="font-quicksand text-sm text-color-text-primary/60">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Preview */}
                    <div className={`${platform.bgColor} rounded-lg p-4 mb-6`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye size={16} className={platform.textColor} />
                        <span className="font-quicksand text-sm font-medium text-color-text-primary">
                          Preview
                        </span>
                      </div>
                      <p className="font-inter text-sm text-color-text-primary/70">
                        {platform.preview}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full btn-primary bg-gradient-to-r ${platform.color} ${platform.hoverColor} text-white border-none inline-flex items-center justify-center space-x-2 group relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{
                          x: hoveredSocial === platform.key ? [0, 5, 0] : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Send size={18} />
                      </motion.div>
                      <span className="relative z-10">{platform.cta}</span>
                      <motion.div
                        animate={{
                          x: hoveredSocial === platform.key ? [0, 3, 0] : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                      
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center bg-gradient-to-r from-jarida-purple/10 to-pink-500/10 rounded-2xl p-8 border border-jarida-purple/20"
            >
              <Bell size={48} className="mx-auto mb-4 text-jarida-purple" />
              <h3 className="font-comfortaa text-2xl font-bold text-color-text-primary mb-4">
                Never Miss an Update
              </h3>
              <p className="font-inter text-color-text-primary/70 mb-6 max-w-md mx-auto">
                Follow us on all platforms to stay connected with our latest projects, insights, and community highlights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialPlatforms.map((platform) => (
                  <motion.a
                    key={platform.key}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${platform.color} rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <platform.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="section-padding bg-color-background-primary">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-comfortaa text-3xl sm:text-4xl font-bold text-color-text-primary mb-6">
                {t('community.page.getStarted.title')}
              </h2>
              <p className="font-inter text-lg text-color-text-primary/70 max-w-2xl mx-auto">
                {t('community.page.getStarted.description')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {getStartedActions.map((action) => (
                <motion.div
                  key={action.key}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group text-center"
                >
                  <div className="card-jarida p-8 hover-glow relative overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 ${action.color} rounded-xl text-white mb-6 relative z-10`}
                    >
                      <action.icon size={28} />
                    </motion.div>

                    <h3 className="font-comfortaa text-xl font-bold text-color-text-primary mb-4">
                      {action.title}
                    </h3>

                    <p className="font-inter text-color-text-primary/70 leading-relaxed mb-6">
                      {action.description}
                    </p>

                    <motion.a
                      href={action.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`btn-primary ${action.color} ${action.hoverColor} text-white border-none inline-flex items-center space-x-2 group-link relative z-10`}
                    >
                      <span>{action.cta}</span>
                      <ArrowRight size={16} className="group-link-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-jarida-purple">
          <div className="container-jarida">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full text-white mb-6"
              >
                <TrendingUp size={40} />
              </motion.div>
              
              <h2 className="font-comfortaa text-3xl sm:text-4xl font-bold mb-6">
                Join the Movement
              </h2>
              
              <p className="font-inter text-lg text-white/90 mb-8">
                Be part of the community that's driving African tech innovation forward. 
                Your voice, skills, and passion can make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-white-bg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Code size={20} />
                  <span>Start Contributing</span>
                </motion.a>
                
                <motion.a
                  href={socialPlatforms[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-white-outline px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Users size={20} />
                  <span>Follow Our Journey</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CommunityPage