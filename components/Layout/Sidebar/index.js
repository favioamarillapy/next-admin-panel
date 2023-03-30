import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DRAWER_WIDTH } from '@/constants/constants';
import { Drawer } from '@mui/material';
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
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon sx={{ color: '#fff' }} /> : <MailIcon sx={{ color: '#fff' }} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
