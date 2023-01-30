import { createSlice } from "@reduxjs/toolkit";

export const gastoSlice = createSlice({
    name: "gasto",
    initialState: {
        isSaving: false,
        isEditing: false,
        messageSave: "",
        gastos: [],
        active: {
            id: '',
            Nombre: "",
            Categoria: "",
            Cantidad: "",
            Fecha: "",
        },
    },
    reducers: {
        SavingNewGasto: (state) => {
            state.isSaving = true;
        },
        NuevoGasto: (state, action) => {
            state.gastos.push(action.payload);
            state.isSaving = false;
        },
        GastoActivo: (state, action) => {
            state.active = action.payload;
            state.messageSave = "";
        },
        setEditing: (state, action) => {
            state.isEditing = true;
        },
        setGasto: (state, action) => {
            state.gastos = action.payload;
        },
        updateGasto: (state, action) => {
            state.isSaving = false;
            state.gastos = state.gastos.map((gasto) => {
                if (gasto.id === action.payload.id) {
                    return action.payload;
                }

                return gasto;
            });
            ///mostrar mensage de actulaizacion
            state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
        },
        clearGastoLogout: (state) => {
            state.isSaving = false;
            state.messageSave = "";
            state.Gastos = [];
            state.active = null;
        },
        clearGastoActive: (state, action) => {
            state.active = action.payload;
            state.isEditing = false;
        },
        delectGastoById: (state, action) => {
            state.gastos = state.gastos.filter(
                (gasto) => gasto.id !== action.payload
            );
            state.active = null;
        },
    },
});

export const {
    clearGastoLogout,
    SavingNewGasto,
    NuevoGasto,
    GastoActivo,
    setGasto,
    updateGasto,
    delectGastoById,
    clearGastoActive,
    setEditing,
} = gastoSlice.actions;