import React from 'react';
import { Stack } from '@mui/material';
import PlantasComponent from '@/components/PlantasComponent/PlantasComponent';

function Plantas() {
  return (
    <Stack
    sx={{
      p: 2,
      boxShadow: 3,
      borderRadius: 5,
      position: 'relative',
      padding: 10,
    }}>
      <PlantasComponent></PlantasComponent>
    </Stack>
    
  );
}

export default Plantas;
