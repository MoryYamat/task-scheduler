//import logo from './logo.svg';
import './App.css';

//project import 
//import ProjectEditingFeature from './core-feature/projectEditingFeature/index';
//import TaskEditingFeature from './core-feature/taskEditingFeature/index';
import CoreFeature from './core-feature/index';

//mui import
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './core-feature/sideBar/index';

//project import
import ProjectPage from './core-feature/projectEditingFeature/index';
import TaskPage from './core-feature/taskEditingFeature/index';
import SchedulePage from './core-feature/scheduleEditFeature/index';
import DataPage from './core-feature/plotData/index';

import AppRouter from './core-feature/AppRouter/index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>

        {/*コア機能*/}
        {/* <CoreFeature /> */}
        {/* <ProjectEditingFeature />
        <TaskEditingFeature /> */}
      </Box>

      <AppRouter />

      {/* <Router>
            <div style={{ display: 'flex' }}>
              <SideBar />
                <main style={{ flexGrow: 1, padding: '20px' }}>
                    <Routes>
                      <Route path='/project' element={<ProjectPage />} />
                      <Route path='/task' element={<TaskPage />} />
                      <Route path='/schedule' element={<SchedulePage />} />
                      <Route path='/data' element={<DataPage />} />
                    </Routes>
                </main>
            </div>
        </Router> */}
    </ThemeProvider>
  );
}