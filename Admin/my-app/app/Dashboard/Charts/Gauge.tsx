import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

export default function Gauges() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} sx={{width:"900px",paddingLeft:'200px'}}>
      <Gauge width={150} height={150} value={10} />
      <Gauge width={150} height={150} value={22} valueMin={10} valueMax={100} />
      <Gauge width={150} height={150} value={47} />
      <Gauge width={150} height={150} value={41} valueMin={10} valueMax={100} />
      <Gauge width={150} height={150} value={60} />
      <Gauge width={150} height={150} value={70.5} valueMin={10} valueMax={100} />
    </Stack>
    
  );
}