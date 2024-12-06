import * as react from 'react';

//mui import
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// icon import
import AccountTreeIcon from '@mui/icons-material/AccountTree';


export default function SideBar() {
    return (
        <Box
            sx={{
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountTreeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>

    );
}