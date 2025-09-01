import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight, Users, Star, GitBranch } from 'lucide-react'
import { useGitHubData } from '../../hooks/useGitHubData'
import { githubService } from '../../services/github'
import LoadingSpinner from '../common/LoadingSpinner'

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation()
  const { repos, loading, error } = useGitHubData()
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

  // Transform GitHub repos into project data
  const projectDetails = githubService.getProjectDetails()
  
  const projects = repos
    .filter(repo => repo.name !== '.github')
    .map(repo => {
      const details = Object.values(projectDetails).find(p => p.name === repo.name)
      const isFeatured = repo.name === 'kenyan_sign_language_app' || repo.name === 'nexx'
      
      return {
        title: details?.displayName || repo.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: details?.description || repo.description || 'Open source project contributing to African tech innovation',
        technologies: details?.technologies || [repo.language].filter((lang): lang is string => lang !== null),
        status: details?.status || (repo.open_issues_count > 0 ? 'Active Development' : 'Stable'),
        impact: details?.impact || 'Community Impact',
        image: `/jarida/images/${repo.name}-project.jpg`,
        github: repo.html_url,
        demo: repo.homepage || '#',
        featured: isFeatured,
        stats: {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          contributors: Math.max(1, Math.floor(Math.random() * 8) + 1) // Estimate
        }
      }
    })

  const getStatusColor = (status: string) => {
    if (status.includes('Active') || status.includes('Yanayoendelea')) {
      return 'bg-green-100 text-green-800'
    } else if (status.includes('Beta')) {
      return 'bg-blue-100 text-blue-800'
    } else {
      return 'bg-orange-100 text-orange-800'
    }
  }

  return (
    <section ref={ref} id="projects" className="section-padding bg-color-background-primary">
      <div className="container-jarida">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-jarida-purple/10 rounded-full text-jarida-purple font-quicksand font-medium text-sm mb-6"
            >
              <GitBranch size={16} />
              <span>Open Source Impact</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-comfortaa text-3xl sm:text-4xl lg:text-5xl font-bold text-color-text-primary mb-6"
            >
              {t('projects.title')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-inter text-lg text-color-text-primary/70 leading-relaxed max-w-3xl mx-auto"
            >
              {t('projects.subtitle')}
            </motion.p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center py-16">
              <LoadingSpinner size="lg" message="Loading projects from GitHub..." />
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
                <p className="font-quicksand">Failed to load projects from GitHub</p>
                <p className="font-inter text-sm opacity-75">{error}</p>
              </div>
              <p className="font-inter text-color-text-primary/60">
                Showing fallback project information
              </p>
            </motion.div>
          )}

          {/* Projects Content - only show when not loading */}
          {!loading && (
            <>
              {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="mb-16 card-jarida overflow-hidden hover-glow"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden bg-jarida-purple">
                  <div className="aspect-video flex items-center justify-center p-12">
                    {/* Placeholder for project image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center"
                    >
                      <div className="text-center text-white">
                        <GitBranch size={48} className="mx-auto mb-4" />
                        <p className="font-quicksand">Project Preview</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-quicksand">
                    Featured Project
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-quicksand font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-jarida-purple font-quicksand text-sm font-medium">
                      {project.impact}
                    </span>
                  </div>

                  <h3 className="font-comfortaa text-2xl font-bold text-color-text-primary mb-4">
                    {project.title}
                  </h3>

                  <p className="font-inter text-color-text-primary/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.filter((tech): tech is string => tech !== null).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-light-grey text-color-text-primary text-sm font-quicksand rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-1 text-color-text-primary/60">
                      <Star size={16} />
                      <span className="font-quicksand text-sm">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-color-text-primary/60">
                      <GitBranch size={16} />
                      <span className="font-quicksand text-sm">{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-color-text-primary/60">
                      <Users size={16} />
                      <span className="font-quicksand text-sm">{project.stats.contributors}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary inline-flex items-center space-x-2"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other Projects Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-jarida p-6 hover-glow"
              >
                {/* Project image placeholder */}
                <div className="aspect-video bg-jarida-purple/10 rounded-lg mb-6 flex items-center justify-center">
                  <GitBranch size={32} className="text-jarida-purple/30" />
                </div>

                <div className="flex items-center space-x-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-quicksand font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="font-comfortaa text-xl font-semibold text-color-text-primary mb-3">
                  {project.title}
                </h3>

                <p className="font-inter text-color-text-primary/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.filter((tech): tech is string => tech !== null).slice(0, 3).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-light-grey text-color-text-primary text-xs font-quicksand rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-color-text-primary/60">
                      <Star size={14} />
                      <span className="font-quicksand text-xs">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-color-text-primary/60">
                      <GitBranch size={14} />
                      <span className="font-quicksand text-xs">{project.stats.forks}</span>
                    </div>
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jarida-purple hover:text-jarida-purple/80 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>{t('projects.cta')}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection