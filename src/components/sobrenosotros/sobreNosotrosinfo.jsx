import React from 'react';
import { Container, Stack, Typography, Paper } from '@mui/material';

function SobreNosotrosInfo() {
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
          Compromiso con el desarrollo sustentable
        </Typography>
        <Typography style={{ color: 'white' , fontSize:'30px'}}>
          Bienvenidos a nuestro vivero moderno y vibrante. Aquí, nos dedicamos a la
          creación y cuidado de hermosas plantas para mejorar tu entorno y tu vida.

          Estamos comprometidos con el desarrollo sustentable es 
          por eso que toda nuestra actividad no daña al medio ambiente
        </Typography>
      </Paper>
    </Container>
  );
}

export default SobreNosotrosInfo;
