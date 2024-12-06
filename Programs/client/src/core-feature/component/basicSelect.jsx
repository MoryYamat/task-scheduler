import * as react from 'react';

import { useState } from 'react';


// mui import
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ name, props }) {
    const [projectId, setProjectId] = useState('');

    const handleChange = (event) => {
        setProjectId(event.target.value);
    }

    return (
        <Box sx={{
            m: 1,
            minWidth: '120px',
            maxWidth: '200px'
        }}>
            <FormControl fullWidth>
                <InputLabel id="basic-select-label">{name}</InputLabel>
                <Select
                    labelid="basic-select-label"
                    id="basic-select"
                    value={projectId}
                    label={name}
                    onChange={handleChange}
                >
                    {/* Display elements as many as the number of items */}
                    {
                        props.map((props) => (
                            <MenuItem value={props.ID}>{props.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
};
