import { useState, useEffect } from 'react'
import { getGames } from './api'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
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
  const [games, setGames] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // Fetch games from RAWG API on initial load and whenever the search query changes
  useEffect(() => {
    const fetchGames = async () => {
      const gameData = await getGames(searchQuery)
      setGames(gameData)
    }
    fetchGames()
  }, [searchQuery])

  // Handles the search input, triggers an API fetch with the current search input when the user clicks the Search button or presses Enter
  const handleSearch = () => {
    setSearchQuery(searchInput)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <SearchBar searchInput={searchInput} onSearch={handleSearch} onSearchChange={setSearchInput} />
      {/* Render game cards */}
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {games.map(game => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={game.id} sx={{ display: 'flex' }}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  )
}

export default App
