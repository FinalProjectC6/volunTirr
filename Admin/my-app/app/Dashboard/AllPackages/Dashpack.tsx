"use client "
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

type Packdata = {
  id: number;
  title: string;
  description: string;
  image1: string;
  price: number;
};

const HoverCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
}));

const Packagecard: React.FC = () => {
  const [data, setData] = useState<Packdata[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updateImage, setUpdateImage] = useState('');
  const [updatePrice, setUpdatePrice] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/package/getallpack')
      .then((res) => res.json())
      .then((data: Packdata[]) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteProvider = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/package/deleteoneprovider/${id}`);
      setData(data.filter(provider => provider.id !== id));
    } catch (error) {
      console.error('Error deleting provider:', error);
    }
  };

  const handleOpenModal = (id: number) => {
    const selectedPackage = data.find((packageData) => packageData.id === id);
    if (selectedPackage) {
      setSelectedId(id);
      setUpdateTitle(selectedPackage.title);
      setUpdateDescription(selectedPackage.description);
      setUpdateImage(selectedPackage.image1);
      setUpdatePrice(selectedPackage.price);
      setOpenModal(true);
    }
  };

  const handleUpdatePackage = async () => {
    try {
      const updatedPackage = {
        title: updateTitle,
        description: updateDescription,
        image: updateImage,
        price: updatePrice,
      };
  
      await axios.put(`http://localhost/package/updatepack/${selectedId}`, updatedPackage);
      setOpenModal(false);
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };
  
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginBottom: '40px', marginTop: '50px', padding: '10px', backgroundColor: '#fafbfc', marginLeft:'7%' }}>
      {data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <HoverCard>
            <CardMedia
              component="img"
              height="350"
              image={product.image1}
              sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px', objectFit: 'cover' }}
            />
            <CardContent sx={{ paddingX: '16px', paddingY: '12px', backgroundColor: '#fcfcfd' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                {product.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: '#666', mb: 1 }}>
                Price: {product.price}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: '#666', mb: 1 }}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', paddingY: '8px', borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: '#ddd', backgroundColor: '#fcfcfd' }}>
              <Button
                size="medium"
                variant="contained"
                color="error"
                onClick={() => handleDeleteProvider(product.id)}
                sx={{
                  backgroundColor: '#d32f2f',
                  color: '#fff',
                  borderRadius: '4px',
                  textTransform: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#b71c1c',
                  },
                }}
              >
                Delete
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={() => handleOpenModal(product.id)}
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  borderRadius: '4px',
                  textTransform: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s',
                  '& :hover': {
                    backgroundColor : '#115293'
                  }
                }}
              >
                Update
              </Button>
            </CardActions>
          </HoverCard>
        </Grid>
      ))}
      
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ position : "absolute", top : "50%", left : "50%", transform : "translate(-50%, -50%)", bgcolor : "#fff", boxShadow : "0px", p : "20px", borderRadius : "8px"}}>
          <TextField label="Title" value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} fullWidth sx={{ marginBottom : "16px"}} />
          <TextField label="Description" value={updateDescription} onChange={(e) => setUpdateDescription(e.target.value)} fullWidth sx={{ marginBottom : "16px"}} />
          <TextField label="Image URL" value={updateImage} onChange={(e) => setUpdateImage(e.target.value)} fullWidth sx={{ marginBottom : "16px"}} />
          <TextField type="number" label="Price" value={updatePrice} onChange={(e) => setUpdatePrice(Number(e.target.value))} fullWidth sx={{ marginBottom : "16px"}} />
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={handleUpdatePackage}
            fullWidth
            sx={{
              backgroundColor: '#1976d2',
              color: '#fff',
              borderRadius: '4px',
              textTransform: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'background-color 0.3s',
              '& :hover': {
                backgroundColor : '#115293'
              }
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
}

export default Packagecard;

