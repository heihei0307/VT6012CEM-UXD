import {Box, Button, CardMedia, IconButton, Typography} from "@mui/material";
import {Reddit, Telegram, Twitter} from "@mui/icons-material";
import {Link} from "react-router-dom";

const CustomFooter = () => {
    return (
        <Box sx={{mt: 2, display: 'flex', flexFlow: 'column', gap: 1}}>
            <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
                pb: 2
            }}>
                <Link to={''}>
                    <CardMedia sx={{width: '5rem'}} component={'img'} image={"/icon.png"}/>
                </Link>
                <Box sx={{flexGrow: 1}}/>
                <Typography sx={{color: '#FFF', opacity: .5, cursor: 'pointer', borderLeft: '2px solid rgba(255, 255, 255, 0.15)', pl: 2}}>Join now</Typography>
                <Box sx={{display: 'flex', gap: 1}}>
                    <IconButton size="small" sx={{background: '#08C', color: 'white'}}>
                        <Telegram fontSize="inherit"/>
                    </IconButton>
                    <IconButton size="small" sx={{background: '#FF3C1F', color: 'white'}}>
                        <Reddit fontSize="inherit"/>
                    </IconButton>
                    <IconButton size="small" sx={{background: '#1D9BF0', color: 'white'}}>
                        <Twitter fontSize="inherit"/>
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <Button variant="text" size={'small'} sx={{color: '#FFF', opacity: .5}}>Terms of service</Button>
                <Button variant="text" size={'small'} sx={{color: '#FFF', opacity: .5}}>DMCA</Button>
                <Button variant="text" size={'small'} sx={{color: '#FFF', opacity: .5}}>Contact</Button>
            </Box>
            <Box sx={{display: 'flex', color: '#FFF', opacity: .5}}>
                <Typography variant={'caption'} sx={{flexGrow: 1}}>
                    Myself.BBS does not store any files on our server, we only linked to the media which is hosted on
                    3rd party services.
                </Typography>
                <Typography variant={'caption'}>
                    © Myself.bbs. All rights reserved.
                </Typography>
            </Box>
        </Box>
    )
}

export default CustomFooter