// import * as React from 'react';
// import { Container, Grid, Paper, Stack, Pagination, Typography, Button, Box } from '@mui/material';
// import CardComponent from '../CardComponent/Card';
// import { useNavigate } from 'react-router-dom';
// import TestComponent from '../Forms/Test';
// import { useDispatch, useSelector } from 'react-redux';
// import { createPlant, getPlants, updatePlant, deletePlant } from '../../features/plant/formSlice';


// function PlantasComponent() {
//   const dispatch = useDispatch();
//   const plantsData = useSelector((state) => state.form.plantsData);
//   const navigate = useNavigate();

//   const nextObject = [
//     {
//       id: 1,
//       name: 'Product 1',
//       description: 'This is the first product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       description: 'This is the second product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       description: 'This is the third product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 4,
//       name: 'Product 2',
//       description: 'This is the second product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 5,
//       name: 'Product 3',
//       description: 'This is the third product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 6,
//       name: 'Product 2',
//       description: 'This is the second product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 7,
//       name: 'Product 3',
//       description: 'This is the third product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 8,
//       name: 'Product 2',
//       description: 'This is the second product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 9,
//       name: 'Product 3',
//       description: 'This is the third product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 10,
//       name: 'Product 3',
//       description: 'This is the third product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 11,
//       name: 'Product 2',
//       description: 'This is the second product.',
//       image: '/descarga.jpeg',
//     },
//     {
//       id: 12,
//       name: 'Product 3',
//       description: 'This is the third product.',
//       image: '/descarga.jpeg',
//     },
//     // Agrega más objetos de plantas aquí
//   ];

//   const [page, setPage] = React.useState(1);
//   const itemsPerPage = 5; // Cambiado a 5 elementos por página

//   const totalPages = Math.ceil(nextObject.length / itemsPerPage);
//   const paginatedNextObject = nextObject.slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//       <Container>
//         <Paper
//           sx={{
//             padding: 3,
//             marginBottom: 3,
//             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
//             borderRadius: 2,
//           }}
//         >
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Typography variant="h1" gutterBottom>
//                 Nuestras Plantas
//               </Typography>
//               <Button variant="outlined" onClick={() => navigate('/administracion')} >Gestionar</Button>
//               {/* <TestComponent></TestComponent> */}
//             </Box>
          
//           <Grid container spacing={2}>
//             {paginatedNextObject.map((item) => (
//               <Grid item md={6} key={item.id}>
//                 <CardComponent item={item} />
//               </Grid>
//             ))}
//           </Grid>
//           <Stack
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               marginTop: 3,
//             }}
//           >
//             <Pagination count={totalPages} page={page} onChange={handleChange} />
//           </Stack>
//         </Paper>
//       </Container>
//   );
// }

// export default PlantasComponent;


// import React, { useEffect } from 'react';
// import { Container, Grid, Paper, Stack, Pagination, Typography, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPlants } from '../../features/plant/formSlice';
// import CardComponent from '../CardComponent/Card';

// function PlantasComponent() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const plantsData = useSelector((state) => state.form.plantsData);
//   const page = 1; // Assuming you want to start on page 1
//   const itemsPerPage = 5; // Number of items per page

//   useEffect(() => {
//     // Fetch plants data from the API when the component mounts
//     dispatch(getPlants());
//   }, [dispatch]);

//   const paginatedPlants = plantsData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   return (
//     <Container>
//       <Paper
//         sx={{
//           padding: 3,
//           marginBottom: 3,
//           boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//           borderRadius: 2,
//         }}
//       >
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="h1" gutterBottom>
//             Nuestras Plantas
//           </Typography>
//           <Button variant="outlined" onClick={() => navigate('/administracion')}>
//             Gestionar
//           </Button>
//         </Box>

//         <Grid container spacing={2}>
//           {paginatedPlants.map((plant) => (
//             <Grid item md={6} key={plant.id}>
//               <CardComponent
//                 item={{
//                   id: plant.id,
//                   name: plant.nombre,
//                   description: plant.descripcion,
//                   image: plant.imagen,
//                 }}
//               />
//             </Grid>
//           ))}
//         </Grid>
//         <Stack
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginTop: 3,
//           }}
//         >
//           <Pagination count={Math.ceil(plantsData.length / itemsPerPage)} page={page} onChange={() => {}} />
//         </Stack>
//       </Paper>
//     </Container>
//   );
// }

// export default PlantasComponent;



import * as React from 'react';
import { Container, Grid, Paper, Stack, Pagination, Typography, Button, Box } from '@mui/material';
import CardComponent from '../CardComponent/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../features/plant/formSlice';
import ImageUploader from '../Forms/Test';

function PlantasComponent() {
  const dispatch = useDispatch();
  const plantsData = useSelector((state) => state.form.plantsData);
  const navigate = useNavigate();
  const itemsPerPage = 5;

  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(plantsData.length / itemsPerPage);
  const paginatedPlants = plantsData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  React.useEffect(() => {
    // Cuando se monta el componente, obtén las plantas
    dispatch(getPlants());
  }, [dispatch]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const path = "http://localhost:5000/uploads/"
  return (
    <Container>
      <Paper
        sx={{
          padding: 3,
          marginBottom: 3,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h1" gutterBottom>
            Nuestras Plantas
          </Typography>
          <Button variant="outlined" onClick={() => navigate('/administracion')}>
            Gestionar
          </Button>
          {/* <ImageUploader></ImageUploader> */}
        </Box>

        <Grid container spacing={2}>
          {paginatedPlants.map((plant) => (
            <Grid item md={6} key={plant.id}>
              <CardComponent
                item={{
                  id: plant.id,
                  name: plant.nombre,
                  description: plant.descripcion,
                  image: path + plant.imagen,
                }}
              />
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
