const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = "https://api.rawg.io/api"

// Get games from RAWG API, limited to 20 results for now
const getGames = async (searchTerm = '') => {
  const searchQuery = searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''
  const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=20${searchQuery}`)
  const data = await response.json()
  return data.results
}

export { getGames }