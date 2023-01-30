
import { createSlice } from "@reduxjs/toolkit";

export const presupuestoSlice = createSlice({
    name: "presupuesto",
    initialState: {
        isSaving: false,
        isEditing: false,
        messageSave: "",
        mensaje: '',
        isValidPresupuesto: false,
        active: {
            presupuesto: 0,
            disponible: 0,
            gastado: 0,
            porcentaje: 0,
            fechaCreacion: ''
        },
    },
    reducers: {
        SavingNewPresupuesto: (state) => {
            state.isSaving = true;
        },
        setMensaje: (state, action) => {
            state.mensaje = action.payload;
            state.isSaving = false;
        },
        PresupuestoActivo: (state, action) => {
            state.active = action.payload;
            state.isValidPresupuesto = true;
            state.mensaje = ''
            state.messageSave = "";
        },
        setPresupuesto: (state, action) => {
            state.active.presupuesto = action.payload
            state.isValidPresupuesto = true
        },
        setDisponible: (state, action) => {
            state.active.disponible = action.payload
            state.isValidPresupuesto = true
        },
        setGastado: (state, action) => {
            state.active.gastado = action.payload
            state.isValidPresupuesto = true
        },
        setEditing: (state, action) => {
            state.isEditing = true;
        },
        updatePresupuesto: (state, action) => {
            state.isSaving = false;
            state.Presupuestos = state.Presupuestos.map((Presupuesto) => {
                if (Presupuesto.id === action.payload.id) {
                    return action.payload;
                }

                return Presupuesto;
            });
            ///mostrar mensage de actulaizacion
            state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
        },
        clearPresupuestoLogout: (state) => {
            state.isSaving = false;
            state.messageSave = "";
            state.Presupuestos = [];
            state.active = null;
        },
        clearPresupuestoActive: (state, action) => {
            state.active = action.payload;
            state.isEditing = false;
        },
        delectPresupuestoById: (state, action) => {
            state.Presupuestos = state.Presupuestos.filter(
                (Presupuesto) => Presupuesto.codigo !== action.payload
            );
            state.active = null;
        },
    },
});

export const {
    SavingNewPresupuesto,
    setMensaje,
    PresupuestoActivo,
    setPresupuesto,
    updatePresupuesto,
    delectPresupuestoById,
    clearPresupuestoActive,
    setEditing,
    setDisponible,
    setGastado
} = presupuestoSlice.actions;