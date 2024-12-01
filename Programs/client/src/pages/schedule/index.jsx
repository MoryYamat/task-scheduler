import * as React from 'react';

//mui import
//import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


//import project
import BasicSelect from '../../component/basicSelect';

const menuItems = [
    { value: 1, label: "A" },
    { value: 2, label: "B" },
    { value: 3, label: "C" },
];

const handleSelectChange = (value) => {
    console.log("Selected value:", value);
  };

// modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 4,
    p: 4,
  };


  // Task content input screen
function ScheduleManager() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button 
                onClick={handleOpen}
                variant="contained">➕ task</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{border:'1px solid #fff'}}>
                        task manager
                    </Typography>
                    
                    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                        <ListItem>
                            <Typography 
                              id="modal-modal-description" 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                mt: 2,
                                gap: 2
                                }}>
                                Project:
                                <BasicSelect 
                                  menuItems={menuItems}
                                  label='Project'
                                  onChange={handleSelectChange}
                                />
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography 
                              id="modal-modal-description" 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                mt: 1,
                                gap: 2
                                }}>
                                Attribute:
                                <BasicSelect 
                                  menuItems={menuItems}
                                  label='Atteribute'
                                  onChange={handleSelectChange}
                                />
                            </Typography>
                        </ListItem>
                        <ListItem>
                        <Typography 
                              id="modal-modal-description" 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                mt: 1,
                                gap: 2
                                }}>
                                period:
                                <BasicSelect 
                                  menuItems={menuItems}
                                  label='time'
                                  onChange={handleSelectChange}
                                  //   I want to put here a calender
                                />
                                -
                                <BasicSelect 
                                  menuItems={menuItems}
                                  label='time'
                                  onChange={handleSelectChange}
                                //   I want to put here a calender
                                />
                            </Typography>
                        </ListItem>
                    </List>


                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                        <Button variant='contained'>
                            DONE
                        </Button>
                    </Box>
                </Box>
            </Modal>
            this is shcedule manager!
        </Box>
    );
}

// create dashboard page contents
export default function ScheduleDefault() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Box sx={{bgcolor: '#128303', height: '100vh'}}>

                    this is ScheduleDefault Page!

                    <Box sx={{bgcolor: '#dd4d33', height: '50%'}}>
                        <ScheduleManager />

                    </Box>
                </Box>


            </Container>
        </Box>
    )
}