import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// SearchBar component to handle user input for searching games, it allows the user to type what they would like to search and either press Enter or click the Search button to trigger the search
export default function SearchBar({ searchInput, onSearch, onSearchChange }) {
    return (
        <Box sx={{ display: 'flex', gap: 1, padding: 2 }}>
            <TextField
                label="Search Games..."
                variant="outlined"
                value={searchInput}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                fullWidth
            />
            <Button variant="contained" onClick={onSearch}>
                Search
            </Button>
        </Box>
    )
}