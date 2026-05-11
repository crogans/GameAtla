const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = "https://api.rawg.io/api"

// Get games from RAWG API, limited to 20 results for now
const getGames = async (searchTerm = '', genre = '') => {
  const searchQuery = searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''
  const genreQuery = genre ? `&genres=${genre}` : ''
  const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=20${searchQuery}${genreQuery}`)
  const data = await response.json()
  return data.results
}

// Get genres from RAWG API
const getGenres = async () => {
  const response = await fetch(`${BASE_URL}/genres?key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

// Get information about a specific game by its ID from RAWG API
const getGameDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
  const data = await response.json()
  return data
}

export { getGames, getGenres, getGameDetails }