import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Importa Axios

const apiUrl = 'http://localhost:5000';

// Define una acción asincrónica para crear una planta
export const createPlant = createAsyncThunk('form/createPlant', async (plantData, thunkAPI) => {
  try {
    const response = await axios.post(`${apiUrl}/create_plant`, plantData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define una acción asincrónica para obtener todas las plantas
export const getPlants = createAsyncThunk('form/getPlants', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${apiUrl}/get_plants`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define una acción asincrónica para actualizar una planta
export const updatePlant = createAsyncThunk('form/updatePlant', async (plantData, thunkAPI) => {
  try {
    console.log("pasdasd", plantData)
    const response = await axios.post(`${apiUrl}/update_plant/${plantData.id}`, plantData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define una acción asincrónica para eliminar una planta
export const deletePlant = createAsyncThunk('form/deletePlant', async (plantId, thunkAPI) => {
  try {
    const response = await axios.delete(`${apiUrl}/delete_plant/${plantId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Resto del código sin cambios


const initialState = {
  formData: {
    nombre: '',
    descripcion: '',
    imagen: '',
  },
  plantsData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
    resetForm: (state) => {
      state.formData = {
        nombre: '',
        descripcion: '',
        imagen: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlants.fulfilled, (state, action) => {
        state.plantsData = action.payload.plants;
      })
      .addCase(createPlant.fulfilled, (state, action) => {
        // Actualiza el estado si es necesario después de crear una planta
      })
      .addCase(updatePlant.fulfilled, (state, action) => {
        // Actualiza el estado si es necesario después de actualizar una planta
      })
      .addCase(deletePlant.fulfilled, (state, action) => {
        // Actualiza el estado si es necesario después de eliminar una planta
      });
  },
});

export const { updateFormData, resetForm } = formSlice.actions;

export const selectForm = (state) => state.form;

export default formSlice.reducer;

