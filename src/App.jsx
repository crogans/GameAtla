import { useState, useEffect } from 'react'
import { getGames, getGenres } from './api'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Navbar from './components/Navbar'
import LoadingCircle from './components/LoadingCircle'
import GameCard from './components/GameCard'
import SearchBar from './components/SearchBar'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0DAD',
    },
  }
})

function App() {
  const [loading, setLoading] = useState(true)
  const [games, setGames] = useState([])
  const [genres, setGenres] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')

  // Fetch games from RAWG API on initial load and whenever the search query changes
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true)
      const gameData = await getGames(searchQuery, selectedGenre)
      setGames(gameData)
      setLoading(false)
    }
    fetchGames()
  }, [searchQuery, selectedGenre])

  // Fetch genres from RAWG API on initial load
  useEffect(() => {
    const fetchGenres = async () => {
      const genreData = await getGenres()
      setGenres(genreData)
    }
    fetchGenres()
  }, [])

  // Handles the search input, triggers an API fetch with the current search input when the user clicks the Search button or presses Enter
  const handleSearch = () => {
    setSearchQuery(searchInput)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <SearchBar searchInput={searchInput} onSearch={handleSearch} onSearchChange={setSearchInput} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, padding: 2 }}>
        {genres.map(genre => (
          <Chip
            key={genre.id}
            label={genre.name}
            onClick={() => setSelectedGenre(selectedGenre === genre.slug ? '' : genre.slug)}
            color={selectedGenre === genre.slug ? 'primary' : 'default'}
            clickable
          />
        ))}
      </Box>
      {/* Loading spinner while data is being fetched, once it is fetched, displays the game cards */}
      {loading ? (
        <LoadingCircle />
      ) : (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {games.map(game => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={game.id} sx={{ display: 'flex' }}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      )}
    </ThemeProvider>
  )
}

export default App
