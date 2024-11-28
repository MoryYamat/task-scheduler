import * as React from 'react';
import { Outlet } from "react-router-dom";



// mui import
import Box from '@mui/material/Box';

// project import 
import IconMenu from './IconMenu'







// create dashboardLayout
export default function DashboardLayout() {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
        }}
      >
        <Box>
          <IconMenu />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Box>

      </Box>

    )
}