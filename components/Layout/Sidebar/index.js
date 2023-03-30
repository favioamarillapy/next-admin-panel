import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { DRAWER_WIDTH } from '@/constants/constants';
import NextJsIcon from '@/components/Icons/NextJs';

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
                {open && <NextJsIcon width={80} color='#fff' />}
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon sx={{ color: '#fff' }} />
                </IconButton>
            </DrawerHeader>

            <List
                sx={{
                    background: '#28243d',
                    color: '#fff',
                    height: '100vh',
                }}
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Users'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}
