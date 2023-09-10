import {Box, Card, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {ClosedCaption, FiberManualRecord, Mic} from "@mui/icons-material";

const ListingItem = () => {

    return (
        <Box sx={{display: 'flex', flexFlow: 'column', gap: '.5rem', color: 'white'}}>
            <Card sx={{
                width: 1, display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
                <Link to={`/details`}>
                    <Box sx={{position: 'relative'}}>
                        <CardMedia
                            component="img"
                            image={"/cover.png"}
                            alt={"Pet Image"}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: 1,
                                color: '#FFDD95',
                                padding: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                            }}
                        >
                            <Box sx={{display: 'flex', gap: '.5rem', alignItems: 'center', fontSize: '.75rem'}}>
                                <Box sx={{display: 'flex', gap: '.25rem'}}>
                                    <Box sx={{
                                        background: '#B0E3AF',
                                        padding: '.25rem .35rem',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        borderRadius: '4px 0 0 4px',
                                    }}><ClosedCaption sx={{fontSize: '.75rem'}}/>5</Box>
                                    <Box sx={{
                                        background: '#E3B5CD',
                                        padding: '.25rem .35rem',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                    }}><Mic sx={{fontSize: '.75rem'}}/>3</Box>
                                    <Box sx={{
                                        background: '#EEEEEE33',
                                        padding: '.25rem .35rem',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        borderRadius: '0 4px 4px 0',
                                    }}>12</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </Card>
            <Typography variant="subtitle1" component="h2" sx={{margin: '0 12px'}}>
                Sweet Reincarnation
            </Typography>
            <Box sx={{display: 'flex', gap: '.25rem', alignItems: 'center'}}>
                <Typography variant="subtitle2">
                    TV
                </Typography>
                <FiberManualRecord sx={{color:'white', fontSize: '.5rem'}}/>
                <Typography variant="subtitle2">
                    23m
                </Typography>
            </Box>

        </Box>
    )
}

export default ListingItem