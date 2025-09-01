export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  topics: string[]
  default_branch: string
  homepage: string | null
}

export interface GitHubOrganization {
  login: string
  id: number
  description: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export interface ProjectStats {
  totalRepos: number
  totalStars: number
  totalForks: number
  totalContributors: number
  languages: string[]
}

class GitHubService {
  private readonly baseURL = 'https://api.github.com'
  private readonly orgName = 'jarida-io'

  async fetchOrganizationRepos(): Promise<GitHubRepo[]> {
    try {
      const response = await fetch(`${this.baseURL}/orgs/${this.orgName}/repos?per_page=100`)
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error)
      return []
    }
  }

  async fetchOrganization(): Promise<GitHubOrganization | null> {
    try {
      const response = await fetch(`${this.baseURL}/orgs/${this.orgName}`)
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching GitHub organization:', error)
      return null
    }
  }

  async fetchRepoContributors(repoName: string): Promise<number> {
    try {
      const response = await fetch(`${this.baseURL}/repos/${this.orgName}/${repoName}/contributors?per_page=100`)
      if (!response.ok) {
        return 0
      }
      const contributors = await response.json()
      return Array.isArray(contributors) ? contributors.length : 0
    } catch (error) {
      console.error(`Error fetching contributors for ${repoName}:`, error)
      return 0
    }
  }

  async getProjectStats(): Promise<ProjectStats> {
    const repos = await this.fetchOrganizationRepos()
    
    // Filter out .github and other non-project repos
    const projectRepos = repos.filter(repo => 
      repo.name !== '.github' && 
      !repo.name.startsWith('.')
    )

    const totalStars = projectRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = projectRepos.reduce((sum, repo) => sum + repo.forks_count, 0)
    
    // Get unique languages
    const languages = [...new Set(
      projectRepos
        .map(repo => repo.language)
        .filter(lang => lang !== null)
    )] as string[]

    // Estimate contributors (we'll fetch this more accurately later if needed)
    let totalContributors = 0
    for (const repo of projectRepos.slice(0, 5)) { // Limit to avoid rate limiting
      const contributorCount = await this.fetchRepoContributors(repo.name)
      totalContributors += contributorCount
    }

    return {
      totalRepos: projectRepos.length,
      totalStars,
      totalForks,
      totalContributors: Math.max(totalContributors, projectRepos.length), // At least 1 per repo
      languages
    }
  }

  getProjectDetails() {
    return {
      ksl: {
        name: 'kenyan_sign_language_app',
        displayName: 'Kenyan Sign Language App',
        description: 'Mobile application for learning and translating Kenyan Sign Language',
        technologies: ['Kotlin', 'Android', 'Machine Learning'],
        status: 'Active Development',
        impact: 'Accessibility & Education'
      },
      journal: {
        name: 'The_Journal',
        displayName: 'The Journal',
        description: 'OSS Android app for users to tell their stories and do reflections',
        technologies: ['Java', 'Android', 'SQLite'],
        status: 'Community Driven',
        impact: 'Personal Development'
      },
      nexx: {
        name: 'nexx',
        displayName: 'NexX Wallet',
        description: 'Versatile wallet running on top of the tbDEX SDK for decentralized finance',
        technologies: ['TypeScript', 'React', 'tbDEX', 'Web3'],
        status: 'Beta',
        impact: 'Financial Inclusion'
      },
      jarida: {
        name: 'jarida',
        displayName: 'Jarida Platform',
        description: 'Showcase repository and template for African tech innovation projects',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Open Source'],
        status: 'Template & Showcase',
        impact: 'Developer Tools'
      }
    }
  }

  getResourcesData() {
    return {
      documentation: {
        title: 'Official Documentation',
        description: 'Comprehensive guides for contributing to African tech innovation projects',
        items: [
          {
            title: 'Project README',
            description: 'Complete overview of the Jarida platform and its goals',
            type: 'Guide',
            url: 'https://github.com/jarida-io/jarida/blob/main/README.md',
            icon: 'FileText',
            category: 'Getting Started'
          },
          {
            title: 'Contributing Guidelines',
            description: 'Step-by-step guide to contributing to our projects',
            type: 'Guide',
            url: 'https://github.com/jarida-io/jarida/blob/main/CONTRIBUTING.md',
            icon: 'Users',
            category: 'Contributing'
          },
          {
            title: 'License Information',
            description: 'Open source license and usage terms',
            type: 'Legal',
            url: 'https://github.com/jarida-io/jarida/blob/main/LICENSE',
            icon: 'Scale',
            category: 'Legal'
          }
        ]
      },
      templates: {
        title: 'Project Templates',
        description: 'Ready-to-use templates for African tech innovation projects',
        items: [
          {
            title: 'Jarida Project Template',
            description: 'Complete template repository for starting new African tech projects',
            type: 'Template',
            url: 'https://github.com/jarida-io/jarida',
            icon: 'Folder',
            category: 'Templates'
          },
          {
            title: 'Web Application Starter',
            description: 'HTML/CSS/JavaScript foundation for web applications',
            type: 'Template',
            url: 'https://github.com/jarida-io/jarida/blob/main/index.html',
            icon: 'Globe',
            category: 'Templates'
          },
          {
            title: 'Package Configuration',
            description: 'Standard package.json setup for Node.js projects',
            type: 'Config',
            url: 'https://github.com/jarida-io/jarida/blob/main/package.json',
            icon: 'Package',
            category: 'Configuration'
          }
        ]
      },
      community: {
        title: 'Community Resources',
        description: 'Connect with the African tech innovation community',
        items: [
          {
            title: 'GitHub Discussions',
            description: 'Join community discussions and Q&A sessions',
            type: 'Forum',
            url: 'https://github.com/jarida-io/jarida/discussions',
            icon: 'MessageSquare',
            category: 'Community'
          },
          {
            title: 'Issue Tracker',
            description: 'Report bugs, request features, or get help',
            type: 'Support',
            url: 'https://github.com/jarida-io/jarida/issues',
            icon: 'Bug',
            category: 'Support'
          },
          {
            title: 'Project Roadmap',
            description: 'See what\'s planned for future development',
            type: 'Planning',
            url: 'https://github.com/jarida-io/jarida/projects',
            icon: 'Map',
            category: 'Planning'
          }
        ]
      },
      tools: {
        title: 'Developer Tools',
        description: 'Essential tools and resources for African tech developers',
        items: [
          {
            title: 'GitHub CLI',
            description: 'Command-line interface for GitHub operations',
            type: 'Tool',
            url: 'https://cli.github.com/',
            icon: 'Terminal',
            category: 'Development'
          },
          {
            title: 'VS Code Extensions',
            description: 'Recommended extensions for African tech development',
            type: 'Tool',
            url: 'https://marketplace.visualstudio.com/',
            icon: 'Code',
            category: 'Development'
          },
          {
            title: 'Git Best Practices',
            description: 'Version control best practices for collaborative development',
            type: 'Guide',
            url: 'https://git-scm.com/doc',
            icon: 'GitBranch',
            category: 'Development'
          }
        ]
      }
    }
  }
}

export const githubService = new GitHubService()