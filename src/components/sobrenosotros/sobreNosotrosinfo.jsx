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
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
          Introducción
        </Typography>
        <Typography variant="body1" style={{ color: 'white' }}>
          Bienvenidos a nuestro vivero moderno y vibrante. Aquí, nos dedicamos a la
          creación y cuidado de hermosas plantas para mejorar tu entorno y tu vida.
        </Typography>
      </Paper>
    </Container>
  );
}

export default SobreNosotrosInfo;
