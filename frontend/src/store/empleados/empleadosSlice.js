import { createSlice } from '@reduxjs/toolkit';


const initialState={
    status: 'checking', // 'authenticated', 'not-authenticated',
    empleados: {},
    errorMessage: undefined,
}
export const empleadosSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.empleados = {};
            state.errorMessage = undefined;
        }}
});


  export const { onChecking } = empleadosSlice.actions;

export default empleadosSlice.reducer;
