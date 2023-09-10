import {Box, Breadcrumbs, Button, Card, CardMedia, Link, Typography} from "@mui/material";
import {Add, ClosedCaption, FiberManualRecord, Mic, PlayArrow} from "@mui/icons-material";
import ListItem from "../../components/ListAnime/ListItem";
import ListingContainer from "../../components/Listing/ListingContainer";
import {Link as LinkDom} from "react-router-dom";
import {useState} from "react";

const Details = () => {
    const [season, setSeason] = useState(0)
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/search"
        >
            TV
        </Link>,
        <Typography key="3" color="#AAA">
            Watching Jujutsu Kaisen {season}nd Season
        </Typography>,
    ];
    return (
        <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem'}}>
            <Box sx={{background: '#343434', p: '0 90px', m: '0 -24px', display: 'flex'}}>
                <Box sx={{p: '16px 0', flexGrow: 1, display: 'flex', gap: '1rem'}}>
                    <Box>
                        <CardMedia component={'img'} image={"/cover.png"}></CardMedia>
                    </Box>

                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem', color: 'white'}}>
                        <Box sx={{display: 'flex', gap: '.5rem', alignItems: 'center'}}>
                            <Breadcrumbs
                                separator={<FiberManualRecord sx={{fontSize: '.5rem'}}/>}
                                aria-label="breadcrumb"
                                sx={{color: 'white'}}
                            >
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Box>
                        <Typography variant={'h4'} component={'h4'}>Jujutsu Kaisen {season}nd Season</Typography>
                        <Box sx={{display: 'flex', gap: '.5rem', alignItems: 'center'}}>
                            <Box sx={{display: 'flex', gap: '.25rem'}}>
                                <Box sx={{
                                    background: 'white',
                                    padding: '4px 6px',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    borderRadius: '4px 0 0 4px'
                                }}>R</Box>
                                <Box sx={{
                                    background: '#FFDD95',
                                    padding: '4px 6px',
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}>HD</Box>
                                <Box sx={{
                                    background: '#B0E3AF',
                                    padding: '4px 6px',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}><ClosedCaption/>5</Box>
                                <Box sx={{
                                    background: '#E3B5CD',
                                    padding: '4px 6px',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}><Mic/>3</Box>
                            </Box>
                            <FiberManualRecord sx={{fontSize: '.5rem'}}/>
                            TV
                            <FiberManualRecord sx={{fontSize: '.5rem'}}/>
                            24m
                        </Box>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <LinkDom to={'/player'}>
                                <Button sx={{borderRadius: '20px', background: '#FFDD95', color: 'black'}}
                                        variant={'contained'} startIcon={<PlayArrow/>}>Watch
                                    now</Button>
                            </LinkDom>
                            <Button sx={{borderRadius: '20px', background: 'white', color: 'black'}}
                                    variant={'contained'} startIcon={<Add/>}>Add to
                                List</Button>
                        </Box>
                        <Typography sx={{maxWidth: '600px'}}>
                            Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji
                            Itadori spends
                            his days at either the clubroom or the hospital, where he visits his bedridden grandfather.
                            However, this
                            leisurely lifestyle soon takes a turn for the stran...
                            <Button sx={{color: 'white'}}>+More</Button>
                        </Typography>
                        <Typography sx={{maxWidth: '600px'}}>
                            AniWatch is the best site to watch Jujutsu Kaisen {season}nd Season SUB online, or you can
                            even
                            watch
                            Jujutsu Kaisen {season}nd Season DUB in HD quality. You can also find MAPPA anime on
                            AniWatch
                            website.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    background: '#3D3F46',
                    p: '16px 32px',
                    minWidth: '400px',
                    maxWidth: '400px',
                    color: 'white',
                    display: 'flex',
                    flexFlow: 'column',
                    gap: '.75rem'
                }}>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Japanese:</Typography>
                        <Typography>呪術廻戦</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Synonyms:</Typography>
                        <Typography>
                            Sorcery Fight, JJK, Jujutsu Kaisen Season{season},Jujutsu Kaisen {season}nd Season,Jujutsu
                            Kaisen: Hidden
                            Inventory Arc
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Aired:</Typography>
                        <Typography>Jul 6, 2023 to ?</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Premiered:</Typography>
                        <Typography>Summer 2023</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Duration:</Typography>
                        <Typography>24m</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Status:</Typography>
                        <Typography>Currently Airing</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>MAL Score:</Typography>
                        <Typography>8.68</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: '.5rem',
                        alignItems: 'center',
                        borderTop: '1px solid white',
                        borderBottom: '1px solid white',
                        padding: '.5rem 0'
                    }}>
                        <Typography sx={{fontWeight: 'bold'}}>Japanese:</Typography>
                        <Box sx={{display: 'flex', gap: '.25rem'}}>
                            <Box sx={{p: '4px 8px', borderRadius: '20px', border: '1px solid white'}}>TV</Box>
                            <Box sx={{p: '4px 8px', borderRadius: '20px', border: '1px solid white'}}>Movie</Box>
                            <Box sx={{p: '4px 8px', borderRadius: '20px', border: '1px solid white'}}>OVA</Box>
                            <Box sx={{p: '4px 8px', borderRadius: '20px', border: '1px solid white'}}>Special</Box>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Studios:</Typography>
                        <Typography>MAPPA</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '.5rem'}}>
                        <Typography sx={{fontWeight: 'bold'}}>Producers:</Typography>
                        <Typography>Shueisha, TOHO animation, dugout</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', gap: '16px', p: '0 calc(90px - 24px)'}}>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem', flexGrow: 1}}>
                    <Box sx={{display: 'flex', flexFlow: 'column'}}>
                        <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                            More Seasons
                        </Typography>
                        <Box sx={{display: 'flex', gap: '.5rem'}}>
                            <Card sx={{
                                maxWidth: 345,
                                borderRadius: '8px',
                                border: '1px solid',
                                borderColor: season === 0 ? '#FFDD95' : 'translate'
                            }}>
                                <Box sx={{position: 'relative'}}>
                                    <CardMedia
                                        component="img"
                                        image="/div.season-poster.png"
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: 1,
                                            bgcolor: 'rgba(0, 0, 0, 0.64)',
                                            color: season === 0 ? '#FFDD95' : 'white',
                                            padding: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => setSeason(0)}
                                    >
                                        <Typography variant="body2" sx={{textAlign: 'center'}}>
                                            Jujutsu Kaisen 0: The Movie
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                            <Card sx={{
                                maxWidth: 345,
                                borderRadius: '8px',
                                border: '1px solid',
                                borderColor: season === 1 ? '#FFDD95' : 'translate'
                            }}>
                                <Box sx={{position: 'relative'}}>
                                    <CardMedia
                                        component="img"
                                        image="/div.season-poster.png"
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: 1,
                                            bgcolor: 'rgba(0, 0, 0, 0.64)',
                                            color: season === 1 ? '#FFDD95' : 'white',
                                            padding: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => setSeason(1)}
                                    >
                                        <Typography variant="body2" sx={{textAlign: 'center'}}>
                                            Jujutsu Kaisen 1: The Movie
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                            <Card sx={{
                                maxWidth: 345,
                                borderRadius: '8px',
                                border: '1px solid',
                                borderColor: season === 2 ? '#FFDD95' : 'translate'
                            }}>
                                <Box sx={{position: 'relative'}}>
                                    <CardMedia
                                        component="img"
                                        image="/div.season-poster.png"
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: 1,
                                            bgcolor: 'rgba(0, 0, 0, 0.64)',
                                            color: season === 2 ? '#FFDD95' : 'white',
                                            padding: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => setSeason(2)}
                                    >
                                        <Typography variant="body2" sx={{textAlign: 'center'}}>
                                            Jujutsu Kaisen 2: The Movie
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                        <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                            Recommended for you
                        </Typography>
                        <ListingContainer qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexFlow: 'column', minWidth: '400px'}}>
                    <Typography variant="h6" component="h6" sx={{color: '#FFDD95'}}>
                        Most Popular
                    </Typography>
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
    )
}

export default Details