import { useState, useEffect } from 'react'
import { getGames, getGenres, getGameDetails } from './api'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar'
import LoadingCircle from './components/LoadingCircle'
import GameCard from './components/GameCard'
import SearchBar from './components/SearchBar'
import GameInfoPopup from './components/GameInfoPopup'

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
  const [selectedGame, setSelectedGame] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false)
  const [ordering, setOrdering] = useState('-rating')

  // Fetch games from RAWG API on initial load and whenever the search query or selected genre changes
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true)
      const gameData = await getGames(searchQuery, selectedGenre, ordering)
      setGames(gameData)
      setLoading(false)
    }
    fetchGames()
  }, [searchQuery, selectedGenre, ordering])

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

  // Handles clicking on a game card, fetches the information about the clicked game and opens the popup to display that information
  const handleGameClick = async (id) => {
    const gameData = await getGameDetails(id)
    setSelectedGame(gameData)
    setPopupOpen(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <SearchBar
        searchInput={searchInput}
        onSearch={handleSearch} 
        onSearchChange={setSearchInput} 
        ordering={ordering} 
        onOrderingChange={setOrdering} />
      {/* Genre filter chips, clicking on a chip will filter the games by that genre, clicking again will remove the filter */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, padding: 2 }}>
        {genres.map(genre => (
          <Chip
            key={genre.id}
            label={genre.name}
            onClick={() => setSelectedGenre(selectedGenre === genre.slug ? '' : genre.slug)}
            color={selectedGenre === genre.slug ? 'primary' : 'default'}
            clickable />
        ))}
      </Box>
      {/* Loading spinner while data is being fetched, once it is fetched, displays the game cards. If no games are found by searching, displays a 'No games found' message */}
      {loading ? (
        <LoadingCircle />
      ) : games.length === 0 ? (
        <Box sx={{ textAlign: 'center', padding: 4 }}>
          <Typography variant="h6">No games found for "{searchQuery}"</Typography>
        </Box>
      ) : (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {games.map(game => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={game.id} sx={{ display: 'flex' }}>
              <GameCard game={game} onClick={() => handleGameClick(game.id)} />
            </Grid>
          ))}
        </Grid>
      )}
      {/* Clicking on a game card will open the popup with more information about that game */}
      <GameInfoPopup
        game={selectedGame}
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </ThemeProvider>
  )
}

export default App
