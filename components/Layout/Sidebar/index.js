import { styled, useTheme } from '@mui/material/styles';
import { Divider, Drawer, Typography } from '@mui/material';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { DRAWER_WIDTH } from '@/constants/constants';
import NextJsIcon from '@/components/Icons/NextJs';
import ActiveLink from './ActiveLink';

const drawerWidth = DRAWER_WIDTH;

const DrawerHeader = styled('div')(({ theme }) => ({
    background: '#28243d',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Sidebar({ open, handleDrawerClose }) {

    const theme = useTheme()

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader
                sx={{
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingLeft: '19px'
                }}
            >
                {
                    open &&
                    <Link href="/">
                        <NextJsIcon width={80} color='#fff' />
                    </Link >
                }
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon sx={{ color: '#fff' }} />
                </IconButton>
            </DrawerHeader>

            <List
                sx={{
                    background: '#28243d',
                    color: '#fff',
                    height: '100vh',
                    paddingRight: 2
                }}
            >
                <ActiveLink activeClassName="menu-item-active" href="/" text="Home">
                    <HomeIcon />
                </ActiveLink>

                <Divider
                    light
                    sx={{
                        "&::before, &::after": {
                            borderColor: "#6E6C86",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            color: "#6E6C86",
                            fontSize: 13,
                            fontWeight: 'bold',
                            margin: theme.spacing(2, 2)
                        }}
                    >
                        PAGES
                    </Typography>
                </Divider>
                <ActiveLink activeClassName="menu-item-active" href="/users" text={'Users'}>
                    <PersonIcon />
                </ActiveLink>
            </List>
        </Drawer >
    )
}
