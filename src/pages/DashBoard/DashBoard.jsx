import React from 'react';
import { CssBaseline, Grid, Stack, Container, Typography } from '@mui/material';
import Inicio from '@/components/Inicio/Inicio';

const styles = {
  background: {
    backgroundImage: 'url("/invernadero.jpg")',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    height: '100vh', // Ajusta la altura a tus necesidades
    alignItems: 'center', // Centrar verticalmente
    justifyContent: 'center', // Centrar horizontalmente
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: '3rem', // Ajusta el tamaño del título según tus necesidades
    color: '#fff', // Ajusta el color del texto
    marginBottom: '40px', // Espacio entre el título y el contenido
  },
};

function DashBoard() {
  return (
    <Stack>
      <CssBaseline />
      <Grid container sx={styles.background}>
        <Grid item sx={styles.content}>
          <Inicio />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default DashBoard;
