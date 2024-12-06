import * as react from 'react';

import { useState } from 'react';


// mui import
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

// project import
import BasicSelect from '../component/basicSelect';

// temporary project data
const projectProps = [
    {
        name: "max-min",
        ID: 1,
    },
    {
        name: "hello world",
        ID: 2,
    },
    {
        name: "hyper max",
        ID: 3,
    },
    {
        name: "ultra SUN!!!!!!!!!!!!",
        ID: 4,
    },
];

//Varies by project type
const taskProps = [
    {
        name: "design",
        ID: 1,
    },
    {
        name: "implementation",
        ID: 2,
    },
    {
        name: "test",
        ID: 3,
    },
];

// 
const periodProps = [
    {
        name: "A",
        ID: 1,
    },
    {
        name: "B",
        ID: 2,
    },
    {
        name: "C",
        ID: 3,
    },
];

// function BasicSelect({ name, props }) {
//     const [projectId, setProjectId] = useState('');

//     const handleChange = (event) => {
//         setProjectId(event.target.value);
//     }

//     return (
//         <Box sx={{
//             m: 1,
//             minWidth: '120px',
//             maxWidth: '200px'
//         }}>
//             <FormControl fullWidth>
//                 <InputLabel id="basic-select-label">{name}</InputLabel>
//                 <Select
//                     labelid="basic-select-label"
//                     id="basic-select"
//                     value={projectId}
//                     label={name}
//                     onChange={handleChange}
//                 >
//                     {/* Display elements as many as the number of items */}
//                     {
//                         props.map((props) => (
//                             <MenuItem value={props.ID}>{props.name}</MenuItem>
//                         ))
//                     }
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// };

// function MenuItems({props}) {

//     return (
//         createElement(
//             'MenuItem',
//             {value: props.ID},
//             '{props.name}',

//         )
//     );
// };



// Task Editing Screen
export default function CoreFeature() {
    return (
        <>
            <Typography>
                <Box
                    sx={{
                        textAlign: 'center',
                        mt: 2,
                    }}
                >
                    TASK EDIT
                </Box>
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',


            }}>

                <BasicSelect name={"Project"} props={projectProps} />
                <BasicSelect name={"Attribute"} props={taskProps} />
                <BasicSelect name={"Period"} props={periodProps} />

            </Box>
        </>
    );
}