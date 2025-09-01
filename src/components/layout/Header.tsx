import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Components
import LanguageSwitcher from '@components/common/LanguageSwitcher'
import ThemeToggle from '@components/common/ThemeToggle'
import Logo from '@components/common/Logo'

const Header: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Navigation items
  const navItems = [
    { key: 'home', path: '/', label: t('nav.home') },
    { key: 'about', path: '/about', label: t('nav.about') },
    { key: 'projects', path: '/projects', label: t('nav.projects') },
    { key: 'community', path: '/community', label: t('nav.community') },
    { key: 'resources', path: '/resources', label: t('nav.resources') },
    { key: 'contact', path: '/contact', label: t('nav.contact') },
  ]

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-color-background-primary/95 backdrop-blur-md shadow-lg border-b border-color-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-jarida">
        <nav className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="focus-jarida rounded-lg p-1">
              <Logo className="h-10 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`font-quicksand font-medium transition-colors duration-300 hover:text-jarida-purple focus-jarida rounded-md px-3 py-2 ${
                      isActiveRoute(item.path)
                        ? 'text-jarida-purple'
                        : 'text-color-text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <LanguageSwitcher />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link
                  to="/community"
                  className="btn-primary whitespace-nowrap"
                >
                  {t('hero.cta.primary')}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-color-text-primary hover:text-jarida-purple focus-jarida rounded-md p-2 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-color-background-primary border-t border-color-border py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block font-quicksand font-medium text-lg transition-colors duration-300 hover:text-jarida-purple focus-jarida rounded-md px-4 py-2 ${
                        isActiveRoute(item.path)
                          ? 'text-jarida-purple bg-jarida-purple/5'
                          : 'text-color-text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="pt-4 px-4"
                >
                  <Link
                    to="/community"
                    className="btn-primary w-full text-center"
                  >
                    {t('hero.cta.primary')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header