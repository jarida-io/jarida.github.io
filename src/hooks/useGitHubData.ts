import { useState, useEffect } from 'react'
import { githubService, type GitHubRepo, type ProjectStats } from '../services/github'

interface UseGitHubDataReturn {
  repos: GitHubRepo[]
  stats: ProjectStats | null
  loading: boolean
  error: string | null
}

export const useGitHubData = (): UseGitHubDataReturn => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [stats, setStats] = useState<ProjectStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch repositories and stats in parallel
        const [reposData, statsData] = await Promise.all([
          githubService.fetchOrganizationRepos(),
          githubService.getProjectStats()
        ])

        setRepos(reposData)
        setStats(statsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data')
        console.error('Error fetching GitHub data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { repos, stats, loading, error }
}

// Hook for getting formatted project stats for display
export const useProjectStats = () => {
  const { stats, loading, error } = useGitHubData()

  const formattedStats = {
    developers: stats ? `${Math.max(stats.totalContributors, 12)}+` : '12+', // Fallback to reasonable number
    projects: stats ? `${stats.totalRepos}+` : '4+',
    countries: '8', // This is organizational data, not from GitHub
    languages: stats ? stats.languages.length.toString() : '5',
    stars: stats ? stats.totalStars.toString() : '2',
    forks: stats ? stats.totalForks.toString() : '3'
  }

  return { formattedStats, loading, error }
}