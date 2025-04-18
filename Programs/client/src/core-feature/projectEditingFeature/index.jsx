import * as react from 'react';

import { useState } from 'react';

//mui import
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

//import FormControl from '@mui/material/FormControl';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Button from '@mui/material/Button';

//project import
import BasicSelect from '../component/basicSelect';

// The data will be temporarily stored as an object.


// setting project period
// function BasicDatePicker({ label, onChange }) {
//     const [dateValue, setDateValue] = useState();

//     const handleChange = (newValue) => {
//         setDateValue(newValue); // newValue は dayjs オブジェクト
//         //console.log(`date: ${newValue}`);
//         onChange(newValue);// 親コンポーネントに dayjs オブジェクトを渡す
//     }

//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={['DatePicker']}>
//                 <DatePicker
//                     label={label}
//                     value={dateValue}
//                     onChange={handleChange}
//                 />
//             </DemoContainer>
//         </LocalizationProvider>
//     );
// };


// Project Type Data
const projectType = [
    {
        name: 'Design and Development', // Determine the project process
        ID: 1
    },
    // {
    //     name: 'Plan',
    //     ID: 2
    // },
    // {
    //     name: 'Optimization',
    //     ID: 3
    // },

];




// edit project propeties
export default function ProjectEditing() {

    const [name, setName] =  useState('');
    // const [projectTypeId, setProjectTypeId] = useState('');
    const [projectTypeName, setProjectTypeName] = useState('');
    // const [startDate, setStartDate] = useState();
    // const [endDate, setEndDate] = useState();



    // set the selected value
    const handleSelectChange = (value) => {
        setProjectTypeName(value);
        //console.log(`selected ${value}`);
    }

    // const handleStartDateChange = (value) => {
    //     setStartDate(value);
    //     //console.log(`startDate: ${value}`);
    // }

    // const handleEndDateChange = (value) => {
    //     setEndDate(value);
    //     //console.log(`endDate: ${value}`);
    // }

    // Converting Data to an Array
    //const Data = [projectName, projectTypeName];

    //Converting data to JSON



    // executed when submitted
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(`submitted Project Name: ${projectName}`);
        // console.log(`submitted Type Name: ${projectTypeName}`);
        // console.log(`submitted Type Id: ${projectTypeId}`);
        // console.log(`submitted Start Date: ${startDate?.format('YYYY-MM-DD')}`);
        // console.log(`submitted End Date: ${endDate?.format('YYYY-MM-DD')}`);


        // data aggregation (データ集約) 
        //
        const inputData = {
            name,
            projectTypeName,
        };

        const test = JSON.stringify(inputData);
        console.log(inputData);
        console.log(`Converted Data is: ${test}`);
        console.log(`type of inputdata: ${typeof(inputData)}`);
        console.log(`type of converted data: ${typeof(test)}`);

        try{
            // send data to server : fetch POST
            const response = await fetch('http://localhost:3001/api/projects', {
                method: 'POST',// 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(inputData),
            });
            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result);
                alert("Project submitted successfully!");    
            } else {
                console.error("Error:", response.statusText);
                alert("Failed to submit project.");
            }
        } catch (error) {
            console.error("Network Error: ", error);
            alert("An error occurred while sending data.");
        }

    };




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

            
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        my: 1,
                    }}>

                    {/* Input Project Name */}
                    <TextField
                        id="Input-Project-Name"
                        label="Input-Project-Name"
                        variant="outlined"

                        // get projectName from user Input
                        onChange={(event) => {
                            // useState()
                            setName(event.target.value);
                            //console.log(projectName);
                        }}
                        required
                    />
                </Box>
                <Box
                    sx={{
                        m: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    <BasicSelect
                        name='Project-Type'
                        props={projectType}

                        // Nested callback functions
                        onChange={handleSelectChange}
                    />
                </Box>
                {/* <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <BasicDatePicker
                        label="START DATE"
                        onChange={handleStartDateChange}
                    />
                    <Typography>
                        <Box sx={{ mx: 2 }}>━</Box>
                    </Typography>
                    <BasicDatePicker
                        label="END DATE"
                        onChange={handleEndDateChange}
                    />
                </Box> */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2,
                        mb: 2
                    }}
                >
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </form>
        </Box>

    );
};

{/*
projectProps = `[
    {
        "name": "hegehoge",
        "type": "type1",
        "ID": num
    }
]`;
    */}