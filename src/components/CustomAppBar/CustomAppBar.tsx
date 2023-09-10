import {
    AppBar,
    Box,
    Button,
    CardMedia,
    IconButton, InputBase,
    Menu,
    MenuItem,
    TextField, ToggleButton, ToggleButtonGroup,
    Toolbar,
    Typography
} from "@mui/material";
import {Login, Menu as MenuIcon, QuestionAnswer, Search, Shuffle} from "@mui/icons-material";
import {Dispatch, MouseEvent, SetStateAction, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

interface Props {
    drawerOpen: boolean
    setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const CustomAppBar = ({drawerOpen, setDrawerOpen}: Props) => {
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
    return (
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, background: '#242428'}}>
            <Toolbar sx={{gap: '1rem'}}>
                <Link to={''}>
                    <CardMedia sx={{width: '5rem'}} component={'img'} image={"/icon.png"}></CardMedia>
                </Link>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '.75rem', background: 'white', p:'.25rem .5rem'}}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search anime..."
                        inputProps={{ 'aria-label': 'Search anime...' }}
                    />
                    <Search sx={{color: '#111'}}/>
                    <Button component={Link} to={'search'} variant={'contained'} size={'small'} sx={{background: '#757575'}}>Filter</Button>
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{display: 'flex', gap: 1.5, alignItems: 'center'}}>
                    <Box sx={{display:'flex', flexFlow:'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                        <Shuffle sx={{color:'#FFDD95'}}/>
                        <Typography>Random</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexFlow:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Box sx={{display:'flex'}}>
                            <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', background: '#FFDD95', color: '#111', borderRadius: '.1875rem 0rem 0rem .1875rem', p: '0 .25rem', cursor: 'pointer'}}>EN</Box>
                            <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', background: '#4D5059', borderRadius: '0 .1875rem .1875rem 0', p: '0 .25rem', cursor: 'pointer'}}>JP</Box>
                        </Box>
                        <Typography>Anime Name</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexFlow:'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                        <QuestionAnswer sx={{color:'#FFDD95'}}/>
                        <Typography>Community</Typography>
                    </Box>
                    <Box>
                        <Button variant={'contained'} sx={{color: "black", background: '#FFDD95'}} size={"small"}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar