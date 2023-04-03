import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { DRAWER_WIDTH } from '@/constants/constants';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const drawerWidth = DRAWER_WIDTH;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
    (({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(12, 4, 0, 4),
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




export default function MainLayout({ children }) {

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        function handleResize() {
            const userAgent =
                typeof window.navigator === "undefined" ? "" : navigator.userAgent;
            const mobile = Boolean(
                userAgent
                    .match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
            );
            setOpen(!mobile);
        }

        window.addEventListener('resize', handleResize)
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Navbar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />

            <Sidebar
                open={open}
                handleDrawerClose={
                    handleDrawerClose}
            />


            <Main open={open}>
                {children}
            </Main>
        </Box>
    );
}