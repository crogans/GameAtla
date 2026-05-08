import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

// LoadingCircle component to display a loading spinner while data is being fetched from the API
export default function LoadingCircle() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}
            direction="row"
        >
            <CircularProgress />
        </Box>
    );
}