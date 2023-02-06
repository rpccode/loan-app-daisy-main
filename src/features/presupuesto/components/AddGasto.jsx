import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputText from '../../../components/Input/InputText'
import SelectBox from '../../../components/Input/SelectBox'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from '../../common/headerSlice'
import { clearGastoActive, GastoActivo, NuevoGasto, updateGasto } from '../gastosSlice'
import { generarID } from '../helpers'



const INITIAL_gasto_OBJ = {
    Nombre: "",
    Categoria: "",
    Cantidad: "",
}
const periodOptions = [
    { name: "-- Seleccione --", value: "" },
    { name: "Ahorro", value: "ahorro" },
    { name: "Comida", value: "comida" },
    { name: "Casa", value: "casa" },
    { name: "Gastos Varios", value: "gastos" },
    { name: "Ocio", value: "ocio" },
    { name: "Salud", value: "salud" },
    { name: "Materiales", value: "materiales" },
    { name: "Equipos", value: "equipos" },
    { name: "Subscripciones", value: "subscripciones" },
    { name: "Transporte o Combustible", value: "transporte" },


]
const gastoOb = {
    id: '',
    Nombre: "",
    Categoria: "",
    Cantidad: "",
    Fecha: "",
}

const AddGasto = ({ closeModal }) => {
    const { active: gasto } = useSelector((state) => state.gasto);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [gastoObj, setgastoObj] = useState(gasto.id ? gasto : gastoOb)

    useEffect(() => {
        dispatch(GastoActivo(gastoObj));
    }, [gastoObj]);

    const guardarGasto = gasto => {
        if (gasto.id) {
            //actulizar gasto
            // const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
            dispatch(updateGasto(gasto))
            dispatch(clearGastoActive(gastoOb))
        } else {
            //nuevo Gasto
            let gastoNuevo = { ...gasto }
            gastoNuevo.id = generarID();
            gastoNuevo.Fecha = Date.now();
            dispatch(NuevoGasto(gastoNuevo))

        }

    }

    const saveNewgasto = () => {
        if (gastoObj.Nombre.trim() === "") return setErrorMessage("First Name is required!")
        else if (gastoObj.Cantidad.trim() === "") return setErrorMessage("Email id is required!")
        else {

            guardarGasto(gasto)
            dispatch(showNotification({ message: "Gasto Agregado Correctamente!", status: 1 }))
            closeModal()
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setgastoObj({ ...gastoObj, [updateType]: value })
    }

    return (
        <>

            <InputText type="text" defaultValue={gastoObj.Nombre} updateType="Nombre" containerStyle="mt-4" labelTitle="Nombre" placeholder='Agrega El Nombre del Gasto' updateFormValue={updateFormValue} />

            <SelectBox
                options={periodOptions}
                labelTitle="Categoria"
                placeholder="Categoria"
                updateType="Categoria"
                containerStyle="w-full mt-4"
                defaultValue={gastoObj.Categoria}
                updateFormValue={updateFormValue}
            />

            <InputText type="number" defaultValue={gastoObj.Cantidad} updateType="Cantidad" containerStyle="mt-4" labelTitle="Cantidad" placeholder="Agrega la Cantidad del Gasto ej: $300" updateFormValue={updateFormValue} />


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewgasto()}>Save</button>
            </div>
        </>
    )
}

export default AddGasto