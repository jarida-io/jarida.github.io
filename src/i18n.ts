import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    resources: {
      en: {
        translation: {
          // Navigation
          nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            community: 'Community',
            resources: 'Resources',
            contact: 'Contact'
          },
          
          // Hero Section
          hero: {
            title: 'Empowering African Tech Innovation',
            subtitle: 'Building the future through open-source solutions and global developer communities',
            description: 'Connecting African tech talent with global opportunities, fostering innovation through collaborative open-source projects that solve real-world problems.',
            cta: {
              primary: 'Join Our Community',
              secondary: 'Explore Projects'
            }
          },
          
          // About Section
          about: {
            title: 'Our Mission',
            subtitle: 'Bridging Africa and Global Tech',
            description: 'We believe in the power of African innovation to transform the world, and we\'re committed to providing the tools, community, and opportunities to make it happen.',
            values: {
              innovation: {
                title: 'Innovation First',
                description: 'We prioritize cutting-edge solutions that address real-world challenges'
              },
              community: {
                title: 'Community Driven',
                description: 'Every project is built by and for the developer community'
              },
              impact: {
                title: 'Global Impact',
                description: 'Local solutions with the potential to transform industries worldwide'
              },
              open: {
                title: 'Open Source',
                description: 'Building transparent, collaborative solutions that benefit everyone'
              }
            },
            page: {
              impactTitle: 'Our Impact in Numbers',
              impactSubtitle: 'Building a movement that spans across Africa and beyond',
              valuesTitle: 'Our Core Values',
              valuesSubtitle: 'The principles that guide everything we do',
              journeyTitle: 'Our Journey',
              journeySubtitle: 'Key milestones in building Africa\'s tech innovation ecosystem',
              teamTitle: 'Our Community',
              teamSubtitle: 'Meet the passionate individuals driving African tech innovation forward',
              ctaTitle: 'Ready to Shape Africa\'s Tech Future?',
              ctaDescription: 'Join thousands of developers, designers, and innovators who are building solutions that matter. Your contribution can make a difference.',
              joinCommunity: 'Join Our Community',
              getInvolved: 'Get Involved',
              viewProjects: 'View Our Projects',
              stats: {
                developers: {
                  number: '500+',
                  label: 'Developers',
                  description: 'Active contributors from across Africa'
                },
                projects: {
                  number: '25+',
                  label: 'Projects', 
                  description: 'Open-source solutions making impact'
                },
                countries: {
                  number: '15',
                  label: 'Countries',
                  description: 'African nations represented'
                },
                lives: {
                  number: '1M+',
                  label: 'Lives Touched',
                  description: 'People benefiting from our solutions'
                }
              },
              milestones: {
                foundation: {
                  year: '2022',
                  title: 'Foundation',
                  description: 'Started as a small group of passionate African developers'
                },
                firstProject: {
                  year: '2023',
                  title: 'First Major Project',
                  description: 'Launched the Kenyan Sign Language Translator'
                },
                expansion: {
                  year: '2024',
                  title: 'Continental Expansion',
                  description: 'Grew to include developers from 15+ African countries'
                },
                recognition: {
                  year: '2025',
                  title: 'Global Recognition',
                  description: 'Recognized as a leading African tech innovation hub'
                }
              },
              team: {
                contributors: {
                  name: 'Community Contributors',
                  role: 'Open Source Developers',
                  description: 'Talented developers from across Africa contributing to impactful projects'
                },
                maintainers: {
                  name: 'Project Maintainers',
                  role: 'Technical Leadership',
                  description: 'Experienced engineers guiding project architecture and development'
                },
                managers: {
                  name: 'Community Managers',
                  role: 'Ecosystem Building',
                  description: 'Dedicated individuals fostering collaboration and growth'
                },
                advocates: {
                  name: 'Advocacy Team',
                  role: 'Outreach & Impact',
                  description: 'Passionate advocates spreading awareness and driving adoption'
                }
              }
            }
          },
          
          // Projects Section
          projects: {
            title: 'Featured Projects',
            subtitle: 'Open-Source Solutions Making a Difference',
            ksl: {
              title: 'Kenyan Sign Language Translator',
              description: 'Breaking down communication barriers with AI-powered sign language translation for the Kenyan deaf community.',
              technologies: ['Python', 'TensorFlow', 'OpenCV', 'React']
            },
            cta: 'View All Projects',
            page: {
              title: 'Our Projects',
              subtitle: 'Explore our open-source initiatives driving African tech innovation',
              description: 'Discover the projects that are making a real impact in communities across Africa and beyond.',
              filters: {
                all: 'All Projects',
                featured: 'Featured',
                active: 'Active',
                archived: 'Archived'
              },
              stats: {
                totalProjects: 'Total Projects',
                activeProjects: 'Active Projects',
                totalStars: 'GitHub Stars',
                totalForks: 'Forks',
                contributors: 'Contributors',
                languages: 'Languages Used'
              },
              project: {
                viewCode: 'View Code',
                liveDemo: 'Live Demo',
                learnMore: 'Learn More',
                getInvolved: 'Get Involved',
                stars: 'stars',
                forks: 'forks',
                contributors: 'contributors',
                lastUpdated: 'Last updated',
                languages: 'Languages',
                status: 'Status',
                impact: 'Impact Area'
              },
              loadingMessage: 'Loading projects from GitHub...',
              errorMessage: 'Failed to load projects',
              noProjects: 'No projects found',
              contributing: {
                title: 'Want to Contribute?',
                description: 'Join our community of developers working on impactful projects',
                cta: 'Start Contributing'
              }
            }
          },
          
          // Community Section
          community: {
            title: 'Join Our Global Community',
            subtitle: 'Connect, Collaborate, Create',
            description: 'Be part of a vibrant ecosystem of developers, designers, and innovators working together to solve Africa\'s biggest challenges.',
            stats: {
              developers: 'Active Developers',
              projects: 'Open Source Projects',
              countries: 'Countries Represented',
              contributions: 'Code Contributions'
            },
            cta: 'Get Involved',
            page: {
              title: 'Our Community',
              subtitle: 'Where African tech innovation comes alive',
              description: 'Connect with passionate developers, share knowledge, and build the future of African technology together.',
              social: {
                title: 'Join Our Social Communities',
                subtitle: 'Stay connected and engaged across all platforms',
                linkedin: {
                  title: 'LinkedIn',
                  description: 'Professional networking and industry insights',
                  cta: 'Follow Our Journey',
                  preview: 'Connect with 500+ professionals',
                  badge: 'Professional Network'
                },
                instagram: {
                  title: 'Instagram',
                  description: 'Behind-the-scenes content and visual stories',
                  cta: 'See Our Story',
                  preview: 'Daily updates and highlights',
                  badge: 'Visual Stories'
                },
                whatsapp: {
                  title: 'WhatsApp Channel',
                  description: 'Real-time updates and community discussions',
                  cta: 'Join the Channel',
                  preview: 'Instant notifications and updates',
                  badge: 'Real-time Updates'
                }
              },
              getStarted: {
                title: 'Ready to Get Started?',
                description: 'Choose how you\'d like to engage with our community',
                actions: {
                  contribute: {
                    title: 'Start Contributing',
                    description: 'Jump into our open source projects',
                    cta: 'View Projects'
                  },
                  connect: {
                    title: 'Connect Socially',
                    description: 'Follow us on your favorite platform',
                    cta: 'Choose Platform'
                  },
                  learn: {
                    title: 'Learn & Grow',
                    description: 'Access resources and documentation',
                    cta: 'Explore Resources'
                  }
                }
              }
            }
          },
          
          // Resources Section
          resources: {
            title: 'Developer Resources',
            subtitle: 'Everything you need to contribute',
            documentation: {
              title: 'Documentation',
              description: 'Comprehensive guides and API references'
            },
            tutorials: {
              title: 'Tutorials',
              description: 'Step-by-step guides for contributors'
            },
            blog: {
              title: 'Tech Blog',
              description: 'Insights from the African tech ecosystem'
            },
            page: {
              title: 'Developer Resources',
              subtitle: 'Everything you need to build amazing African tech solutions',
              description: 'Access comprehensive documentation, templates, tools, and community resources to accelerate your development journey.',
              categories: {
                documentation: 'Documentation',
                templates: 'Templates',
                community: 'Community',
                tools: 'Tools',
                gettingStarted: 'Getting Started',
                contributing: 'Contributing',
                legal: 'Legal',
                configuration: 'Configuration',
                support: 'Support',
                planning: 'Planning',
                development: 'Development'
              },
              types: {
                guide: 'Guide',
                template: 'Template',
                legal: 'Legal',
                forum: 'Forum',
                support: 'Support',
                planning: 'Planning',
                tool: 'Tool',
                config: 'Config'
              },
              actions: {
                viewResource: 'View Resource',
                openInGitHub: 'Open in GitHub',
                downloadTemplate: 'Download Template',
                joinDiscussion: 'Join Discussion'
              },
              stats: {
                totalResources: 'Total Resources',
                categories: 'Categories',
                updated: 'Last Updated',
                community: 'Community Driven'
              },
              featured: {
                title: 'Featured Resources',
                subtitle: 'Essential resources to get you started'
              },
              getStarted: {
                title: 'Quick Start Guide',
                description: 'New to Jarida? Start here to get up and running quickly.',
                steps: [
                  'Clone the template repository',
                  'Read the contributing guidelines', 
                  'Join our community discussions',
                  'Start building amazing solutions'
                ]
              }
            }
          },
          
          // Contact Section
          contact: {
            title: 'Get In Touch',
            subtitle: 'Ready to make an impact?',
            description: 'Whether you\'re a developer, organization, or simply passionate about African tech innovation, we\'d love to hear from you.',
            page: {
              connectBadge: 'Let\'s Connect',
              methodsTitle: 'Multiple Ways to Connect',
              methodsSubtitle: 'Choose the method that works best for you',
              formTitle: 'Send us a Message',
              formSubtitle: 'Have a question, idea, or want to collaborate? We\'d love to hear from you.',
              audienceTitle: 'Who We\'re Looking For',
              audienceSubtitle: 'Join our mission to empower African tech innovation',
              socialTitle: 'Follow Our Journey',
              socialSubtitle: 'Stay updated with our latest projects and community activities',
              successMessage: 'Message sent successfully! We\'ll get back to you soon.',
              errorMessage: 'Something went wrong. Please try again.',
              sending: 'Sending...',
              contactInfo: {
                email: {
                  title: 'Email Us',
                  value: 'hello@jarida.io',
                  description: 'Get in touch for partnerships and collaborations'
                },
                github: {
                  title: 'GitHub',
                  value: 'github.com/jarida-io',
                  description: 'Contribute to our open-source projects'
                },
                location: {
                  title: 'Location',
                  value: 'Africa & Global',
                  description: 'Building bridges across continents'
                },
                response: {
                  title: 'Response Time',
                  value: '24-48 hours',
                  description: 'We respond to all inquiries promptly'
                }
              },
              audience: {
                developers: {
                  title: 'Developers',
                  description: 'Join our community of African developers building impactful solutions'
                },
                organizations: {
                  title: 'Organizations',
                  description: 'Partner with us to support African tech innovation and talent'
                },
                enthusiasts: {
                  title: 'Enthusiasts',
                  description: 'Support our mission to empower African technology ecosystem'
                },
                global: {
                  title: 'Global Impact',
                  description: 'Help us scale African solutions to solve global challenges'
                }
              }
            },
            form: {
              name: 'Full Name',
              email: 'Email Address',
              message: 'Your Message',
              send: 'Send Message',
              namePlaceholder: 'Enter your full name',
              emailPlaceholder: 'Enter your email address',
              messagePlaceholder: 'Tell us about your project, question, or how we can help...'
            }
          },
          
          // Footer
          footer: {
            tagline: 'Empowering African tech innovation through open-source collaboration',
            madeWith: 'Made with ❤️ in Africa',
            links: {
              about: 'About Us',
              projects: 'Projects',
              community: 'Community',
              blog: 'Blog',
              contact: 'Contact',
              github: 'GitHub',
              twitter: 'Twitter',
              linkedin: 'LinkedIn'
            },
            copyright: `© ${new Date().getFullYear()} Jarida.io, All rights reserved.`
          }
        }
      },
      sw: {
        translation: {
          // Navigation
          nav: {
            home: 'Nyumbani',
            about: 'Kuhusu',
            projects: 'Miradi',
            community: 'Jumuiya',
            resources: 'Rasilimali',
            contact: 'Mawasiliano'
          },
          
          // Hero Section
          hero: {
            title: 'Kuongeza Ubunifu wa Teknolojia ya Afrika',
            subtitle: 'Kujenga mustakabali kupitia suluhisho za chanzo huria na jumuiya za wasanidi programu duniani',
            description: 'Kuunganisha vipaji vya teknolojia ya Afrika na fursa za kimataifa, kukuza ubunifu kupitia miradi ya ushirikiano wa chanzo huria inayosuluhisha matatizo ya kweli ya dunia.',
            cta: {
              primary: 'Jiunge na Jumuiya Yetu',
              secondary: 'Chunguza Miradi'
            }
          },
          
          // About Section
          about: {
            title: 'Dhima Yetu',
            subtitle: 'Kuunganisha Afrika na Teknolojia ya Kimataifa',
            description: 'Tunaaminiana na nguvu za ubunifu wa Afrika kubadilisha dunia, na tumejitolea kutoa vifaa, jumuiya, na fursa za kuifanya hiyo kutokea.',
            values: {
              innovation: {
                title: 'Ubunifu wa Kwanza',
                description: 'Tunaweka kipaumbele suluhisho za kisasa zinazoshughulikia changamoto za kweli za dunia'
              },
              community: {
                title: 'Kuongozwa na Jumuiya',
                description: 'Kila mradi unajenga na jumuiya ya wasanidi programu'
              },
              impact: {
                title: 'Athari ya Kimataifa',
                description: 'Suluhisho za kivunjachanya zenye uwezo wa kubadilisha viwanda duniani'
              },
              open: {
                title: 'Chanzo Huria',
                description: 'Kujenga suluhisho za uwazi na ushirikiano zinazofaidi kila mtu'
              }
            },
            page: {
              impactTitle: 'Athari Yetu kwa Idadi',
              impactSubtitle: 'Kujenga harakati inayoenea Afrika na zaidi',
              valuesTitle: 'Maadili Yetu ya Msingi',
              valuesSubtitle: 'Kanuni zinazoongoza kila tunachofanya',
              journeyTitle: 'Safari Yetu',
              journeySubtitle: 'Hatua muhimu za kujenga mazingira ya ubunifu wa teknolojia ya Afrika',
              teamTitle: 'Jumuiya Yetu',
              teamSubtitle: 'Kutana na watu wenye shauku wanaoendesha ubunifu wa teknolojia ya Afrika',
              ctaTitle: 'Uko Tayari Kuumba Mustakabali wa Teknolojia ya Afrika?',
              ctaDescription: 'Jiunge na maelfu ya wasanidi programu, wabunifu, na wengine wanajenga suluhisho muhimu. Mchango wako unaweza kuleta mabadiliko.',
              joinCommunity: 'Jiunge na Jumuiya Yetu',
              getInvolved: 'Shiriki',
              viewProjects: 'Ona Miradi Yetu',
              stats: {
                developers: {
                  number: '500+',
                  label: 'Wasanidi Programu',
                  description: 'Wachangiaji hai kutoka Afrika nzima'
                },
                projects: {
                  number: '25+',
                  label: 'Miradi',
                  description: 'Suluhisho za chanzo huria zinazofanya athari'
                },
                countries: {
                  number: '15',
                  label: 'Nchi',
                  description: 'Nchi za Afrika zilizowakilishwa'
                },
                lives: {
                  number: '1M+',
                  label: 'Maisha Yaliguswa',
                  description: 'Watu wanaofaidika na suluhisho zetu'
                }
              },
              milestones: {
                foundation: {
                  year: '2022',
                  title: 'Msingi',
                  description: 'Tulianza kama kikundi kidogo cha wasanidi programu wa Afrika wenye shauku'
                },
                firstProject: {
                  year: '2023',
                  title: 'Mradi wa Kwanza Mkuu',
                  description: 'Tulizindua Mfasiri wa Lugha ya Ishara ya Kenya'
                },
                expansion: {
                  year: '2024',
                  title: 'Upanuzi wa Bara',
                  description: 'Tulikua kujumuisha wasanidi programu kutoka nchi 15+ za Afrika'
                },
                recognition: {
                  year: '2025',
                  title: 'Utambuzi wa Kimataifa',
                  description: 'Tulitambuliwa kama kitovu kikuu cha ubunifu wa teknolojia ya Afrika'
                }
              },
              team: {
                contributors: {
                  name: 'Wachangiaji wa Jumuiya',
                  role: 'Wasanidi Programu wa Chanzo Huria',
                  description: 'Wasanidi programu wenye vipaji kutoka Afrika nzima wanachangia miradi yenye athari'
                },
                maintainers: {
                  name: 'Wahifadhi wa Miradi',
                  role: 'Uongozi wa Kiufundi',
                  description: 'Wahandisi wenye uzoefu wanaoongoza usanifu wa miradi na maendeleo'
                },
                managers: {
                  name: 'Wasimamizi wa Jumuiya',
                  role: 'Kujenga Mazingira',
                  description: 'Watu waliojitolea kukuza ushirikiano na ukuaji'
                },
                advocates: {
                  name: 'Timu ya Utetezi',
                  role: 'Ufikiaji na Athari',
                  description: 'Wanasihi wenye shauku wanaosambaza ufahamu na kuongeza matumizi'
                }
              }
            }
          },
          
          // Projects Section
          projects: {
            title: 'Miradi Maalum',
            subtitle: 'Suluhisho za Chanzo Huria Zinazofanya Tofauti',
            ksl: {
              title: 'Mfasiri wa Lugha ya Ishara ya Kenya',
              description: 'Kubomoa vizuizi vya mawasiliano kwa kutumia ufasiri wa lugha ya ishara unaotumia akili bandia kwa jumuiya ya viziwi ya Kenya.',
              technologies: ['Python', 'TensorFlow', 'OpenCV', 'React']
            },
            cta: 'Ona Miradi Yote',
            page: {
              title: 'Miradi Yetu',
              subtitle: 'Chunguza miradi yetu ya chanzo huria yanayoongoza ubunifu wa teknolojia ya Afrika',
              description: 'Gundua miradi yanayofanya athari ya kweli katika jamii za Afrika na zaidi.',
              filters: {
                all: 'Miradi Yote',
                featured: 'Zilizoangazwa',
                active: 'Zinazoendelea',
                archived: 'Zilizohifadhiwa'
              },
              stats: {
                totalProjects: 'Miradi Yote',
                activeProjects: 'Miradi Yanayoendelea',
                totalStars: 'Nyota za GitHub',
                totalForks: 'Mabao',
                contributors: 'Wachangiaji',
                languages: 'Lugha Zinazotumika'
              },
              project: {
                viewCode: 'Ona Msimbo',
                liveDemo: 'Mfano wa Moja kwa Moja',
                learnMore: 'Jifunze Zaidi',
                getInvolved: 'Shiriki',
                stars: 'nyota',
                forks: 'mabao',
                contributors: 'wachangiaji',
                lastUpdated: 'Ilisasishwa mwisho',
                languages: 'Lugha',
                status: 'Hali',
                impact: 'Eneo la Athari'
              },
              loadingMessage: 'Inapakia miradi kutoka GitHub...',
              errorMessage: 'Imeshindwa kupakia miradi',
              noProjects: 'Hakuna miradi iliyopatikana',
              contributing: {
                title: 'Unataka Kuchangia?',
                description: 'Jiunge na jumuiya yetu ya wasanidi programu wanaofanya kazi kwenye miradi yenye athari',
                cta: 'Anza Kuchangia'
              }
            }
          },
          
          // Community Section
          community: {
            title: 'Jiunge na Jumuiya Yetu ya Kimataifa',
            subtitle: 'Unganisha, Shirikiana, Unda',
            description: 'Kuwa sehemu ya mazingira mazuri ya wasanidi programu, wabunifu, na wengine wanaofanya kazi pamoja kutatua changamoto kubwa za Afrika.',
            stats: {
              developers: 'Wasanidi Programu Hai',
              projects: 'Miradi ya Chanzo Huria',
              countries: 'Nchi Zilizowakilishwa',
              contributions: 'Michango ya Msimbo'
            },
            cta: 'Shiriki',
            page: {
              title: 'Jumuiya Yetu',
              subtitle: 'Mahali ambapo ubunifu wa teknolojia ya Afrika unakua',
              description: 'Unganisha na wasanidi programu wenye shauku, shiriki ujuzi, na jenga mustakabali wa teknolojia ya Afrika pamoja.',
              social: {
                title: 'Jiunge na Jumuiya Zetu za Kijamii',
                subtitle: 'Baki umeunganishwa na kushiriki katika mifumo yote',
                linkedin: {
                  title: 'LinkedIn',
                  description: 'Mtandao wa kitaaluma na maarifa ya tasnia',
                  cta: 'Fuata Safari Yetu',
                  preview: 'Unganisha na wataalamu 500+',
                  badge: 'Mtandao wa Kitaaluma'
                },
                instagram: {
                  title: 'Instagram',
                  description: 'Maudhui ya nyuma ya pazia na hadithi za kuona',
                  cta: 'Ona Hadithi Yetu',
                  preview: 'Masasisho ya kila siku na vipengele muhimu',
                  badge: 'Hadithi za Kuona'
                },
                whatsapp: {
                  title: 'Kituo cha WhatsApp',
                  description: 'Masasisho ya wakati halisi na mijadala ya jumuiya',
                  cta: 'Jiunge na Kituo',
                  preview: 'Arifa za papo hapo na masasisho',
                  badge: 'Masasisho ya Wakati Halisi'
                }
              },
              getStarted: {
                title: 'Uko Tayari Kuanza?',
                description: 'Chagua jinsi ungependa kushiriki na jumuiya yetu',
                actions: {
                  contribute: {
                    title: 'Anza Kuchangia',
                    description: 'Ruka kwenye miradi yetu ya chanzo huria',
                    cta: 'Ona Miradi'
                  },
                  connect: {
                    title: 'Unganisha Kijamii',
                    description: 'Tufuate kwenye jukwaa ulilochagua',
                    cta: 'Chagua Jukwaa'
                  },
                  learn: {
                    title: 'Jifunze na Ukue',
                    description: 'Fikia rasilimali na nyaraka',
                    cta: 'Chunguza Rasilimali'
                  }
                }
              }
            }
          },
          
          // Resources Section
          resources: {
            title: 'Rasilimali za Wasanidi Programu',
            subtitle: 'Kila kitu unachohitaji kushiriki',
            documentation: {
              title: 'Nyaraka',
              description: 'Miongozo kamili na marejeleo ya API'
            },
            tutorials: {
              title: 'Mafunzo',
              description: 'Miongozo ya hatua kwa hatua kwa wachangiaji'
            },
            blog: {
              title: 'Blogu ya Teknolojia',
              description: 'Maarifa kutoka kwa mazingira ya teknolojia ya Afrika'
            },
            page: {
              title: 'Rasilimali za Wasanidi Programu',
              subtitle: 'Kila kitu unachohitaji kujenga suluhisho bora za teknolojia ya Afrika',
              description: 'Fikia nyaraka kamili, violezo, zana, na rasilimali za jumuiya ili kuharakisha safari yako ya maendeleo.',
              categories: {
                documentation: 'Nyaraka',
                templates: 'Violezo',
                community: 'Jumuiya',
                tools: 'Zana',
                gettingStarted: 'Kuanza',
                contributing: 'Kuchangia',
                legal: 'Kisheria',
                configuration: 'Usanidi',
                support: 'Msaada',
                planning: 'Mipango',
                development: 'Maendeleo'
              },
              types: {
                guide: 'Mwongozo',
                template: 'Kiolezo',
                legal: 'Kisheria',
                forum: 'Jukwaa',
                support: 'Msaada',
                planning: 'Mipango',
                tool: 'Zana',
                config: 'Usanidi'
              },
              actions: {
                viewResource: 'Ona Rasilimali',
                openInGitHub: 'Fungua kwenye GitHub',
                downloadTemplate: 'Pakua Kiolezo',
                joinDiscussion: 'Jiunge na Mjadala'
              },
              stats: {
                totalResources: 'Rasilimali Zote',
                categories: 'Makundi',
                updated: 'Ilisasishwa Mwisho',
                community: 'Inayoongozwa na Jumuiya'
              },
              featured: {
                title: 'Rasilimali Maalum',
                subtitle: 'Rasilimali muhimu za kukusaidia kuanza'
              },
              getStarted: {
                title: 'Mwongozo wa Kuanza Haraka',
                description: 'Mpya kwa Jarida? Anza hapa kupata msingi wa haraka.',
                steps: [
                  'Nakili hifadhi ya kiolezo',
                  'Soma miongozo ya kuchangia',
                  'Jiunge na mijadala ya jumuiya yetu',
                  'Anza kujenga suluhisho bora'
                ]
              }
            }
          },
          
          // Contact Section
          contact: {
            title: 'Wasiliana Nasi',
            subtitle: 'Uko tayari kufanya athari?',
            description: 'Iwe wewe ni msanidi programu, shirika, au mtu mwenye shauku kuhusu ubunifu wa teknolojia ya Afrika, tungependa kusikia kutoka kwako.',
            page: {
              connectBadge: 'Hebu Tuungane',
              methodsTitle: 'Njia Mbalimbali za Kuwasiliana',
              methodsSubtitle: 'Chagua njia inayokufaa zaidi',
              formTitle: 'Tutumie Ujumbe',
              formSubtitle: 'Una swali, wazo, au unataka kushirikiana? Tungependa kusikia kutoka kwako.',
              audienceTitle: 'Tunatafuta Nani',
              audienceSubtitle: 'Jiunge na dhima yetu ya kuongeza ubunifu wa teknolojia ya Afrika',
              socialTitle: 'Fuata Safari Yetu',
              socialSubtitle: 'Pata masasisho ya miradi yetu ya hivi karibuni na shughuli za jumuiya',
              successMessage: 'Ujumbe umetumwa kwa ufanisi! Tutawasiliana nawe hivi karibuni.',
              errorMessage: 'Kuna kitu kimekosea. Tafadhali jaribu tena.',
              sending: 'Inatuma...',
              contactInfo: {
                email: {
                  title: 'Tuandikie Barua Pepe',
                  value: 'hello@jarida.io',
                  description: 'Wasiliana nasi kwa ushirikiano na ubia'
                },
                github: {
                  title: 'GitHub',
                  value: 'github.com/jarida-io',
                  description: 'Changia katika miradi yetu ya chanzo huria'
                },
                location: {
                  title: 'Mahali',
                  value: 'Afrika na Duniani',
                  description: 'Kujenga madaraja kote bara zima'
                },
                response: {
                  title: 'Muda wa Majibu',
                  value: 'Masaa 24-48',
                  description: 'Tunajibu mahojiano yote haraka'
                }
              },
              audience: {
                developers: {
                  title: 'Wasanidi Programu',
                  description: 'Jiunge na jumuiya yetu ya wasanidi programu wa Afrika wanajenga suluhisho zenye athari'
                },
                organizations: {
                  title: 'Mashirika',
                  description: 'Shirikiana nasi kusaidia ubunifu na vipaji vya teknolojia ya Afrika'
                },
                enthusiasts: {
                  title: 'Wapenda Teknolojia',
                  description: 'Unga mkono dhima yetu ya kuongeza mazingira ya teknolojia ya Afrika'
                },
                global: {
                  title: 'Athari ya Kimataifa',
                  description: 'Tusaidie kupanua suluhisho za Afrika kutatua changamoto za kimataifa'
                }
              }
            },
            form: {
              name: 'Jina Kamili',
              email: 'Anwani ya Barua Pepe',
              message: 'Ujumbe Wako',
              send: 'Tuma Ujumbe',
              namePlaceholder: 'Ingiza jina lako kamili',
              emailPlaceholder: 'Ingiza anwani yako ya barua pepe',
              messagePlaceholder: 'Tuambie kuhusu mradi wako, swali, au jinsi tunavyoweza kukusaidia...'
            }
          },
          
          // Footer
          footer: {
            tagline: 'Kuongeza ubunifu wa teknolojia ya Afrika kupitia ushirikiano wa chanzo huria',
            madeWith: 'Imetengenezwa kwa ❤️ Afrika',
            links: {
              about: 'Kuhusu Sisi',
              projects: 'Miradi',
              community: 'Jumuiya',
              blog: 'Blogu',
              contact: 'Mawasiliano',
              github: 'GitHub',
              twitter: 'Twitter',
              linkedin: 'LinkedIn'
            },
            copyright: `© ${new Date().getFullYear()} Jarida.io, Haki zote zimehifadhiwa.`
          }
        }
      }
    }
  });

export default i18n;