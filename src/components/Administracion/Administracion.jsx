
// import React, { useState, useEffect} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TextField,
//   TableRow,
//   Grid,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Snackbar,
// } from '@mui/material';



// import { createPlant, getPlants, updatePlant, deletePlant, selectForm } from '../../features/plant/formSlice';

// const TableComponent = () => {
//   const dispatch = useDispatch();
//   const formData = useSelector(selectForm);
//   const plants = useSelector((state) => state.form.plantsData); // Obtén las plantas desde el store
//   const initialRows = [...plants]; 
  
//   const [rows, setRows] = useState(initialRows);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [editingRow, setEditingRow] = useState(null);

//   const [isSnackbarOpen, setSnackbarOpen] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState('');



//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//   };

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     const filteredRows = rows.filter((row) => {
//       return row.nombre.includes(searchTerm) || row.descripcion.includes(searchTerm);
//     });

//     setRows(filteredRows);
//     console.log(plants)
//   };

//   const createRow = () => {
//     if (editingRow) {
//       // Si estamos editando una fila, llenar el formulario con los valores de esa fila
//       document.getElementById('nombre').value = editingRow.nombre;
//       document.getElementById('descripcion').value = editingRow.descripcion;
//       // Opcionalmente, puedes manejar la imagen de manera similar
//     }
//     setModalOpen(true);
//   };

//   // const handleModify = (row) => {
//   //   // Al hacer clic en "Modificar", establece la fila que se está modificando
//   //   setEditingRow(row);
//   //   setModalOpen(true); // Abre el modal para editar
//   // };
  

//   // const handleDelete = (id) => {
//   //   const updatedRows = rows.filter((row) => row.id !== id);
//   //   setRows(updatedRows);

//   //   setNotificationMessage('Fila eliminada exitosamente');
//   //   setSnackbarOpen(true);
//   // };

//   // const handleCreateRow = () => {
//   //   const nombre = document.getElementById('nombre').value;
//   //   const descripcion = document.getElementById('descripcion').value;
//   //   const imagenInput = document.getElementById('imagen');
//   //   const imagen = imagenInput.files[0];
  
//   //   if (editingRow) {
//   //     const updatedRow = {
//   //       ...editingRow,
//   //       nombre,
//   //       descripcion,
//   //       imagen: imagen ? imagen.name : editingRow.imagen,
//   //     };
  
//   //     const updatedRows = rows.map((row) =>
//   //       row.id === updatedRow.id ? updatedRow : row
//   //     );
//   //     console.log(updatedRows[0])
//   //     dispatch(updateFormData(updatedRows[0]))
//   //     setRows(updatedRows);
//   //     setEditingRow(null);
      
//   //     // Configura el mensaje de notificación para modificar
//   //     setNotificationMessage('Fila modificada exitosamente');
//   //   } else if (nombre && descripcion) {
//   //     if (imagen) {
//   //       // Realiza las operaciones necesarias con la imagen aquí
//   //     }
  
//   //     const newRow = {
//   //       id: rows.length + 1,
//   //       nombre,
//   //       descripcion,
//   //       imagen: imagen ? imagen.name : '',
//   //     };
  
//   //     setRows([...rows, newRow]);
      
//   //     // Configura el mensaje de notificación para crear
//   //     setNotificationMessage('Fila creada exitosamente');
//   //   } else {
//   //     // Configura el mensaje de notificación en caso de error
//   //     setNotificationMessage('Por favor, complete los campos Nombre y Descripción.');
//   //   }
  
//   //   setSnackbarOpen(true);
//   //   setModalOpen(false);
//   // };
  
//   const handleCreateRow = () => {
//     const nombre = document.getElementById('nombre').value;
//     const descripcion = document.getElementById('descripcion').value;
//     const imagenInput = document.getElementById('imagen');
//     const imagen = imagenInput.files[0];
  
//     if (nombre && descripcion) {
//       if (editingRow) {
//         // Si estamos editando una fila, llenar el formulario con los valores de esa fila
//         const updatedRow = {
//           ...editingRow,
//           nombre,
//           descripcion,
//           imagen: imagen ? imagen.name : editingRow.imagen,
//         };
  
//         // Dispatch de la acción para actualizar una planta
//         console.log(id)
//         dispatch(updatePlant(id, updatedRow))
//           .then(() => {
//             setNotificationMessage('Fila modificada exitosamente');
//             setSnackbarOpen(true);
//             setModalOpen(false);
//             dispatch(getPlants());
//           })
//           .catch((error) => {
//             setNotificationMessage('Error al modificar la fila: ' + error.message);
//             setSnackbarOpen(true);
//           });
//       } else {
//         if (imagen) {
//           // Realiza las operaciones necesarias con la imagen aquí
//         }
  
//         const newRow = {
//           id: rows.length + 1,
//           nombre,
//           descripcion,
//           imagen: imagen ? imagen.name : '',
//         };
  
//         // Dispatch de la acción para crear una planta
//         dispatch(createPlant(newRow))
//           .then(() => {
//             setNotificationMessage('Fila creada exitosamente');
//             setSnackbarOpen(true);
//             setModalOpen(false);
//             dispatch(getPlants());
//           })
//           .catch((error) => {
//             setNotificationMessage('Error al crear la fila: ' + error.message);
//             setSnackbarOpen(true);
//           });
//       }
//     } else {
//       setNotificationMessage('Por favor, complete los campos Nombre y Descripción.');
//       setSnackbarOpen(true);
//     }
//   };
  
  
//   const handleModify = (row) => {
//     // Al hacer clic en "Modificar", establece la fila que se está modificando
//     setEditingRow(row);
//     setModalOpen(true); // Abre el modal para editar
//   };
  
//   const handleDelete = (id) => {
//     // Dispatch de la acción para eliminar la planta
//     dispatch(deletePlant(id))
//       .then(() => {
//         const updatedRows = rows.filter((row) => row.id !== id);
//         setRows(updatedRows);
//         setNotificationMessage('Fila eliminada exitosamente');
//         setSnackbarOpen(true);
//         dispatch(getPlants());
//       })
//       .catch((error) => {
//         setNotificationMessage('Error al eliminar la fila: ' + error.message);
//         setSnackbarOpen(true);
//       });
//   };
  
//   // use efect
//   useEffect(() => {
//     dispatch(getPlants()); // Carga las plantas al montar el componente
//   }, [dispatch]);

//   return (
//     <Grid container spacing={2}>
//     <Snackbar
//       anchorOrigin={{ vertical: 'top', horizontal: 'rigth' }}
//       open={isSnackbarOpen}
//       autoHideDuration={3000} // Duración en milisegundos
//       onClose={() => setSnackbarOpen(false)}
//       message={notificationMessage}
//     />
//       <Grid item xs={8}>
//         <TextField
//           id="search"
//           label="Search"
//           variant="outlined"
//           onChange={handleSearch}
//         />
//         <Button variant="contained" onClick={createRow}>Search</Button>
//       </Grid>

//       <Grid item xs={4}>
//         <Button variant="outlined" onClick={createRow}>Create</Button>
//       </Grid>

//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableCell>Nombre</TableCell>
//             <TableCell>Descripción</TableCell>
//             <TableCell>Imagen</TableCell>
//             <TableCell>Modify</TableCell>
//             <TableCell>Delete</TableCell>
//           </TableHead>
//           <TableBody>
//             {plants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.nombre}</TableCell>
//                 <TableCell>{row.descripcion}</TableCell>
//                 <TableCell>{row.imagen}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" onClick={() => handleModify(row)}>Modificar</Button>
//                 </TableCell>
//                 <TableCell>
//                   <Button variant="contained" onClick={() => handleDelete(row.id)}>Eliminar</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         component="div"
//         count={rows.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
//       <DialogTitle>Create Row</DialogTitle>
//       <DialogContent>
//         <TextField
//           id="nombre"
//           label="Nombre"
//           variant="outlined"
//           fullWidth
//         />
//         <TextField
//           id="descripcion"
//           label="Descripción"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//         />
//         <TextField
//           id="imagen"
//           type="file" // Establece el tipo de entrada a "file"
//           variant="outlined"
//           fullWidth
//           inputProps={{
//             accept: "image/*", // Limita la selección a archivos de imagen
//           }}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={() => setModalOpen(false)} color="primary">
//           Cerrar
//         </Button>
//         <Button onClick={handleCreateRow} color="primary">
//           Guardar
//         </Button>
//       </DialogActions>
//     </Dialog>
//   </Grid>
//   );
// };

// export default TableComponent;



import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TextField,
  TableRow,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from '@mui/material';

import { createPlant, getPlants, updatePlant, deletePlant, selectForm } from '../../features/plant/formSlice';

const TableComponent = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm);
  const plants = useSelector((state) => state.form.plantsData);
  const initialRows = [...plants]; 
  
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Nuevo estado para almacenar el ID de la planta que se está editando
  const [editingPlantId, setEditingPlantId] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    const filteredRows = plants.filter((row) => {
      return row.nombre.includes(searchTerm) || row.descripcion.includes(searchTerm);
    });

    setRows(filteredRows);
  };

  const createRow = () => {
    if (editingRow) {
      // Si estamos editando una planta, llenar el formulario con los valores de esa planta
      const plantToEdit = plants.find((plant) => plant.id === editingPlantId);
      document.getElementById('nombre').value = plantToEdit.nombre;
      document.getElementById('descripcion').value = plantToEdit.descripcion;
      // Opcionalmente, puedes manejar la imagen de manera similar
    }
    setModalOpen(true);
  };

  const handleCreateRow = () => {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagenInput = document.getElementById('imagen');
    const imagen = imagenInput.files[0];
  
    if (nombre && descripcion) {
      if (editingRow) {
        const updatedPlant = {
          id: editingPlantId,
          nombre,
          descripcion,
          imagen: imagen ? imagen.name : '',
        };
        console.log("sdsds",editingPlantId)
        dispatch(updatePlant(updatedPlant))
          .then(() => {
            console.log("llamo")
            setNotificationMessage('Planta modificada exitosamente');
            setSnackbarOpen(true);
            setModalOpen(false);
            dispatch(getPlants());
          })
          .catch((error) => {
            setNotificationMessage('Error al modificar la planta: ' + error.message);
            setSnackbarOpen(true);
          });
      } else {
  
        const newPlant = {
          id: plants.length + 1,
          nombre,
          descripcion,
          imagen: imagen ? imagen.name : '',
        };
  
        dispatch(createPlant(newPlant))
          .then(() => {
            setNotificationMessage('Planta creada exitosamente');
            setSnackbarOpen(true);
            setModalOpen(false);
            dispatch(getPlants());
          })
          .catch((error) => {
            setNotificationMessage('Error al crear la planta: ' + error.message);
            setSnackbarOpen(true);
          });
      }
    } else {
      setNotificationMessage('Por favor, complete los campos Nombre y Descripción.');
      setSnackbarOpen(true);
    }
  };
  
  const handleModify = (plant) => {
    // Al hacer clic en "Modificar", establece la planta que se está editando
    setEditingRow(plant);
    console.log(plant.id)
    setEditingPlantId(plant.id); // Almacena el ID de la planta
    setModalOpen(true); // Abre el modal para editar
  };
  
  const handleDelete = (id) => {
    dispatch(deletePlant(id))
      .then(() => {
        const updatedPlants = plants.filter((plant) => plant.id !== id);
        setRows(updatedPlants);
        setNotificationMessage('Planta eliminada exitosamente');
        setSnackbarOpen(true);
        dispatch(getPlants());
      })
      .catch((error) => {
        setNotificationMessage('Error al eliminar la planta: ' + error.message);
        setSnackbarOpen(true);
      });
  };
  
  useEffect(() => {
    dispatch(getPlants()); // Carga las plantas al montar el componente
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isSnackbarOpen}
      autoHideDuration={3000} // Duración en milisegundos
      onClose={() => setSnackbarOpen(false)}
      message={notificationMessage}
    />
      <Grid item xs={8}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          onChange={handleSearch}
        />
        <Button variant="contained" onClick={createRow}>Search</Button>
      </Grid>

      <Grid item xs={4}>
        <Button variant="outlined" onClick={createRow}>Create</Button>
      </Grid>

      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Imagen</TableCell>
            <TableCell>Modify</TableCell>
            <TableCell>Delete</TableCell>
          </TableHead>
          <TableBody>
            {plants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((plant) => (
              <TableRow key={plant.id}>
                <TableCell>{plant.nombre}</TableCell>
                <TableCell>{plant.descripcion}</TableCell>
                <TableCell>{plant.imagen}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleModify(plant)}>Modificar</Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleDelete(plant.id)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={plants.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
      <DialogTitle>{editingRow ? 'Modificar Planta' : 'Crear Planta'}</DialogTitle>
      <DialogContent>
        <TextField
          id="nombre"
          label="Nombre"
          variant="outlined"
          fullWidth
          defaultValue={editingRow ? editingRow.nombre : ''}
        />
        <TextField
          id="descripcion"
          label="Descripción"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          defaultValue={editingRow ? editingRow.descripcion : ''}
        />
        <TextField
          id="imagen"
          type="file"
          variant="outlined"
          fullWidth
          inputProps={{
            accept: "image/*",
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setModalOpen(false)} color="primary">
          Cerrar
        </Button>
        <Button onClick={handleCreateRow} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  </Grid>
  );
};

export default TableComponent;
