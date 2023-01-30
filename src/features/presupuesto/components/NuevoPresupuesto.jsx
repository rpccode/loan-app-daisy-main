import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { PresupuestoActivo, setMensaje } from "../presupuestoSlice";
import Mensaje from "./Mensaje";

const formValidatior = {
    presupuesto: [(value) => value?.length >= 1, "No Es un Presupuesto  Valido"],

};


const NuevoPresupuesto = () => {
    const { active: Presupuesto, mensaje } = useSelector((state) => state.Presupuesto);
    const dispatch = useDispatch();
    const { formState, presupuesto, presupuestoValid, onInputChange } = useForm(Presupuesto, formValidatior)
    const handlePresupuesto = (e) => {
        e.preventDefault();
        if (presupuestoValid) {
            dispatch(setMensaje(presupuestoValid))
            return;
        }
        dispatch(PresupuestoActivo(formState))
        // setMensaje("");
        // setIsValidPresupuesto(true);
    };
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu Presupuesto"
                        name="presupuesto"
                        value={presupuesto}
                        onChange={onInputChange}
                    />
                    <input type="submit" value="Añadir" />

                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                </div>
            </form>
        </div>
    );
};

export default NuevoPresupuesto;
