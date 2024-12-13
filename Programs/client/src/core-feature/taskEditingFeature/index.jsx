import * as react from 'react';

import { useState } from 'react';

import { useEffect } from 'react';


// mui import
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';


// project import
//import BasicSelect from '../component/basicSelect';

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

const projectPropsJSON = `
[
    {
        "name": "max-min",
        "ID": 1
    },
    {
        "name": "hello world",
        "ID": 2
    },
    {
        "name": "hyper max",
        "ID": 3
    },
    {
        "name": "ultra SUN!!!!!!!!!!!!",
        "ID": 4
    }
]
`;

let projectData = [];

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

const processProps = [
    {
        name: "Plan",
        ID: 1,
    },
    {
        name: "Design",
        ID: 2,
    },
    {
        name: "Implement",
        ID: 3,
    },
    {
        name: "Test",
        ID: 4,
    },
    {
        name: "Review",
        ID: 5,
    },
    {
        name: "Deploy",
        ID: 6,
    }
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

function ProjectNameSelect({ name, props, onChange }) {
    const [projectId, setProjectId] = useState('');
    const [projectName, setProjectName] = useState('');

    // const handleChange = (event) => {
    //     setProjectId(event.target.value);
    // }

    const handleChange = (event) => {
        const data = event.target.value;
        setProjectName(data);
        console.log(`selected data is : ${data}`);
        onChange(data);
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
                    value={projectName}
                    label={name}
                    onChange={handleChange}
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

function AttributeSelect({ name, props, onChange }) {
    const [projectId, setProjectId] = useState('');
    const [projectName, setProjectName] = useState('');

    // const handleChange = (event) => {
    //     setProjectId(event.target.value);
    // }

    const handleChange = (event) => {
        const data = event.target.value;
        setProjectName(data);
        console.log(`selected data is : ${data}`);
        onChange(data);
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
                    value={projectName}
                    label={name}
                    onChange={handleChange}
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

function ProcessSelect({ name, props, onChange }) {
    const [projectId, setProjectId] = useState('');
    const [projectName, setProjectName] = useState('');

    // const handleChange = (event) => {
    //     setProjectId(event.target.value);
    // }

    const handleChange = (event) => {
        const data = event.target.value;
        setProjectName(data);
        console.log(`selected data is : ${data}`);
        onChange(data);
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
                    value={projectName}
                    label={name}
                    onChange={handleChange}
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



// function MenuItems({props}) {

//     return (
//         createElement(
//             'MenuItem',
//             {value: props.ID},
//             '{props.name}',

//         )
//     );
// };

let test = [];


// Task Editing Screen
export default function CoreFeature() {
    const [selectedData, setSelectedData] = useState("");
    const [projectPropsName, setProjectPropsName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [attribute, setAttribute] = useState('');
    const [process, setProcess] = useState('');

    const handleChange = (value) => {
        setSelectedData(value);
        console.log(`set project props: ${projectProps}`);
    };

    const attChange = (value) => {
        setAttribute(value);
        console.log(`set attribute is : ${attribute}`);
    }

    const processChange = (value) => {
        setProcess(value);
        console.log(`process setted : ${process}`);
    }

    let data = []

    // fetch : get
    const getProjectData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/projects');
            data = await response.json();
            setProjectPropsName(data);
            console.log("Received data from server:", data); // Recieved JSON data
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // console.log(projectPropsJSON);

        // const projectPropsArray = JSON.parse(projectPropsJSON);
        // projectPropsArray.forEach(project => {
        //     console.log(project.name);
        // })

        getProjectData();
        //console.log(projectPropsName);


    }, []);


    // action submit function 
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: selectedData,
            // attribute: attribute,
            process: process
        }


        try {
            const response = await fetch('http://localhost:3001/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(response.ok){
                const result = await response.json();
                console.log("Success:", result);
                alert("Task submitted successfully!");    
            } else {
                console.error("Error:", response.statusText);
                alert("Failed to submit project.");
            }
        } catch (error) {
            console.error("Network Error: ", error);
            alert("An error occurred while sending data.");
        }



        console.log(data);
        
    }

    //
    return isLoading ? (<p>Now Loading</p>) : (
        <Box>
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


            <form onSubmit={handleSubmit}>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',


                    }}>

                        <ProjectNameSelect
                            name={"Projct"}
                            props={projectPropsName}
                            onChange={handleChange}
                        />

                        {/* <AttributeSelect
                            name={"Attribute"}
                            props={taskProps}
                            onChange={attChange}
                        /> */}

                        <ProcessSelect
                            name={"Process"}
                            props={processProps}
                            onChange={processChange}
                        />

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
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>

                </Box>



            </form>
        </Box>
    );
}


{/*
projectProps = `[
    {
        "name": "hegehoge",
        "type": "type1",
        "ID": num
    }
]`;
    */}