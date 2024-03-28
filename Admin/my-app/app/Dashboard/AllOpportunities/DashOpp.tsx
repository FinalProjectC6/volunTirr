import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarExport } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

type OpportunityData = {
  id: number;
  title: string;
  category: string;
  numberofseekers: number;
  logistics: number;
  description: string;
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150, editable: true },
  { field: 'numberofseekers', headerName: 'Number of Seekers', width: 180, editable: true },
  { field: 'logistics', headerName: 'Logistics', width: 150, editable: true },
  { field: 'category', headerName: 'Category', width: 150, editable: true },
  { field: 'description', headerName: 'Description', width: 250, editable: true },
  {
    field: 'deleteBtn',
    headerName: 'Actions',
    width: 120,
    sortable: false,
    renderCell: (params: { row: { id: number; }; }) => (
      <Button size='small' variant='outlined' color='error' onClick={() => handleDelete(params.row.id)}>
        Delete
      </Button>
    ),
  },
];

function handleDelete(id: number) {
  // Handle delete action here
}

export default function DataOpp() {
  const [data, setData] = React.useState<OpportunityData[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/opp/getallopportunities')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%', marginLeft: '250px', marginTop: '60px' }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        pageSize={5} // Defined within DataGridProps interface
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
