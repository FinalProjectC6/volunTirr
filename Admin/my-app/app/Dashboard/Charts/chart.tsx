"use client"
import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';

type ProviderData = {
    id: number;
    fullname: string;
    email_address: string;
    image: string;
    gender: string;
    phone: string;
    age: string;
  };
  type SeekersData = {
    id: number;
    fullname: string;
    email_address: string;
    image: string;
    gender: string;
    phone: string;
    age: string;
  };

export default function Stats (){
    const [data, setData] = React.useState<SeekersData[]>([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/seeker/getallseekers')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const [seller, setSeller] = React.useState<ProviderData[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/provider/getallproviders')
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
      });
  }, []);

    return(
     <main >
<PieChart  
colors={['#BF1736', '#0378A6']}
  series={[
    {
      data: [
        { id: 0, value: data.length, label: 'seekers' },
        { id: 1, value: seller.length, label: 'providers' },
     
      ],
    },
  ]}
  width={420}
  height={230}
/>
</main>)
}

