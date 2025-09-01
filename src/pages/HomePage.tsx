import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

// Sections
import HeroSection from '@components/sections/HeroSection'
import AboutSection from '@components/sections/AboutSection'
import ProjectsSection from '@components/sections/ProjectsSection'
import CommunitySection from '@components/sections/CommunitySection'
import ContactSection from '@components/sections/ContactSection'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>African Tech Innovation</title>
        <meta 
          name="description" 
          content={t('hero.description')} 
        />
        <meta name="keywords" content="African tech, open source, innovation, development, Kenya, programming" />
        <meta property="og:title" content="African Tech Innovation" />
        <meta property="og:description" content={t('hero.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://jaridahq.github.io/" />
      </Helmet>

      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CommunitySection />
        <ContactSection />
      </div>
    </>
  )
}

export default HomePage