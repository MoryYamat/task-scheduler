import * as React from 'react';
import { styled } from '@mui/material/styles';



//mui import
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import Container from '@mui/material/Container';


import {ChartContainer} from '@mui/x-charts/ChartContainer';
import {BarPlot} from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

function TinyBarChart() {
  return (
    <ChartContainer
      width={500}
      height={300}
      series={[{ data: uData, label: 'uv', type: 'bar' }]}
      xAxis={[{ scaleType: 'band', data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));


function BasicGrid() {
    return (
        <Container maxWidth="xl">

        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <Item>
                        size=8
                        <TinyBarChart />
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>size=4
                        <TinyBarChart />

                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>size=4
                    <TinyBarChart />

                    </Item>
                </Grid>
                <Grid size={8}>
                    <Item>size=8
                    <TinyBarChart />

                    </Item>
                </Grid>
                
                <Grid size={4}>
                    <Item>size=4
                    <TinyBarChart />

                    </Item>
                </Grid>
                <Grid size={8}>
                    <Item>size=8
                    <TinyBarChart />

                    </Item>
                </Grid>
            </Grid>
        </Box>
        </Container>

    )
}

// create dashboard page contents
export default function DashboardDefault() {
    return (
        <div>
            this is DashboardDeafault Page!
            <BasicGrid />
        </div>
    )
}