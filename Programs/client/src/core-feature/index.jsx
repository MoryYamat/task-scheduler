import * as react from 'react';


// mui import
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// project import
import ProjectEditingFeature from './projectEditingFeature/index';
import TaskEditingFeature from './taskEditingFeature/index';
import ScheduleEditFeature from './scheduleEditFeature/index';
import PlotData from './plotData/index';

import SideBar from './sideBar/index';

export default function CoreFeature() {

    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <SideBar />
            <Box
                sx={{
                    width: '100%'
                }}
            >
                {/* <ProjectEditingFeature />
                <Divider />
                <TaskEditingFeature />
                <Divider />
                <ScheduleEditFeature />
                <Divider />
                <PlotData /> */}
            </Box>

        </Box>
    )
}