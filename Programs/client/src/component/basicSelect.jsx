import * as React from 'react';

// mui import
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


// function basic select
export default function BasicSelect({menuItems, label, onChange}) {
    const [value, setValue] = React.useState();


    const handleChange = (event) => {
        setValue(event.target.value);
        if(onChange) {
            onChange(event.target.value); // send value to parents
        }
    };

      
    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="dynamic-select-label">{label}</InputLabel>
            <Select
              labelId="dynamic-select-label"
              id="dynamic-select"
              value={value}
              label={label}
              onChange={handleChange}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
    );
    
}