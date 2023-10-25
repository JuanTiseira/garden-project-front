import React from 'react';
import { CssBaseline, Grid, Stack, Container, Typography, Paper } from '@mui/material';

const styles = {
  background: {
    backgroundImage: 'url("/invernadero.jpg")',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    height: '100vh', // Ajusta la altura a tus necesidades
    alignItems: 'center', // Centrar verticalmente
    justifyContent: 'center', // Centrar horizontalmente
  },
  background2: {
    backgroundImage: 'url("/granja.jpg")',
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
    fontWeight:'bold',
    fontSize: '4rem', // Ajusta el tamaño del título según tus necesidades
    color: '#fff', // Ajusta el color del texto
    marginBottom: '50px', // Espacio entre el título y el contenido
  },
};

import SobreNosotrosInfo from '@/components/sobrenosotros/sobreNosotrosinfo';
function SobreNosotros() {
  return (
    <Stack>
    <CssBaseline />
    <Grid container sx={styles.background}>
      <Grid item sx={styles.content}>
        <Typography sx={styles.title}>
          Vivero amigable con el medio ambiente
        </Typography>
        <SobreNosotrosInfo></SobreNosotrosInfo>
      </Grid>
    </Grid>
    <Grid container sx={styles.background2}>
      <Grid item sx={styles.content}>
        <Typography sx={styles.title}>
          Contactate con nosotros
        </Typography>
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
          Contactanos mediante nuestras redes!!
        </Typography>
        <Typography style={{ color: 'white' , fontSize:'30px'}}>
          Bienvenidos a nuestro vivero moderno y vibrante. Aquí, nos dedicamos a la
          creación y cuidado de hermosas plantas para mejorar tu entorno y tu vida.
        </Typography>
      </Paper>
    </Container>
      </Grid>
      
    </Grid>
  </Stack>
  );
}

export default SobreNosotros;


