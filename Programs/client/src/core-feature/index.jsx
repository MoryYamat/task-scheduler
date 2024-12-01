import * as react from 'react';

import {useState} from 'react';

// mui import
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function BasicSelect() {
    const [projectId,setProjectId] = useState('');

    const handleChange = (event) => {
        setProjectId(event.target.value);
    }

    return (
        <Box sx={{m: 1, 
                 minWidth: '120px',
                 maxWidth: '200px'}}>
            <FormControl fullWidth>
                <InputLabel id="basic-select-label">ProjectID</InputLabel>
                <Select
                    labelid="basic-select-label"
                    id="basic-select"
                    value={projectId}
                    label="ProjectId"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>A</MenuItem>
                    <MenuItem value={2}>B</MenuItem>
                    <MenuItem value={3}>C</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}


export default function CoreFeature() {
    return (
        <>
            <Box sx={{display: 'flex',
                      justifyContent: 'center',

            }}>
                <BasicSelect />
                <BasicSelect />
                <BasicSelect />

            </Box>
        </>
    );
}
