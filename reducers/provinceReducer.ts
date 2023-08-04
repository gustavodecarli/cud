import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Province } from '../entity/Province';

export interface ProvinceState {
  provinces: Array<Province>;
  province?: Province;
}

const initialState: ProvinceState = {
  provinces: []
};

export const provindeSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {
    add: (state: ProvinceState, action: PayloadAction<Province>) => {
      console.log(action.payload);
      state.provinces = [...state.provinces, action.payload];
    },
    edit: (state: ProvinceState, action: PayloadAction<number>) => {
      state.province = current(state.provinces).find(
        (e) => e.id == action.payload
      );
    },
    save: (state: ProvinceState, action: PayloadAction<Province>) => {
      const { payload } = action;
      const provincesCurrent = current(state.provinces);
      let provincesNew = [];
      if (payload.id === undefined) {
        payload.id = provincesCurrent.length + 1;
        provincesNew = [...provincesCurrent, action.payload];
      } else {
        provincesNew = provincesCurrent.map((e) => {
          if (e.id == action.payload.id) {
            return action.payload;
          } else {
            return e;
          }
        });
      }

      state.provinces = provincesNew;
    },
    remove: (state: ProvinceState, action: PayloadAction<number>) => {
      const provincesNew = current(state.provinces).filter(
        (e) => e.id !== action.payload
      );
      state.provinces = provincesNew;
    }
  }
});

export const { edit, save, remove } = provindeSlice.actions;

export default provindeSlice.reducer;
