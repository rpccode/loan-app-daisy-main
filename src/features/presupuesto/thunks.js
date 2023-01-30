import axios from "axios";
import { dateString } from "../../Gyn-admin/helpers";
import {
    clearPresupuestoActive,
    delectPresupuestoById,
    NuevoPresupuesto,
    SavingNewPresupuesto,
    setPresupuesto,
    updatePresupuesto,
} from "./PresupuestoSlice";
const client = axios.create({
    baseURL: "http://localhost:3000",
});
const PresupuestoForm = {
    presupuesto: 0,
    disponible: 0,
    gastado: 0,
    porcentaje: 0
};

export const StarkNuevoPresupuesto = () => {
    return async (dispatch, getState) => {
        dispatch(SavingNewPresupuesto());
        const { active: Presupuesto } = getState().Presupuesto;
        const newPresupuesto = { ...Presupuesto };
        newPresupuesto.fechaCreacion = dateString(Date.now());

        //     try {
        //         const resp = await client.post(`/Presupuestos`, newPresupuesto);
        //         const data = await resp.data;

        //         dispatch(NuevoPresupuesto(data));
        //     } catch (error) {
        //         console.log(error.message);
        //     }
    };
};

export const StarkObtenerPresupuestos = () => {
    return async (dispatch) => {
        try {
            const resp = await client.get(`/Presupuestos`);
            const data = await resp.data;
            dispatch(setPresupuesto(data));
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const StarkUpdatePresupuesto = (Presupuesto) => {
    return async (dispatch) => {
        //    console.log(Presupuesto)
        try {
            const resp = await client.put(`/Presupuestos/${Presupuesto.id}`, Presupuesto);
            const data = await resp.data;

            dispatch(updatePresupuesto(data));
            dispatch(clearPresupuestoActive(PresupuestoForm));
        } catch (error) {
            console.log(error);
        }
    };
};

export const StarkDelectPresupuesto = () => {
    return async (dispatch, getState) => {
        const { active: Presupuesto } = getState().Presupuesto;
        const id = Presupuesto.id;
        try {
            const resp = await client.delete(`/Presupuestos/${id}`);

            dispatch(delectPresupuestoById(id));
            dispatch(clearPresupuestoActive(PresupuestoForm));
        } catch (error) {
            console.log(error);
        }
    };
};