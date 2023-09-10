import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import ListingContainer from "../../components/Listing/ListingContainer";
import {FiberManualRecord} from "@mui/icons-material";
import FilterMain from "../../components/Filter/FilterMain";



const Search = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Home
        </Link>,
        <Typography key="2" color="#AAA">
            Filter
        </Typography>,
    ];
    return (
        <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem'}}>
            <Box sx={{display: 'flex', gap: '.5rem', alignItems: 'center', color: 'white'}}>
                <Breadcrumbs
                    separator={<FiberManualRecord sx={{fontSize: '.5rem'}}/>}
                    aria-label="breadcrumb"
                    sx={{color: 'white'}}
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>
            <FilterMain link={'/search3'}/>
            <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                    Filter Results
                </Typography>
                <ListingContainer qty={[1, 2, 3, 4, 5, 6, 7, 8]}/>
            </Box>
        </Box>
    )
}

export default Search