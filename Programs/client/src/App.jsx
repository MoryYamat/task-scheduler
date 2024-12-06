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
        <CoreFeature />
        {/* <ProjectEditingFeature />
        <TaskEditingFeature /> */}
      </Box>
    </ThemeProvider>
  );
}