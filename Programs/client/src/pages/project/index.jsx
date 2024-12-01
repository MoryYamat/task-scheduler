//mui import
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';



function ProjectChart() {

    return (
        <Box>
            Project Chart' Box.

        </Box>
    );
}

// create dashboard page contents
export default function ProjectDefault() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Box sx={{bgcolor: '#8a9f0e', height: '100vh'}}>

                    this is project default page!

                    <Box sx={{bgcolor: '#043333', height: '50%'}}>
                        hello
                        <ProjectChart />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}