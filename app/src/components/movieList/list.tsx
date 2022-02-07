import { Box, Grid } from 'theme-ui'

const List = () => {
    return (
        <Grid gap={10} columns={[2, '1fr 1fr']}>
            <Box bg="red">Box</Box>
            <Box bg="red">Box</Box>
            <Box bg="red">Box</Box>
            <Box bg="red">Box</Box>
        </Grid>
    )
};

export default List;
