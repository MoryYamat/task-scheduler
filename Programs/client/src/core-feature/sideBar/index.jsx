import * as react from 'react';

//mui import
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';


// react-router import 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Link} from 'react-router-dom';

// icon import
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventNoteIcon from '@mui/icons-material/EventNote';




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
                        <ListItemButton component={Link} to="/project">
                            <ListItemIcon>
                                <AccountTreeIcon />
                            </ListItemIcon>
                            <ListItemText primary="PROJECT" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/task">
                            <ListItemIcon >
                                <TaskIcon />
                            </ListItemIcon>
                            <ListItemText primary="TASK" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton  component={Link} to="/schedule">
                            <ListItemIcon>
                                <ScheduleIcon />
                            </ListItemIcon>
                            <ListItemText primary="SCHEDULE" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/data">
                            <ListItemIcon>
                                <EventNoteIcon />
                            </ListItemIcon>
                            <ListItemText primary="DATA" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>

    );
}
