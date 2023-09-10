import {Box, CssBaseline, styled, Toolbar} from "@mui/material";
import {useState} from "react";
import CustomAppBar from "../CustomAppBar/CustomAppBar";
import {Outlet} from "react-router-dom";
import CustomFooter from "../CustomFooter/CustomFooter";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const MainLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    return (
        <Box sx={{display: 'flex', minHeight: '100vh', background: '#242428'}}>
            <CssBaseline/>
            <CustomAppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
            <Main sx={{flexGrow: 1, p: {xs: 0, sm: 2, md: 3}, pt: {xs: 3, sm: 3, md: 3}}} open={drawerOpen}>
                <Toolbar/>
                <Outlet/>
                <CustomFooter/>
            </Main>

        </Box>
    )
}
export default MainLayout