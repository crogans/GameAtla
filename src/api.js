const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = "https://api.rawg.io/api"

// Get games from RAWG API, limited to 20 results with optional search term, genre filter, ordering, and pagination
const getGames = async (searchTerm = '', genre = '', ordering = '-rating', page = 1) => {
  try {
    const searchQuery = searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''
    const genreQuery = genre ? `&genres=${genre}` : ''
    const orderingQuery = `&ordering=${ordering}`
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=20&page=${page}&metacritic=1,100${searchQuery}${genreQuery}${orderingQuery}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching games:', error)
    return { results: [] }
  }
}

// Get genres from RAWG API
const getGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genres?key=${API_KEY}`)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching genres:', error)
    return []
  }
}

// Get information about a specific game by its ID from RAWG API
const getGameDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching game details:', error)
    return {}
  }
}

export { getGames, getGenres, getGameDetails }