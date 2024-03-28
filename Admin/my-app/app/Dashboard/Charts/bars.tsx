"use clients"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



type ProductData = {
    id: number;
    name: string;
    initalprice: number;
    imgurlmain: string;
    description: string;
    category: string;
  };

export default function StackBars() {

    const [data, setData] = React.useState<ProductData[]>([]);

    React.useEffect(() => {
      fetch('http://localhost:3000/opp/getallopportunities')
        .then((res) => res.json())
        .then((data: ProductData[]) => {
          setData(data);
        });
    }, []);
  return (
   
    <BarChart sx={{color:'#25B4F8', marginRight:'35px'}}
      series={[
        { data: [3, 4, 1, 6, 5], stack: '', label: 'IT',},
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'marketing  ' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'care taker' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'handy ' },
        
      ]}
      width={480}
      height={290}
    />

  );
}