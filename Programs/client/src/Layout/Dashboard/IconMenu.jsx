import { Link } from 'react-router-dom';



// mui import
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

// assets
import BarChartIcon from '@mui/icons-material/BarChart';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';

function MenuHeader() {
    return (
        <Box 
            sx={{
                width: '100%',          // 横幅をメニュー全体に
                padding: 2,             // 上下左右に余白
                color: 'white',         // テキストを白く
                boxShadow: 1,           // 軽い影を追加
            }}
        >
            <Stack 
                direction={'row'}
                spacing={2}
                alignItems={'center'}
            >
                <MenuIcon />
                <Typography 
                    fontWeight={"bold"}
                    sx={{
                        padding: 2
                    }
                    }>
                    SCHEDULE APP
                </Typography>
        </Stack>


        </Box>

    );
}


export default function IconMenu() {
    return (
      <Paper sx={{ width: 260, maxWidth: '100%',
        height:'100vh',
        display: 'flex',
        flexDirection: 'column',

      }}>
        <MenuHeader />

        <Divider />
        <MenuList>
          <MenuItem component={Link} to="/">
            <ListItemIcon>
              <BarChartIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem component={Link} to="/schedule">
            <ListItemIcon>
              <EditCalendarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Schedule</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem component={Link} to="/project">
            <ListItemIcon>
              <AccountTreeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Project</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    );
}
