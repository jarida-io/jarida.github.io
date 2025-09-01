import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

// Context
import { ThemeProvider } from '@/contexts/ThemeContext'

// Layout Components
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import LoadingSpinner from '@components/common/LoadingSpinner'

// Pages - Lazy loaded for better performance
const HomePage = React.lazy(() => import('@pages/HomePage'))
const AboutPage = React.lazy(() => import('@pages/AboutPage'))
const ProjectsPage = React.lazy(() => import('@pages/ProjectsPage'))
const CommunityPage = React.lazy(() => import('@pages/CommunityPage'))
const ResourcesPage = React.lazy(() => import('@pages/ResourcesPage'))
const ContactPage = React.lazy(() => import('@pages/ContactPage'))

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
}

function App() {
  const { i18n } = useTranslation()
  
  // Apply dir attribute for RTL support (future enhancement)
  React.useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.dir?.()
  }, [i18n.language])

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-color-background-primary selection-jarida transition-colors duration-300">
        <Header />
        
        <main className="flex-1 pt-20">
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <motion.div
                      key="home"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <HomePage />
                    </motion.div>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <motion.div
                      key="about"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <AboutPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <motion.div
                      key="projects"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <ProjectsPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/community"
                  element={
                    <motion.div
                      key="community"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <CommunityPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/resources"
                  element={
                    <motion.div
                      key="resources"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <ResourcesPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <motion.div
                      key="contact"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <ContactPage />
                    </motion.div>
                  }
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App