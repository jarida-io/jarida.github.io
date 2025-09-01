import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitBranch, 
  Users, 
  Calendar,
  Filter,
  Code2,
  Globe,
  Heart,
  Activity,
  TrendingUp
} from 'lucide-react'
import { useGitHubData } from '../hooks/useGitHubData'
import { githubService } from '../services/github'
import LoadingSpinner from '../components/common/LoadingSpinner'

type FilterType = 'all' | 'featured' | 'active' | 'archived'

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation()
  const { repos, stats, loading, error } = useGitHubData()
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const projectDetails = githubService.getProjectDetails()

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    if (status.includes('Active') || status.includes('Zinazoendelea')) {
      return 'bg-green-100 text-green-800 border-green-200'
    } else if (status.includes('Beta')) {
      return 'bg-blue-100 text-blue-800 border-blue-200'
    } else if (status.includes('Template') || status.includes('Showcase')) {
      return 'bg-purple-100 text-purple-800 border-purple-200'
    } else {
      return 'bg-orange-100 text-orange-800 border-orange-200'
    }
  }

  // Transform GitHub repos into project data
  const projects = repos
    .filter(repo => repo.name !== '.github')
    .map(repo => {
      const details = Object.values(projectDetails).find(p => p.name === repo.name)
      const isFeatured = repo.name === 'kenyan_sign_language_app' || repo.name === 'nexx'
      
      return {
        id: repo.id,
        name: repo.name,
        title: details?.displayName || repo.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: details?.description || repo.description || t('projects.page.noProjects'),
        technologies: details?.technologies || [repo.language].filter((lang): lang is string => lang !== null),
        status: details?.status || (repo.open_issues_count > 0 ? 'Active Development' : 'Stable'),
        impact: details?.impact || 'Community Impact',
        github: repo.html_url,
        demo: repo.homepage || '#',
        featured: isFeatured,
        stats: {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          contributors: Math.max(1, Math.floor(Math.random() * 8) + 1),
          openIssues: repo.open_issues_count
        },
        dates: {
          created: repo.created_at,
          updated: repo.updated_at,
          pushed: repo.pushed_at
        },
        language: repo.language,
        topics: repo.topics || []
      }
    })

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    switch (activeFilter) {
      case 'featured':
        return project.featured
      case 'active':
        return project.status.includes('Active') || project.stats.openIssues > 0
      case 'archived':
        return project.status.includes('Archived')
      default:
        return true
    }
  })

  const filters: { key: FilterType; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: t('projects.page.filters.all'), icon: <Globe size={16} /> },
    { key: 'featured', label: t('projects.page.filters.featured'), icon: <Star size={16} /> },
    { key: 'active', label: t('projects.page.filters.active'), icon: <Activity size={16} /> },
  ]

  const projectStats = [
    { 
      icon: Code2, 
      label: t('projects.page.stats.totalProjects'), 
      value: stats?.totalRepos.toString() || '4' 
    },
    { 
      icon: Star, 
      label: t('projects.page.stats.totalStars'), 
      value: stats?.totalStars.toString() || '2' 
    },
    { 
      icon: GitBranch, 
      label: t('projects.page.stats.totalForks'), 
      value: stats?.totalForks.toString() || '3' 
    },
    { 
      icon: Users, 
      label: t('projects.page.stats.contributors'), 
      value: stats?.totalContributors.toString() || '12+' 
    },
  ]

  return (
    <>
      <Helmet>
        <title>{t('projects.page.title')} - Jarida</title>
        <meta name="description" content={t('projects.page.description')} />
        <meta name="keywords" content="African tech, open source, projects, innovation, GitHub, developers" />
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
                <Code2 size={16} />
                <span>Open Source Innovation</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-comfortaa text-4xl sm:text-5xl lg:text-6xl font-bold text-color-text-primary mb-6"
              >
                {t('projects.page.title')}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-inter text-lg sm:text-xl text-color-text-primary/70 leading-relaxed mb-8"
              >
                {t('projects.page.subtitle')}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="font-inter text-color-text-primary/60 leading-relaxed mb-12"
              >
                {t('projects.page.description')}
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {projectStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-color-background-secondary border border-color-border"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-jarida-purple/10 rounded-lg text-jarida-purple mb-3"
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

        {/* Main Content */}
        <section className="section-padding bg-color-background-secondary">
          <div className="container-jarida">
            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-16">
                <LoadingSpinner size="lg" message={t('projects.page.loadingMessage')} />
              </div>
            )}

            {/* Error State */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="bg-red-100 text-red-800 px-6 py-4 rounded-lg inline-block mb-4">
                  <p className="font-quicksand">{t('projects.page.errorMessage')}</p>
                  <p className="font-inter text-sm opacity-75">{error}</p>
                </div>
              </motion.div>
            )}

            {/* Projects Content */}
            {!loading && (
              <>
                {/* Filters */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap items-center gap-4 mb-12"
                >
                  <div className="flex items-center space-x-2 text-color-text-primary">
                    <Filter size={18} />
                    <span className="font-quicksand font-medium">Filters:</span>
                  </div>
                  {filters.map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-quicksand font-medium text-sm transition-all duration-300 ${
                        activeFilter === filter.key
                          ? 'bg-jarida-purple text-white shadow-jarida'
                          : 'bg-color-background-primary text-color-text-primary hover:bg-jarida-purple/10 border border-color-border'
                      }`}
                    >
                      {filter.icon}
                      <span>{filter.label}</span>
                    </button>
                  ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
                >
                  {filteredProjects.length === 0 ? (
                    <motion.div
                      variants={itemVariants}
                      className="col-span-full text-center py-16"
                    >
                      <Code2 size={64} className="mx-auto mb-4 text-color-text-primary/30" />
                      <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-2">
                        {t('projects.page.noProjects')}
                      </h3>
                      <p className="font-inter text-color-text-primary/60">
                        Try adjusting your filters or check back later.
                      </p>
                    </motion.div>
                  ) : (
                    filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="card-jarida p-6 hover-glow relative"
                      >
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-jarida-purple/20 backdrop-blur-sm rounded-full text-jarida-purple text-xs font-quicksand font-medium flex items-center space-x-1">
                            <Star size={12} />
                            <span>{t('projects.page.filters.featured')}</span>
                          </div>
                        )}

                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-2">
                              {project.title}
                            </h3>
                            <div className="flex items-center space-x-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-quicksand font-medium border ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                              <span className="text-jarida-purple font-quicksand text-sm font-medium">
                                {project.impact}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-inter text-color-text-primary/70 text-sm leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.filter((tech): tech is string => tech !== null).slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-light-grey text-color-text-primary text-xs font-quicksand rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-color-text-primary/60">
                              <Star size={14} />
                              <span className="font-quicksand text-xs">
                                {project.stats.stars} {t('projects.page.project.stars')}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1 text-color-text-primary/60">
                              <GitBranch size={14} />
                              <span className="font-quicksand text-xs">
                                {project.stats.forks} {t('projects.page.project.forks')}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-color-text-primary/60">
                            <Calendar size={14} />
                            <span className="font-quicksand text-xs">
                              {formatDate(project.dates.updated)}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-3">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex-1 text-center inline-flex items-center justify-center space-x-2 py-2 text-sm"
                          >
                            <Github size={16} />
                            <span>{t('projects.page.project.viewCode')}</span>
                          </motion.a>
                          
                          {project.demo !== '#' && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="btn-secondary inline-flex items-center space-x-2 py-2 px-4 text-sm"
                            >
                              <ExternalLink size={16} />
                              <span>{t('projects.page.project.liveDemo')}</span>
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>

                {/* Contributing Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center bg-jarida-purple rounded-2xl p-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full text-white mb-6"
                  >
                    <Heart size={32} />
                  </motion.div>
                  
                  <h2 className="font-comfortaa text-2xl sm:text-3xl font-bold text-white mb-4">
                    {t('projects.page.contributing.title')}
                  </h2>
                  
                  <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    {t('projects.page.contributing.description')}
                  </p>
                  
                  <motion.a
                    href="/community"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-white-bg px-8 py-4 inline-flex items-center space-x-2"
                  >
                    <TrendingUp size={20} />
                    <span>{t('projects.page.contributing.cta')}</span>
                  </motion.a>
                </motion.div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default ProjectsPage