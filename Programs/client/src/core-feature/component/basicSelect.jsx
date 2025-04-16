import * as react from 'react';

import { useState } from 'react';


// mui import
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ name, props, onChange }) {
    const [projectType, setProjectType] = useState('');

    // Set the changed value
    const handleChange = (event) => {
        const value = event.target.value;
        setProjectType(event.target.value);
        //console.log(`ProjectType changed to ${event.target.value}`);
        onChange(value);
    }

    return (
        <Box sx={{
            m: 1,
            minWidth: '180px',
            maxWidth: 'auto'
        }}>
            <FormControl fullWidth>
                <InputLabel id="basic-select-label">{name}</InputLabel>
                <Select
                    labelid="basic-select-label"
                    id="basic-select"
                    value={projectType}
                    label={name}
                    // Nested callback functions
                    onChange={handleChange}
                    required
                >
                    {/* Display elements as many as the number of items */}
                    {
                        props.map((props) => (
                            <MenuItem value={props.name}>{props.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
};


// function selector({name, id, props}) {
//     const [projectTypeId, setProjectTypeId] = useState('');
//     const [projectType, setProjectType] = useState('');

//     const handleChange = (event) => {
//         setProjectTypeId(event.target.id);
//         setProjectType(event.target.value);
//         console.log(event.target.id);
//         console.log(event.target.value);
//     }

// }