import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// GameCard component to display individual game details
export default function GameCard({ game, onClick }) {
    return (
        <Card onClick={onClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-0.25rem)', boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)' } }}>
            {/* Display the game image with a fixed height and overflow hidden, this ensures that the image fits properly without the card stretching */}
            <Box sx={{ minHeight: 200, maxHeight: 200, overflow: 'hidden' }}>
                <img
                    src={game.background_image}
                    alt={game.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>
            <CardContent>
                <Typography variant="h6">{game.name}</Typography>
                <Typography variant="body2">⭐ {game.rating}</Typography>
            </CardContent>
        </Card>
    )
}