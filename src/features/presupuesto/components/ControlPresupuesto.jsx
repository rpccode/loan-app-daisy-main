import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearGastoLogout } from '../gastosSlice';
import { clearPresupuestoActive, setDisponible, setGastado } from '../presupuestoSlice';

const ControlPresupuesto = () => {
    const dispatch = useDispatch();

    const { active: Presupuesto, mensaje } = useSelector((state) => state.Presupuesto);
    const { active: gasto, gastos } = useSelector((state) => state.gasto);
    const { presupuesto, disponible, gastado } = Presupuesto
    const [porcentaje, setPorcentaje] = useState(10);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.Cantidad) + total, 0);
        const totalDisponible = Number(presupuesto) - totalGastado;

        const nuevoPorcentaje = (((Number(presupuesto) - totalDisponible) / Number(presupuesto)) * 100).toFixed(2);

        dispatch(setDisponible(totalDisponible))
        dispatch(setGastado(totalGastado))
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500)

    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })

    }
    const handleResetApp = () => {
        // eslint-disable-next-line no-restricted-globals
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if (resultado) {
            dispatch(clearGastoLogout())
            dispatch(clearPresupuestoActive())
        }
    }
    return (
        <div className="flex justify-between flex-col md:flex-row">

            <div className='md:w-2/3  m-auto p-2 text-sm  '>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        textSize: '10px'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto ml-2 mt-4">
                <button
                    className="btn btn-primary w-full font-semibold text-white"
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto:</span> {formatearCantidad(Number(presupuesto))}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible:</span> {formatearCantidad(disponible)}
                </p>
                <p >
                    <span>Gastado:</span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto