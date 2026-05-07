import { useState, useEffect } from 'react'
import { getGames } from './api'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import GameCard from './components/GameCard'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0DAD',
    },
  }
})

function App() {
  const [games, setGames] = useState([])

  // Fetch games from RAWG API
  useEffect(() => {
    const fetchGames = async () => {
      const gameData = await getGames()
      setGames(gameData)
    }
    fetchGames()
  }, [])

  // Test API call
  console.log(games)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {/* Render game cards */}
      <Grid container spacing={2} sx={{padding:2}}>
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
