import * as react from 'react';

//mui import
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Button from '@mui/material/Button';

//project import
import BasicSelect from '../component/basicSelect';

// The data will be temporarily stored as an object.


// setting project period
function BasicDatePicker({ label }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker label={label} />
            </DemoContainer>
        </LocalizationProvider>
    );
};

// Project Data
const projectData = [
    {
        name: 'the first project',
        id: 1,
        type: 'Dev',
        startDate: 2020,
        endDate: 2021,
        progressionRate: 50,// calc
    },
    {
        name: 'the gameDev',
        id: 2,
        type: 'Dev',
        startDate: 2020,
        endDate: 2021,
        progressionRate: 50,
    },
]

// Project Type Data
const projectType = [
    {
        name: 'Design and Development', // Determine the project process
        ID: 1
    },
    {
        name: 'Plan',
        ID: 2
    },
    {
        name: 'Optimization',
        ID: 3
    },

];


// Project Editing Feature
function Core({ props }) {
    return (

        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    m: 1,
                    width: '25ch',
                }
            }}
            noValidate
            autoCompolete="off"
        >
            <TextField
                id="ProjectName"
                label="Project Name"
                variant="outlined"
            />
            <BasicSelect
                name="Project Type"
                props={props}
            />

        </Box>

    );
}

export default function ProjectEditing() {
    return (
        <Box
            sx={{
                mb: 1,
            }}
        >
            <Typography>
                <Box
                    sx={{
                        textAlign: 'center',
                        mt: 1,
                        alignItems: 'center',
                    }}
                >
                    PROJECT EDIT
                </Box>
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',                    
                }}>
                <Core props={projectType} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <BasicDatePicker label="START DATE" />
                <Typography>
                    <Box sx={{mx: 2}}>━</Box>
                </Typography>
                <BasicDatePicker label="END DATE" />
            </Box>

            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                    mb: 2
                }}
            >
            <Button variant="contained">DONE</Button>
            </Box>
        </Box>

    );
};