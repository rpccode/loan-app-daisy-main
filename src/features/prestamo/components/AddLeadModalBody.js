import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import SelectBox from "../../../components/Input/SelectBox"
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { formatearFechaVencida } from "../../presupuesto/helpers"
import { calculateLoanAmount, calculateLoanPayments, calculateNumberOfPayments, getNumberOfPayments } from "../helpers"
import { addNewLoan } from "../prestamosSlices"

const INITIAL_Loan_OBJ = {
    id: '',
    interes: 0,
    numero_cuotas: 0,
    saldo_pendiente: 0,
    monto_prestado: 0,
    fecha_otorgamiento: '',
    fecha_vencimiento: '',
    usuario_id: '',
    cliente_id: '',
    estado: 1
}

const periodOptions = [
    { name: "Diario", value: "diario" },
    { name: "semanal", value: "semanal" },
    { name: "Quincenal", value: "quincenal" },
    { name: "Mensual", value: "mensual" },
    { name: "Anual", value: "anual" },
]

function AddLoanModalBody({ closeModal }) {
    console.log(calculateLoanPayments(100000, 21, 1, 'mensual'));

    formatearFechaVencida()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [LoanObj, setLoanObj] = useState(INITIAL_Loan_OBJ)

    // useEffect(() => {
    //         in
    // }, [LoanObj]);

    const saveNewLoan = () => {
        if (LoanObj.cliente_id.trim() === "") return setErrorMessage("El cliente es requerido!")
        else if (LoanObj.monto_prestado.trim() === "") return setErrorMessage("El Monto es requerido!")
        else if (LoanObj.interes.trim() === "") return setErrorMessage("El Interes es requerido!")
        else {
            let newLoanObj = {
                id: 1,
                interes: LoanObj.interes,
                numero_cuotas: LoanObj.numero_cuotas,
                saldo_pendiente: LoanObj.saldo_pendiente,
                monto_prestado: LoanObj.monto_prestado,
                fecha_otorgamiento: Date.now(),
                fecha_vencimiento: '',
                usuario_id: 1,
                cliente_id: 1,
                estado: 1
            }
            dispatch(addNewLoan(newLoanObj))
            dispatch(showNotification({ message: "Nuevo Prestamo Agregado", status: 1 }))
            closeModal()
        }

    }
    const updateSelectBoxValue = ({ updateVar, value }) => {
        // console.log(value);
        // console.log(getNumberOfPayments(1, value))
        // INITIAL_Loan_OBJ.numero_cuotas = getNumberOfPayments(1, value)
        const principal = 10000;
        const interestRate = 21;
        console.log(calculateLoanAmount(principal, interestRate));
        const payment = calculateLoanPayments(principal, interestRate, 1, value);
        console.log(payment)

        const term = calculateNumberOfPayments(principal, interestRate, payment, value);
        console.log(`The loan term is ${term} ${value} payments.`);
    }
    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setLoanObj({ ...LoanObj, [updateType]: value })
    }

    return (
        <>

            <InputText type="text" defaultValue={LoanObj.cliente_id} updateType="cliente_id" containerStyle="mt-4" labelTitle="Cliente" updateFormValue={updateFormValue} />

            <InputText type="number" defaultValue={LoanObj.monto_prestado} updateType="monto_prestado" containerStyle="mt-4" labelTitle="Monto a Prestar" updateFormValue={updateFormValue} placeholder='Ej : $1000' />

            <InputText type="number" defaultValue={LoanObj.interes} updateType="interes" containerStyle="mt-4" labelTitle="Interes" updateFormValue={updateFormValue} placeholder='Ej : $10' />


            <SelectBox
                options={periodOptions}
                labelTitle="Period"
                placeholder="Select date range"
                containerStyle="w-72"
                // labelStyle="hidden"
                defaultValue="diario"
                updateFormValue={updateSelectBoxValue}
            />

            <InputText type="number" defaultValue={LoanObj.numero_cuotas} updateType="numero_cuotas" containerStyle="mt-4" labelTitle="Numero de cueotas " updateFormValue={updateFormValue} placeholder=' 1' />


            <InputText type="number" updateType="Monto_cuota" containerStyle="mt-4" labelTitle="Monto Por Cuotas " updateFormValue={updateFormValue} placeholder=' 1' />

            <InputText type="date" defaultValue={LoanObj.fecha_otorgamiento} updateType="fecha_otorgamiento" containerStyle="mt-4" labelTitle="Fecha de Otorgamiento" updateFormValue={updateFormValue} />


            <InputText type="date" defaultValue={LoanObj.fecha_vencimiento} updateType="fecha_vencimiento" containerStyle="mt-4" labelTitle="Fecha de Vencimiento" updateFormValue={updateFormValue} />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLoan()}>Save</button>
            </div>
        </>
    )
}

export default AddLoanModalBody