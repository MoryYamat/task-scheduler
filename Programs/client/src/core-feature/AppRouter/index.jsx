import * as react from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// sideBar import
import SideBar from '../sideBar/index'

//project import
import ProjectPage from '../projectEditingFeature/index';
import TaskPage from '../taskEditingFeature/index';
import SchedulePage from '../scheduleEditFeature/index';
import DataPage from '../plotData/index';

import { Box } from '@mui/material';

export default function AppRouter() {
    return (
        <Router>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <SideBar />
                <Box
                    sx={{
                        flexGrow: 1,

                    }}
                >
                    <Routes>
                        <Route path='/project' element={<ProjectPage />} />
                        <Route path='/task' element={<TaskPage />} />
                        <Route path='/schedule' element={<SchedulePage />} />
                        <Route path='/data' element={<DataPage />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};