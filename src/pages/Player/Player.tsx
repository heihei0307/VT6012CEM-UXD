import {
    Avatar,
    Box,
    Breadcrumbs,
    Button,
    Card,
    CardMedia,
    IconButton,
    InputAdornment,
    Link,
    Paper,
    SnackbarContent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {
    Add,
    ArrowDropDown,
    Close,
    ClosedCaption,
    FiberManualRecord,
    ImportExport,
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight,
    Mic,
    PlayArrow,
    PlayCircle,
    Reply,
    Search,
    SettingsOverscan,
    ThumbDownOffAlt,
    ThumbUpOffAlt
} from "@mui/icons-material";
import ListItem from "../../components/ListAnime/ListItem";
import ListingContainer from "../../components/Listing/ListingContainer";
import {ChangeEvent, useState} from "react";


const Player = () => {
    const [activeEp, setActiveEp] = useState(0)
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
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (!isNaN(+value) && +value - 1 < 4)
            setActiveEp(+value - 1)
        else
            setActiveEp(0)
    }
    return (
        <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem'}}>
            <Box sx={{display: 'flex', flexFlow: 'column', gap: '1rem'}}>
                <Breadcrumbs
                    separator={<FiberManualRecord sx={{fontSize: '.5rem'}}/>}
                    aria-label="breadcrumb"
                    sx={{color: 'white'}}
                >
                    {breadcrumbs}
                </Breadcrumbs>
                <Box sx={{display: 'flex', gap: '1rem'}}>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '1rem',
                            width: '18.75rem',
                            background: '#121315'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                                p: '.75rem 1rem',
                                color: 'white'
                            }}>
                                <Typography sx={{fontSize: '.75rem'}}>List of episodes:</Typography>
                                <TextField size={'small'}
                                           InputProps={{
                                               startAdornment: (
                                                   <InputAdornment position="start">
                                                       <Search sx={{color: 'white'}}/>
                                                   </InputAdornment>
                                               ),
                                           }}
                                           variant={'outlined'}
                                           label={'Number of Ep'}
                                           focused
                                           onChange={handleChange}
                                           sx={{color: 'white'}}
                                ></TextField>
                            </Box>
                            <Box sx={{display: 'flex', flexFlow: 'column'}}>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '.5rem',
                                    borderLeft: '.25rem solid',
                                    borderLeftColor: activeEp === 0 ? '#FFDD95' : 'translate',
                                    p: '.75rem',
                                    color: activeEp === 0 ? '#FFDD95' : '#757575',
                                    background: activeEp === 0 ? '#757575' : 'translate',
                                    cursor: 'pointer',
                                }} onClick={() => setActiveEp(0)}>
                                    <Typography>1</Typography>
                                    <Typography sx={{flexGrow: 1}}>idden Inventory</Typography>
                                    <PlayCircle sx={{display: activeEp === 0 ? 'block' : 'none'}}/>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '.5rem',
                                    borderLeft: '.25rem solid',
                                    borderLeftColor: activeEp === 1 ? '#FFDD95' : 'translate',
                                    p: '.75rem',
                                    color: activeEp === 1 ? '#FFDD95' : '#757575',
                                    background: activeEp === 1 ? '#757575' : '#242428',
                                    cursor: 'pointer',
                                }} onClick={() => setActiveEp(1)}>
                                    <Typography>2</Typography>
                                    <Typography sx={{flexGrow: 1}}>idden Inventory</Typography>
                                    <PlayCircle sx={{display: activeEp === 1 ? 'block' : 'none'}}/>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '.5rem',
                                    borderLeft: '.25rem solid',
                                    borderLeftColor: activeEp === 2 ? '#FFDD95' : 'translate',
                                    p: '.75rem',
                                    color: activeEp === 2 ? '#FFDD95' : '#757575',
                                    background: activeEp === 2 ? '#757575' : 'translate',
                                    cursor: 'pointer',
                                }} onClick={() => setActiveEp(2)}>
                                    <Typography>3</Typography>
                                    <Typography sx={{flexGrow: 1}}>idden Inventory</Typography>
                                    <PlayCircle sx={{display: activeEp === 2 ? 'block' : 'none'}}/>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '.5rem',
                                    borderLeft: '.25rem solid',
                                    borderLeftColor: activeEp === 3 ? '#FFDD95' : 'translate',
                                    p: '.75rem',
                                    color: activeEp === 3 ? '#FFDD95' : '#757575',
                                    background: activeEp === 3 ? '#757575' : '#242428',
                                    cursor: 'pointer',
                                }} onClick={() => setActiveEp(3)}>
                                    <Typography>4</Typography>
                                    <Typography sx={{flexGrow: 1}}>idden Inventory</Typography>
                                    <PlayCircle sx={{display: activeEp === 3 ? 'block' : 'none'}}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            background: '#08090B',
                            flexGrow: 1,
                            p: '.5rem 1rem',
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '.75rem'
                        }}>
                            <Box>
                                <Box
                                    sx={{
                                        '& > :not(style)': {
                                            width: 1,
                                        },
                                        position: 'relative',
                                        paddingBottom: '56.25%'
                                    }}
                                >
                                    <Paper sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 1,
                                        height: 1,
                                    }} elevation={3}/>
                                </Box>
                                <Box sx={{color: 'white', display: 'flex', alignItems: 'center', p: '1rem'}}>
                                    <Typography sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.25rem'
                                    }}><SettingsOverscan/>Expand</Typography>
                                    <Box sx={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                        <Typography sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '.25rem'
                                        }}><KeyboardDoubleArrowLeft/>Prev</Typography>
                                        <Typography sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '.25rem'
                                        }}>Next<KeyboardDoubleArrowRight/></Typography>
                                        <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem'}}><Add/>Add
                                            to List</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Stack>
                                <SnackbarContent
                                    message={'Estimated the next episode will come at 8/10/2023, 5:00:00 PM'}
                                    action={
                                        <>
                                            <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                sx={{p: 0.5}}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </>
                                    }
                                    security={'info'}
                                />
                            </Stack>
                            <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem'}}>
                                <Typography sx={{color: 'white'}}>Watch more seasons of this anime</Typography>
                                <Box sx={{display: 'flex', gap: '.5rem'}}>
                                    <Card sx={{
                                        maxWidth: 345,
                                        borderRadius: '8px',
                                        border: '1px solid',
                                        borderColor: season === 0 ? '#FFDD95' : '',
                                        cursor: 'pointer'
                                    }} onClick={() => {
                                        setSeason(0)
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
                                                }}
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
                                        borderColor: season === 1 ? '#FFDD95' : '',
                                        cursor: 'pointer'
                                    }} onClick={() => {
                                        setSeason(1)
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
                                                }}
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
                                        borderColor: season === 2 ? '#FFDD95' : '',
                                        cursor: 'pointer'
                                    }} onClick={() => {
                                        setSeason(2)
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
                                                }}
                                            >
                                                <Typography variant="body2" sx={{textAlign: 'center'}}>
                                                    Jujutsu Kaisen 2: The Movie
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        gap: '1rem',
                        color: 'white',
                        minWidth: '25rem',
                        maxWidth: '25rem'
                    }}>
                        <Card>
                            <CardMedia component={'img'} image={"/cover.png"}></CardMedia>
                        </Card>
                        <Box sx={{display: 'flex', gap: '.5rem', alignItems: 'center'}}>
                            Home
                            <FiberManualRecord sx={{fontSize: '.5rem'}}/>
                            TV
                            <FiberManualRecord sx={{fontSize: '.5rem'}}/>
                            <Typography sx={{color: '#AAAAAA'}}>Jujutsu Kaisen {season}nd Season</Typography>
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
                            <Button sx={{borderRadius: '20px', background: '#FFDD95', color: 'black'}}
                                    variant={'contained'} startIcon={<PlayArrow/>}>Watch
                                now</Button>
                            <Button sx={{borderRadius: '20px', background: 'white', color: 'black'}}
                                    variant={'contained'} startIcon={<Add/>}>Add to
                                List</Button>
                        </Box>
                        <Typography sx={{maxWidth: '300px'}}>
                            Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji
                            Itadori spends
                            his days at either the clubroom or the hospital, where he visits his bedridden grandfather.
                            However, this
                            leisurely lifestyle soon takes a turn for the stran...
                            <Button sx={{color: 'white'}}>+More</Button>
                        </Typography>
                        <Typography sx={{maxWidth: '300px'}}>
                            AniWatch is the best site to watch Jujutsu Kaisen 2nd Season SUB online, or you can even
                            watch
                            Jujutsu Kaisen 2nd Season DUB in HD quality. You can also find MAPPA anime on AniWatch
                            website.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', gap: '1rem'}}>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem', flexGrow: 1}}>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem'}}>
                        <Typography sx={{color: '#FFDD95'}}>Comments</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '.75rem',
                            background: '#FFFFFF1A',
                            color: 'white',
                            p: '32px'
                        }}>
                            <Box sx={{display: 'flex', gap: '.75rem'}}>
                                <Box sx={{flexGrow: 1, display: 'flex', gap: '1.5rem'}}>
                                    <Box sx={{borderRight: '1px solid #444444', paddingRight: '1.5rem'}}>
                                        <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem'}}>Episode
                                            1<ArrowDropDown/></Typography>
                                    </Box>
                                    <Typography>12,071 Comments</Typography>
                                </Box>
                                <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem'}}>Sort
                                    by<ImportExport/> </Typography>
                            </Box>
                            <Avatar alt="Remy Sharp" src="/cover.png"/>
                            <Typography>You must be login to post a comment</Typography>
                            <TextField
                                id="filled-multiline-static"
                                multiline
                                rows={3}
                                variant="filled"
                            />
                            <Box sx={{display: 'flex', gap: '1rem'}}>
                                <Avatar alt="Remy Sharp" src="/cover.png"/>
                                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem'}}>
                                    <Box sx={{display: 'flex', gap: '.75rem'}}>
                                        <Typography>Chopchopchopper</Typography>
                                        <Typography>an hour ago</Typography>
                                    </Box>
                                    <Typography>so where is the storyline connecting??</Typography>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
                                        <Typography sx={{display: 'flex', alignItems: 'center', gap: '.25rem'}}><Reply/>Reply</Typography>
                                        <Typography
                                            sx={{display: 'flex', alignItems: 'center'}}><ThumbUpOffAlt/></Typography>
                                        <Typography
                                            sx={{display: 'flex', alignItems: 'center'}}><ThumbDownOffAlt/></Typography>
                                    </Box>
                                    <Typography sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.25rem',
                                        color: '#FFDD95'
                                    }}><ArrowDropDown/>View 1 replies</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '.25rem',
                                color: '#FFDD95'
                            }}><ArrowDropDown/>View 1 replies</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem'}}>
                        <Typography sx={{color: '#FFDD95'}}>Recommended for you</Typography>
                        <ListingContainer qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexFlow: 'column', gap: '.75rem', minWidth: '25rem', maxWidth: '25rem'}}>
                    <Typography sx={{color: '#FFDD95'}}>Most Popular</Typography>
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

export default Player