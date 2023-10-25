import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

function FormModal() {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGuardar = () => {
    // Aquí puedes manejar la lógica para guardar los datos del formulario
    // Por ejemplo, puedes enviar los datos a un servidor
    console.log('Nombre:', nombre);
    console.log('Descripción:', descripcion);
    console.log('Imagen:', imagen);

    // Cerrar el modal después de guardar
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Abrir Formulario
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Formulario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Descripción"
            fullWidth
            multiline
            rows={4}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Imagen"
            fullWidth
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleGuardar} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormModal;
