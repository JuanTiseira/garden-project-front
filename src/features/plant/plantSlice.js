import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:5000';
const createPlantUrl = `${apiUrl}/create_plant`;
const getPlantsUrl = `${apiUrl}/get_plants`;
const updatePlantUrl = (plantId) => `${apiUrl}/update_plant/${plantId}`;
const deletePlantUrl = (plantId) => `${apiUrl}/delete_plant/${plantId}`;


// Define una acción asincrónica para crear una planta
export const createPlant = createAsyncThunk('form/createPlant', async (plantData, thunkAPI) => {
  try {
    const response = await fetch(createPlantUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define una acción asincrónica para obtener todas las plantas
export const getPlants = createAsyncThunk('form/getPlants', async (_, thunkAPI) => {
  try {
    const response = await fetch(getPlantsUrl, {
      method: 'GET',
    });
    const data = await response.json();
    print(data)
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define una acción asincrónica para actualizar una planta
export const updatePlant = createAsyncThunk('form/updatePlant', async ({ plantId, plantData }, thunkAPI) => {
  try {
    const response = await fetch(updatePlantUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define una acción asincrónica para eliminar una planta
export const deletePlant = createAsyncThunk('form/deletePlant', async (plantId, thunkAPI) => {
  try {
    const response = await fetch(deletePlantUrl , {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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

export const { updateFormData } = formSlice.actions;

export default formSlice.reducer;
