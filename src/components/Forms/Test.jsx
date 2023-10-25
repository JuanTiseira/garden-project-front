// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createPlant, getPlants, updatePlant, deletePlant } from '../../features/plant/formSlice';

// const TestComponent = () => {
//   const dispatch = useDispatch();
//   const plantsData = useSelector((state) => state.form.plantsData);
//   const handleCreatePlant = () => {
//     // Datos de prueba para crear una nueva planta
//     const newPlantData = {
//       nombre: 'Nueva Planta',
//       descripcion: 'Descripción de la nueva planta',
//       imagen: 'imagen_nueva_planta.jpg',
//     };
//     dispatch(createPlant(newPlantData));
//   };

//   const handleGetPlants = () => {
//     // Solicitar todas las plantas
//     dispatch(getPlants());
//   };

//   const handleUpdatePlant = () => {
//     // Datos de prueba para actualizar una planta existente
//     const updatedPlantData = {
//       plantId: 1, // Reemplaza 1 con el ID de la planta que deseas actualizar
//       plantData: {
//         nombre: 'Planta Actualizada',
//         descripcion: 'Nueva descripción de la planta',
//         imagen: 'nueva_imagen.jpg',
//       },
//     };
//     dispatch(updatePlant(updatedPlantData));
//   };

//   const handleDeletePlant = () => {
//     // ID de la planta que deseas eliminar
//     const plantIdToDelete = 1; // Reemplaza 1 con el ID de la planta que deseas eliminar
//     dispatch(deletePlant(plantIdToDelete));
//   };

//   return (
//     <div>
//       <button onClick={handleCreatePlant}>Crear Nueva Planta</button>
//       <button onClick={handleGetPlants}>Obtener Todas las Plantas</button>
//       <button onClick={handleUpdatePlant}>Actualizar Planta Existente</button>
//       <button onClick={handleDeletePlant}>Eliminar Planta</button>
//       <div>
//       <h1>Lista de Plantas</h1>
//       <ul>
//         {plantsData.map((plant) => (
//           <li key={plant.id}>
//             <h2>{plant.nombre}</h2>
//             <p>{plant.descripcion}</p>
//             <img src={plant.imagen} alt={plant.nombre} />
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default TestComponent;

import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageDataURL = e.target.result;
        setImage(imageDataURL);
      };

      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('image', file);

      axios
        .post('http://localhost:5000/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar la imagen:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <img src="http://localhost:5000/uploads/images (4).jpeg" alt="Preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
