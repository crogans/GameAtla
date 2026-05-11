import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

// GameInfoPopup component to display information about a specific game when it is clicked on
export default function GameInfoPopup({ game, open, onClose }) {
    // If there is no game data, return null to avoid rendering the dialog
    if (!game) return null
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {game.name}
                <IconButton onClick={onClose}>✕</IconButton>
            </DialogTitle>
            {/* Display the games image, rating, release date, playtime, ESRB rating, and genres in the dialog content */}
            <DialogContent>
                <img src={game.background_image} alt={game.name} style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}><strong>Rating:</strong> {game.rating} / 5</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}><strong>Released:</strong> {game.released}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}><strong>Average Playtime:</strong> {game.playtime} hours</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}><strong>ESRB:</strong> {game.esrb_rating?.name ?? 'Not Rated'}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
                    {game.genres.map(g => <Chip key={g.id} label={g.name} size="small" />)}
                </Box>
            </DialogContent>
        </Dialog>
    )
}