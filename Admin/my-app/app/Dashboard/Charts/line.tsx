import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function line() {
  return (
    <main >
    <LineChart sx={{
  '& .MuiLineElement-root': {
    strokeDasharray: '10 5',
    strokeWidth: 4,
  },
  '& .MuiAreaElement-series-Germany': {
    fill: "url('#myGradient')",
  },
}}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={450}
      height={300}
    /></main>
  );
}