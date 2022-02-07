import { Box, Label, Input, Button } from 'theme-ui'

const Header = () => {
    return (
        <Box sx={{ mb: 4 }}>
            <Label htmlFor="search">Search</Label>
            <Input id="search" name="search" />
            <Button>Go</Button>
        </Box>
    )
};

export default Header;
