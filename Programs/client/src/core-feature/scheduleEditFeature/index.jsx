import * as react from 'react';

// mui import
import Box from '@mui/material/Box';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import Typography from '@mui/material/Typography';

// project import
import BasicSelect from '../component/basicSelect';

// Task Type Data
const TaskType = [
    {
        name: 'Design', // Determine the project process
        ID: 1
    },
    {
        name: 'Plan',
        ID: 2
    },
    {
        name: 'Implement',
        ID: 3
    },

];


// Set Time 
function SetTime({name}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
                <TimePicker label={name} />
            </DemoContainer>
        </LocalizationProvider>

    );
}



// return
export default function ScheduleEditing() {
    return (
        <Box>
            <Typography>
                <Box
                    sx={{
                        textAlign: 'center',
                        my: 1,
                        alignItems: 'center',
                    }}
                >
                    SCHEDULE EDIT
                </Box>
            </Typography>
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <BasicSelect name={'Task'} props={TaskType} />
            </Box>


            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <SetTime name={'START TIME'} />
            </Box>
            
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 1
                }}
            >
                <SetTime name={'END TIME'} />
            </Box>
        </Box>


    );
};