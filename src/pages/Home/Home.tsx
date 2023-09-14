import ListingContainer from "../../components/Listing/ListingContainer";
import {Avatar, Box, Button, ButtonGroup, Card, CardMedia, Typography} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos, Description} from "@mui/icons-material";
import ListItem from "../../components/ListAnime/ListItem";
import {Link} from "react-router-dom";

interface iGenre {
    name: string
    color?: string
}

interface iGenres extends Array<iGenre> {
}

const genres: iGenres = [
    {name: 'Action', color: '#D0E6A5'}, {name: 'Adventure', color: '#FFDD95'}, {
        name: 'Cars',
        color: '#FC887B'
    }, {name: 'Comedy', color: '#CCABDA'}, {name: 'Dementia', color: '#ABCCD8'}, {
        name: 'Demons',
        color: '#D8B2AB'
    }, {name: 'Drama', color: '#86E3CE'},
    {name: 'Ecchi', color: '#D0E6A5'}, {name: 'Fantasy', color: '#FFDD95'}, {
        name: 'Game',
        color: '#FC887B'
    }, {name: 'Harem', color: '#CCABDA'}, {name: 'Historical', color: '#ABCCD8'}, {
        name: 'Horror',
        color: '#D8B2AB'
    }, {name: 'Isekai', color: '#86E3CE'},
    {name: 'Josei', color: '#D0E6A5'}, {name: 'Kids', color: '#FFDD95'}, {
        name: 'Magic',
        color: '#FC887B'
    }, {name: 'Martial Arts', color: '#CCABDA'}, {name: 'Mecha', color: '#ABCCD8'}, {
        name: 'Military',
        color: '#D8B2AB'
    }, {name: 'Music', color: '#86E3CE'},
    {name: 'Mystery', color: '#D0E6A5'}, {name: 'Parody', color: '#FFDD95'}, {name: 'Police', color: '#FC887B'},
]
const Home = () => {
    const genreList = genres.map(x => {
        return <Typography sx={{flexBasis: '30%', color: `${x.color ?? 'white'}`}} key={x.name}>{x.name}</Typography>
    })

    return (
        <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem'}}>
            <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                    Top Upcoming
                </Typography>
                <ListingContainer qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
            </Box>
            <Box sx={{display: 'flex', background: 'rgba(255, 255, 255, 0.05)', padding: '2rem', pb: 0, gap: '1rem'}}>
                <Card sx={{
                    minWidth: '20rem',
                    maxWidth: '20rem',
                    background: 'unset',
                    display: 'flex',
                    justifyContent: 'end'
                }}>
                    <CardMedia component={'img'} image={"/img.png"}></CardMedia>
                </Card>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem'}}>
                    <Box sx={{display: 'flex'}}>
                        <Box sx={{
                            p: '0.5rem 1rem',
                            border: '1px solid #FFDD95',
                            borderRadius: '1.25rem',
                            color: '#FFDD95',
                            cursor: 'pointer'
                        }}>Newest Comments</Box>
                        <Box sx={{
                            p: '0.5rem 1rem',
                            border: '1px solid translate',
                            borderRadius: '1.25rem',
                            color: 'white',
                            cursor: 'pointer'
                        }}>Top Comments</Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        alignContent: 'flex-start',
                        rowGap: '1rem',
                        flexFlow: 'wrap',
                        gap: '1rem',
                        pb: '1rem'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '1rem',
                            color: 'white',
                            p: '1rem',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
                            borderRadius: '.75rem',
                            minWidth: '280px',
                            maxWidth: '280px',
                        }}>
                            <Box sx={{display: 'flex', gap: '1rem'}}>
                                <Avatar alt="Remy Sharp" src="/cover.png"/>
                                <Box>
                                    <Typography>celestil_stressed</Typography>
                                    <Typography>- 5 minutes ago</Typography>
                                </Box>
                            </Box>
                            <Typography>
                                03:46 fuckinn''" Eminence in
                                shadow vibe
                            </Typography>
                            <Typography sx={{
                                display: 'flex',
                                gap: '.5rem',
                                alignItems: 'center',
                                color: '#FFDD95'
                            }}><Description/>Am I Actually the Strongest?</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '1rem',
                            color: 'white',
                            p: '1rem',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
                            borderRadius: '.75rem',
                            minWidth: '280px',
                            maxWidth: '280px',
                        }}>
                            <Box sx={{display: 'flex', gap: '1rem'}}>
                                <Avatar alt="Remy Sharp" src="/cover.png"/>
                                <Box>
                                    <Typography>celestil_stressed</Typography>
                                    <Typography>- 5 minutes ago</Typography>
                                </Box>
                            </Box>
                            <Typography>
                                03:46 fuckinn''" Eminence in
                                shadow vibe
                            </Typography>
                            <Typography sx={{
                                display: 'flex',
                                gap: '.5rem',
                                alignItems: 'center',
                                color: '#FFDD95'
                            }}><Description/>Am I Actually the Strongest?</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '1rem',
                            color: 'white',
                            p: '1rem',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
                            borderRadius: '.75rem',
                            minWidth: '280px',
                            maxWidth: '280px',
                        }}>
                            <Box sx={{display: 'flex', gap: '1rem'}}>
                                <Avatar alt="Remy Sharp" src="/cover.png"/>
                                <Box>
                                    <Typography>celestil_stressed</Typography>
                                    <Typography>- 5 minutes ago</Typography>
                                </Box>
                            </Box>
                            <Typography>
                                03:46 fuckinn''" Eminence in
                                shadow vibe
                            </Typography>
                            <Typography sx={{
                                display: 'flex',
                                gap: '.5rem',
                                alignItems: 'center',
                                color: '#FFDD95'
                            }}><Description/>Am I Actually the Strongest?</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '1rem',
                            color: 'white',
                            p: '1rem',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
                            borderRadius: '.75rem',
                            minWidth: '280px',
                            maxWidth: '280px',
                        }}>
                            <Box sx={{display: 'flex', gap: '1rem'}}>
                                <Avatar alt="Remy Sharp" src="/cover.png"/>
                                <Box>
                                    <Typography>celestil_stressed</Typography>
                                    <Typography>- 5 minutes ago</Typography>
                                </Box>
                            </Box>
                            <Typography>
                                03:46 fuckinn''" Eminence in
                                shadow vibe
                            </Typography>
                            <Typography sx={{
                                display: 'flex',
                                gap: '.5rem',
                                alignItems: 'center',
                                color: '#FFDD95'
                            }}><Description/>Am I Actually the Strongest?</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '1rem',
                            color: 'white',
                            p: '1rem',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
                            borderRadius: '.75rem',
                            minWidth: '280px',
                            maxWidth: '280px',
                        }}>
                            <Box sx={{display: 'flex', gap: '1rem'}}>
                                <Avatar alt="Remy Sharp" src="/cover.png"/>
                                <Box>
                                    <Typography>celestil_stressed</Typography>
                                    <Typography>- 5 minutes ago</Typography>
                                </Box>
                            </Box>
                            <Typography>
                                03:46 fuckinn''" Eminence in
                                shadow vibe
                            </Typography>
                            <Typography sx={{
                                display: 'flex',
                                gap: '.5rem',
                                alignItems: 'center',
                                color: '#FFDD95'
                            }}><Description/>Am I Actually the Strongest?</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                    Trending
                </Typography>
                <Box sx={{display: 'flex', gap: '1rem'}}>
                    <Box sx={{display: 'flex', gap: '1.25rem', flexGrow: 1}}>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'end', gap: '.5rem'}}>
                                <Typography sx={{
                                    textOrientation: 'mixed',
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    color: 'white'
                                }}>One Piece</Typography>
                                <Typography sx={{color: '#FFDD95'}}>01</Typography>
                            </Box>
                            <Link to={'details'}>
                                <CardMedia component={'img'} image={"/cover.png"}
                                           sx={{width: '10rem', height: '14rem'}}></CardMedia>
                            </Link>
                        </Box>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'end', gap: '.5rem'}}>
                                <Typography sx={{
                                    textOrientation: 'mixed',
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    color: 'white'
                                }}>One Piece</Typography>
                                <Typography sx={{color: '#FFDD95'}}>02</Typography>
                            </Box>
                            <Link to={'details'}>
                                <CardMedia component={'img'} image={"/cover.png"}
                                           sx={{width: '10rem', height: '14rem'}}></CardMedia>
                            </Link>
                        </Box>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'end', gap: '.5rem'}}>
                                <Typography sx={{
                                    textOrientation: 'mixed',
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    color: 'white'
                                }}>One Piece</Typography>
                                <Typography sx={{color: '#FFDD95'}}>03</Typography>
                            </Box>
                            <Link to={'details'}>
                                <CardMedia component={'img'} image={"/cover.png"}
                                           sx={{width: '10rem', height: '14rem'}}></CardMedia>
                            </Link>
                        </Box>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'end', gap: '.5rem'}}>
                                <Typography sx={{
                                    textOrientation: 'mixed',
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    color: 'white'
                                }}>One Piece</Typography>
                                <Typography sx={{color: '#FFDD95'}}>04</Typography>
                            </Box>
                            <Link to={'details'}>
                                <CardMedia component={'img'} image={"/cover.png"}
                                           sx={{width: '10rem', height: '14rem'}}></CardMedia>
                            </Link>
                        </Box>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'end', gap: '.5rem'}}>
                                <Typography sx={{
                                    textOrientation: 'mixed',
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    color: 'white'
                                }}>One Piece</Typography>
                                <Typography sx={{color: '#FFDD95'}}>05</Typography>
                            </Box>
                            <Link to={'details'}>
                                <CardMedia component={'img'} image={"/cover.png"}
                                           sx={{width: '10rem', height: '14rem'}}></CardMedia>
                            </Link>
                        </Box>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'end', gap: '.5rem'}}>
                                <Typography sx={{
                                    textOrientation: 'mixed',
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    color: 'white'
                                }}>One Piece</Typography>
                                <Typography sx={{color: '#FFDD95'}}>06</Typography>
                            </Box>
                            <Link to={'details'}>
                                <CardMedia component={'img'} image={"/cover.png"}
                                           sx={{width: '10rem', height: '14rem'}}></CardMedia>
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                        <Box sx={{
                            background: 'rgba(255, 255, 255, 0.10)',
                            color: 'white',
                            borderRadius: '.625rem',
                            width: '2.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexBasis: '50%'
                        }}>
                            <ArrowForwardIos/>
                        </Box>
                        <Box sx={{
                            background: 'rgba(255, 255, 255, 0.10)',
                            color: 'white',
                            borderRadius: '.625rem',
                            width: '2.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexBasis: '50%'
                        }}>
                            <ArrowBackIosNew/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', gap: '1rem'}}>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem', flexBasis: '25%'}}>
                    <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>Top Airing</Typography>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem', color: '#FFDD95'}}>View
                        more<ArrowForwardIos/></Typography>
                </Box>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem', flexBasis: '25%'}}>
                    <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>Most Popular</Typography>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem', color: '#FFDD95'}}>View
                        more<ArrowForwardIos/></Typography>
                </Box>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem', flexBasis: '25%'}}>
                    <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>Most Favorite</Typography>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem', color: '#FFDD95'}}>View
                        more<ArrowForwardIos/></Typography>
                </Box>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem', flexBasis: '25%'}}>
                    <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>Latest Completed</Typography>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <ListItem enableAdd={false}/>
                    <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem', color: '#FFDD95'}}>View
                        more<ArrowForwardIos/></Typography>
                </Box>
            </Box>
            <Box sx={{display: 'flex', gap: '1rem'}}>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem', flexGrow: 1}}>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                        <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                            Latest Episode
                        </Typography>
                        <ListingContainer qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
                    </Box>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                        <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                            New On Myself
                        </Typography>
                        <ListingContainer qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem', flexBasis: '25%'}}>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                        <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                            Genres
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '.75rem',
                            background: 'rgba(255, 255, 255, 0.10)',
                            p: '1rem'
                        }}>
                            <Box sx={{display: 'flex', flexFlow: 'wrap', gap: '1rem'}}>
                                {genreList}
                            </Box>
                            <Button variant={'contained'}
                                    sx={{background: 'rgba(255, 255, 255, 0.10)', color: 'white'}} component={Link}
                                    to={'search'}>Show more</Button>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem'}}>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Typography variant="h6" component="h6" sx={{flexGrow: 1, color: '#FFDD95'}}>
                                Top 10
                            </Typography>
                            <ButtonGroup variant="contained">
                                <Button sx={{
                                    background: '#FFDD95',
                                    color: 'black',
                                    borderColor: 'unset !important'
                                }}>Today</Button>
                                <Button sx={{background: '#FFFFFF1A', borderColor: 'unset !important'}}>Week</Button>
                                <Button sx={{background: '#FFFFFF1A', borderColor: 'unset !important'}}>Month</Button>
                            </ButtonGroup>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            background: '#343434',
                            padding: '0 16px',
                            paddingBottom: '16px'
                        }}>
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home