import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  FileText,
  Users,
  Scale,
  Folder,
  Globe,
  Package,
  MessageSquare,
  Bug,
  Map,
  Terminal,
  Code,
  GitBranch,
  ExternalLink,
  Search,
  Filter,
  BookOpen,
  Download,
  Star,
  Eye,
  Library,
  Lightbulb,
  Target
} from 'lucide-react'
import { githubService } from '../services/github'

type CategoryType = 'all' | 'documentation' | 'templates' | 'community' | 'tools'

const ResourcesPage: React.FC = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<CategoryType>('all')
  const [searchQuery, setSearchQuery] = useState('')

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

  const resourcesData = githubService.getResourcesData()

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      FileText, Users, Scale, Folder, Globe, Package, MessageSquare, 
      Bug, Map, Terminal, Code, GitBranch
    }
    return iconMap[iconName] || FileText
  }

  const getTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      Guide: 'bg-blue-100 text-blue-800 border-blue-200',
      Template: 'bg-green-100 text-green-800 border-green-200',
      Legal: 'bg-purple-100 text-purple-800 border-purple-200',
      Forum: 'bg-orange-100 text-orange-800 border-orange-200',
      Support: 'bg-red-100 text-red-800 border-red-200',
      Planning: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      Tool: 'bg-gray-100 text-gray-800 border-gray-200',
      Config: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
    return colorMap[type] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  // Flatten all resources for filtering and searching
  const allResources = Object.values(resourcesData).flatMap(section => 
    section.items.map(item => ({
      ...item,
      sectionTitle: section.title,
      sectionKey: Object.keys(resourcesData).find(key => resourcesData[key as keyof typeof resourcesData] === section)
    }))
  )

  // Filter resources based on active filter and search query
  const filteredResources = allResources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.sectionKey === activeFilter
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  const filters: { key: CategoryType; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: t('projects.page.filters.all'), icon: <Library size={16} /> },
    { key: 'documentation', label: t('resources.page.categories.documentation'), icon: <BookOpen size={16} /> },
    { key: 'templates', label: t('resources.page.categories.templates'), icon: <Folder size={16} /> },
    { key: 'community', label: t('resources.page.categories.community'), icon: <Users size={16} /> },
    { key: 'tools', label: t('resources.page.categories.tools'), icon: <Terminal size={16} /> },
  ]

  const stats = [
    { 
      icon: Library, 
      label: t('resources.page.stats.totalResources'), 
      value: allResources.length.toString(),
      color: 'text-blue-600'
    },
    { 
      icon: Filter, 
      label: t('resources.page.stats.categories'), 
      value: Object.keys(resourcesData).length.toString(),
      color: 'text-green-600'
    },
    { 
      icon: Users, 
      label: t('resources.page.stats.community'), 
      value: '500+',
      color: 'text-purple-600'
    },
    { 
      icon: GitBranch, 
      label: 'Open Source', 
      value: '100%',
      color: 'text-orange-600'
    },
  ]

  const featuredResources = [
    resourcesData.documentation.items[0], // README
    resourcesData.templates.items[0], // Template
    resourcesData.community.items[0] // Discussions
  ]

  return (
    <>
      <Helmet>
        <title>{t('resources.page.title')} - Jarida</title>
        <meta name="description" content={t('resources.page.description')} />
        <meta name="keywords" content="developer resources, African tech, documentation, templates, GitHub, open source" />
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
                <BookOpen size={16} />
                <span>Comprehensive Resources</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-comfortaa text-4xl sm:text-5xl lg:text-6xl font-bold text-color-text-primary mb-6"
              >
                {t('resources.page.title')}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-inter text-lg sm:text-xl text-color-text-primary/70 leading-relaxed mb-8"
              >
                {t('resources.page.subtitle')}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="font-inter text-color-text-primary/60 leading-relaxed mb-12"
              >
                {t('resources.page.description')}
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {stats.map((stat, index) => (
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

        {/* Featured Resources */}
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
                {t('resources.page.featured.title')}
              </h2>
              <p className="font-inter text-lg text-color-text-primary/70 max-w-2xl mx-auto">
                {t('resources.page.featured.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {featuredResources.map((resource) => {
                const IconComponent = getIconComponent(resource.icon)
                return (
                  <motion.div
                    key={resource.title}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="card-jarida p-8 hover-glow text-center relative"
                  >
                    <div className="absolute top-4 right-4 px-3 py-1 bg-jarida-purple/20 backdrop-blur-sm rounded-full text-jarida-purple text-xs font-quicksand font-medium flex items-center space-x-1">
                      <Star size={12} />
                      <span>Featured</span>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-jarida-purple/10 rounded-xl text-jarida-purple mb-6"
                    >
                      <IconComponent size={28} />
                    </motion.div>

                    <h3 className="font-comfortaa text-xl font-bold text-color-text-primary mb-4">
                      {resource.title}
                    </h3>

                    <p className="font-inter text-color-text-primary/70 leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-quicksand font-medium border ${getTypeColor(resource.type)}`}>
                        {t(`resources.page.types.${resource.type.toLowerCase()}`)}
                      </span>
                      <span className="px-3 py-1 bg-light-grey text-color-text-primary text-xs font-quicksand rounded-full">
                        {t(`resources.page.categories.${resource.category.toLowerCase().replace(' ', '')}`)}
                      </span>
                    </div>

                    <motion.a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <span>{t('resources.page.actions.viewResource')}</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Quick Start Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-jarida-purple/10 to-blue-500/10 rounded-2xl p-8 border border-jarida-purple/20"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 bg-jarida-purple rounded-xl flex items-center justify-center text-white"
                >
                  <Lightbulb size={28} />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="font-comfortaa text-2xl font-bold text-color-text-primary mb-4">
                    {t('resources.page.getStarted.title')}
                  </h3>
                  <p className="font-inter text-color-text-primary/70 mb-6">
                    {t('resources.page.getStarted.description')}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Clone the jarida repository',
                      'Read the documentation',
                      'Choose a project template',
                      'Start contributing'
                    ].map((step: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-jarida-purple rounded-full flex items-center justify-center text-white font-quicksand font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-quicksand text-color-text-primary">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Resources */}
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
                All Resources
              </h2>
              <p className="font-inter text-lg text-color-text-primary/70 max-w-2xl mx-auto">
                Browse our complete collection of resources organized by category
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-color-text-primary/40" size={20} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-color-border bg-color-background-secondary text-color-text-primary placeholder-color-text-primary/50 focus:outline-none focus:ring-2 focus:ring-jarida-purple focus:border-transparent transition-all"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-quicksand font-medium text-sm transition-all duration-300 ${
                      activeFilter === filter.key
                        ? 'bg-jarida-purple text-white shadow-jarida'
                        : 'bg-color-background-secondary text-color-text-primary hover:bg-jarida-purple/10 border border-color-border'
                    }`}
                  >
                    {filter.icon}
                    <span>{filter.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Resources Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16"
            >
              {filteredResources.length === 0 ? (
                <motion.div
                  variants={itemVariants}
                  className="col-span-full text-center py-16"
                >
                  <Search size={64} className="mx-auto mb-4 text-color-text-primary/30" />
                  <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-2">
                    No resources found
                  </h3>
                  <p className="font-inter text-color-text-primary/60">
                    Try adjusting your search or filters
                  </p>
                </motion.div>
              ) : (
                filteredResources.map((resource, index) => {
                  const IconComponent = getIconComponent(resource.icon)
                  return (
                    <motion.div
                      key={`${resource.sectionKey}-${index}`}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      className="card-jarida p-6 hover-glow"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex-shrink-0 w-12 h-12 bg-jarida-purple/10 rounded-lg flex items-center justify-center text-jarida-purple"
                        >
                          <IconComponent size={20} />
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-comfortaa text-lg font-semibold text-color-text-primary mb-2">
                            {resource.title}
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-quicksand font-medium border ${getTypeColor(resource.type)}`}>
                              {t(`resources.page.types.${resource.type.toLowerCase()}`)}
                            </span>
                            <span className="text-xs font-quicksand text-color-text-primary/60">
                              {resource.sectionTitle}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="font-inter text-color-text-primary/70 text-sm leading-relaxed mb-6">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Eye size={14} className="text-color-text-primary/40" />
                          <span className="font-quicksand text-xs text-color-text-primary/60">
                            {t(`resources.page.categories.${resource.category.toLowerCase().replace(' ', '')}`)}
                          </span>
                        </div>
                        
                        <motion.a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary inline-flex items-center space-x-1 py-2 px-4 text-sm"
                        >
                          <span>View</span>
                          <ExternalLink size={14} />
                        </motion.a>
                      </div>
                    </motion.div>
                  )
                })
              )}
            </motion.div>

            {/* Results Summary */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-color-text-primary/60"
              >
                Found {filteredResources.length} resources matching "{searchQuery}"
              </motion.div>
            )}
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
              className="text-center text-white max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full text-white mb-6"
              >
                <Target size={40} />
              </motion.div>
              
              <h2 className="font-comfortaa text-3xl sm:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              
              <p className="font-inter text-lg text-white/90 mb-8">
                Use these resources to accelerate your development and contribute to African tech innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="https://github.com/jarida-io/jarida"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-white-bg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Get Started</span>
                </motion.a>
                
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-white-outline px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Code size={20} />
                  <span>View Projects</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ResourcesPage