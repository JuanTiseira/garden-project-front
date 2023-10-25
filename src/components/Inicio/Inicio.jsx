import React from 'react';
import { Container, Stack, Typography, Paper } from '@mui/material';
import AddPlantas from '../Forms/AddPlantas';

function Inicio() {
  return (
    <Container>
      {/* Introducción */}
      <Paper
        sx={{
          p: 3,
          mt: 3,
          backgroundColor: '#4CAF50', // Color verde para la introducción
        }}
      >
        <Typography gutterBottom style={{ color: 'white' ,fontSize:'48px', fontWeight:'bold'}}>
        Bienvenido a vivero el Mango
        </Typography>
        <Typography style={{ color: 'white' , fontSize:'25px'}}>
          Bienvenidos a nuestro vivero moderno y vibrante. Aquí, nos dedicamos a la
          creación y cuidado de hermosas plantas para mejorar tu entorno y tu vida.
        </Typography>
      </Paper>

      {/* Objetivos */}
      <Paper
        sx={{
          p: 3,
          mt: 3,
          backgroundColor: '#FF5722', // Color naranja para los objetivos
        }}
      >
        <Typography gutterBottom style={{ color: 'white' ,fontSize:'48px', fontWeight:'bold'}}>
          Objetivos
        </Typography>
        <Typography style={{ color: 'white' , fontSize:'25px'}}>
          Nuestro principal objetivo es proporcionarte plantas saludables y de alta calidad
          para embellecer tu espacio y promover un estilo de vida sostenible.
        </Typography>
      </Paper>

      {/* Misión */}
      <Paper
        sx={{
          p: 3,
          mt: 3,
          backgroundColor: '#2196F3', // Color azul para la misión
        }}
      >
        <Typography gutterBottom style={{ color: 'white' ,fontSize:'48px', fontWeight:'bold'}}>
          Misión
        </Typography>
        <Typography style={{ color: 'white' , fontSize:'25px'}}>
          Nuestra misión es inspirar a las personas a conectarse con la naturaleza y
          aportar positivamente al medio ambiente, proporcionando plantas y servicios
          excepcionales.
        </Typography>
      </Paper>

      {/* Visión */}
      <Paper
        sx={{
          p: 3,
          mt: 3,
          backgroundColor: '#FFC107', // Color amarillo para la visión
        }}
      >
        <Typography gutterBottom style={{ color: 'white' ,fontSize:'48px', fontWeight:'bold'}}>
          Visión
        </Typography>
        <Typography style={{ color: 'white' , fontSize:'25px'}}>
          Nuestra visión es convertirnos en el vivero líder en el mercado, conocido por
          la excelencia en la calidad de nuestras plantas y por promover un estilo de vida
          más verde y saludable.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Inicio;
