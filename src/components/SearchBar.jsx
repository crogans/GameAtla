import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

// SearchBar component to handle user input for searching games, it allows the user to type what they would like to search and either press Enter or click the Search button to trigger the search. Also has a dropdown to select the ordering of the search results (e.g. by rating, release date, etc.)
export default function SearchBar({ searchInput, onSearch, onSearchChange, ordering, onOrderingChange }) {
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
            <FormControl size="medium" sx={{ minWidth: 150 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                    value={ordering}
                    label="Sort By"
                    onChange={(e) => onOrderingChange(e.target.value)}
                >
                    <MenuItem value="-rating">Highest Rated</MenuItem>
                    <MenuItem value="rating">Lowest Rated</MenuItem>
                    <MenuItem value="-released">Newest</MenuItem>
                    <MenuItem value="released">Oldest</MenuItem>
                    <MenuItem value="name">Name (A-Z)</MenuItem>
                    <MenuItem value="-name">Name (Z-A)</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={onSearch}>
                Search
            </Button>
        </Box>
    )
}