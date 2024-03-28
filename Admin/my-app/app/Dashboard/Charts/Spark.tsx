import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function SparkLine() {
  return (
    <Stack direction="row" sx={{ width: '910px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[3, -10, -2, 5, 7, -2, 4, 6]} height={250} area />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={250}
          curve="natural"
          area
        />
      </Box>
    </Stack>
  );
}