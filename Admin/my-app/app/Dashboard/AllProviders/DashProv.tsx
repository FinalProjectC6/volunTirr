import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';

type ProviderData = {
  id: number;
  fullname: string;
  email_address: string;
  image: string;
  gender: string;
  phone: string;
  age: string;
};

const HoverCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const ProviderCard: React.FC = () => {
  const [data, setData] = useState<ProviderData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [restrictUserId, setRestrictUserId] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/provider/getallproviders')
      .then((res) => res.json())
      .then((data: ProviderData[]) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteprov = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/provider/deleteoneprovider/${id}`);
      setData(data.filter(provider => provider.id !== id));
      setOpenDialog(false); 
    } catch (error) {
      console.error('Error deleting provider:', error);
    }
  };

  const handleRestrictprov = (id: number) => {
    setRestrictUserId(id);
    setOpenDialog(true);
  };

  const handleConfirmRestriction = async () => {
    try {
      if (restrictUserId !== null) {
        setOpenDialog(false);
      }
    } catch (error) {
      console.error('Error restricting user:', error);
    }
  };

  const handleDeleteConfirmation = (id: number) => {
    setDeleteUserId(id);
    setOpenDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (deleteUserId !== null) {
        await handleDeleteprov(deleteUserId);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: '80px', marginTop: '20px', padding: '100px', backgroundColor: '#f7f7f7', marginLeft:"8%", marginRight: '10%' }}>
      {data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <HoverCard sx={{ maxWidth: '300px' }}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px', objectFit: 'cover' }}
            />
            <CardContent sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                {product.fullname}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                Phone: {product.phone}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                Email: {product.email_address}
              </Typography>
              <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
                Age: {product.age}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: '#ddd', backgroundColor: '#f9f9f9' }}>
              <Button
                size="medium"
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteConfirmation(product.id)}
                sx={{
                  backgroundColor: '#d32f2f',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#b71c1c',
                  },
                  borderRadius: '4px',
                  textTransform: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s',
                  marginRight: '10px',
                }}
              >
                Delete
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={() => handleRestrictprov(product.id)}
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  },
                  borderRadius: '4px',
                  textTransform: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s',
                }}
              >
                Restrict
              </Button>
            </CardActions>
          </HoverCard>
        </Grid>
      ))}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ backgroundColor: '#f44336', color: '#fff', textAlign: 'center' }}>
          <WarningIcon sx={{ color: '#fff', marginRight: '8px' }} /> Confirmation
          <IconButton sx={{ position: 'absolute', right: 0, top: 0, color: '#fff' }} onClick={handleCloseDialog}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#f44336', fontWeight: 'bold' }}>
          {deleteUserId !== null ? 'Are you sure you want to delete this user?' : 'Are you sure you want to restrict this user?'}
          </Typography>
          <Grid container justifyContent="center" sx={{ marginTop: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={deleteUserId !== null ? handleConfirmDelete : handleConfirmRestriction}
              sx={{ marginRight: '10px' }}
            >
              Confirm
            </Button>
            <Button variant="outlined" onClick={handleCloseDialog}>Cancel</Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default ProviderCard;

