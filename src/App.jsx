import { useState, useEffect} from 'react'
import { getGames } from './api'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'

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
    </ThemeProvider>
  )
}

export default App
