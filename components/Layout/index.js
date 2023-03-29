import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { DRAWER_WIDTH } from '@/constants/constants';


export default function MainLayout({ children }) {

    const drawerWidth = DRAWER_WIDTH;
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Navbar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                drawerWidth={drawerWidth}
            />

            <Sidebar
                open={open}
                handleDrawerClose={handleDrawerClose}
                drawerWidth={drawerWidth}
            />

            <Box component="main" sx={{ flexGrow: 1, px: 4, paddingTop: 10 }}>
                {children}
            </Box>
        </Box>
    );
}
