import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from '../../repository/provinceRespository';

const fecthProvinceAll = createAsyncThunk(
  'province/fecthAll',
  async (userId: number, thunkAPI) => {
    const response = await getAll();
    return await response.json();
  }
);
