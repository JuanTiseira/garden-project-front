import * as React from 'react';
import { Container, Grid, Paper, Stack, Pagination, Typography } from '@mui/material';
import CardComponent from '../CardComponent/Card';

function PlantasComponent() {
  const nextObject = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the first product.',
      image: '/descarga.jpeg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the second product.',
      image: '/descarga.jpeg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the third product.',
      image: '/descarga.jpeg',
    },
    {
      id: 4,
      name: 'Product 2',
      description: 'This is the second product.',
      image: '/descarga.jpeg',
    },
    {
      id: 5,
      name: 'Product 3',
      description: 'This is the third product.',
      image: '/descarga.jpeg',
    },
    {
      id: 6,
      name: 'Product 2',
      description: 'This is the second product.',
      image: '/descarga.jpeg',
    },
    {
      id: 7,
      name: 'Product 3',
      description: 'This is the third product.',
      image: '/descarga.jpeg',
    },
    {
      id: 8,
      name: 'Product 2',
      description: 'This is the second product.',
      image: '/descarga.jpeg',
    },
    {
      id: 9,
      name: 'Product 3',
      description: 'This is the third product.',
      image: '/descarga.jpeg',
    },
    {
      id: 10,
      name: 'Product 3',
      description: 'This is the third product.',
      image: '/descarga.jpeg',
    },
    {
      id: 11,
      name: 'Product 2',
      description: 'This is the second product.',
      image: '/descarga.jpeg',
    },
    {
      id: 12,
      name: 'Product 3',
      description: 'This is the third product.',
      image: '/descarga.jpeg',
    },
    // Agrega más objetos de plantas aquí
  ];

  const [page, setPage] = React.useState(1);
  const itemsPerPage = 5; // Cambiado a 5 elementos por página

  const totalPages = Math.ceil(nextObject.length / itemsPerPage);
  const paginatedNextObject = nextObject.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
      <Container>
        <Paper
          sx={{
            padding: 3,
            marginBottom: 3,
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Nuestras Plantas
          </Typography>
          <Grid container spacing={2}>
            {paginatedNextObject.map((item) => (
              <Grid item md={6} key={item.id}>
                <CardComponent item={item} />
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 3,
            }}
          >
            <Pagination count={totalPages} page={page} onChange={handleChange} />
          </Stack>
        </Paper>
      </Container>
  );
}

export default PlantasComponent;
