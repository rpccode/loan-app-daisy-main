import React from 'react'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { openModal } from '../common/modalSlice';
import Filtro from "./components/Filtro";
import Header from "./components/Header"
import ListadoGastos from "./components/ListadoGastos";
import { delectGastoById, setGasto } from './gastosSlice';


import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import { setPresupuesto } from './presupuestoSlice';


const Presupuesto = () => {
    const dispatch = useDispatch();
    const { active: Presupuesto, mensaje, isValidPresupuesto } = useSelector((state) => state.Presupuesto);
    const { active: gasto, gastos } = useSelector((state) => state.gasto);
    const { presupuesto } = Presupuesto
    const [gastoEditar, setGastoEditar] = useState({});
    const [filtro, setFiltro] = useState('');
    const [gastosfiltrados, setGastosFiltrados] = useState([]);

    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem('presupuesto'));
        if (presupuestoLS) {
            dispatch(setPresupuesto(presupuestoLS))
        }

    }, []);

    useEffect(() => {
        const gast = localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
        dispatch(setGasto(gast))
        console.log(gastos);
    }, []);
    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
        }

    }, [gastoEditar])

    useEffect(() => {
        localStorage.setItem('presupuesto', presupuesto ?? 0);
    }, [presupuesto]);



    useEffect(() => {
        if (filtro) {
            const datosFiltrados = gastos.filter(gastos => gastos.Categoria === filtro);
            setGastosFiltrados(datosFiltrados)
        }
    }, [filtro]);



    useEffect(() => {
        localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
    }, [gastos]);


    const handleNuevoGasto = () => {
        dispatch(openModal({ title: "Agrega un Nuevo Gasto", bodyType: MODAL_BODY_TYPES.GASTO_ADD_NEW }))
    }

    const eliminarGasto = id => {
        dispatch(delectGastoById(id))
    }

    console.log(gastos)
    return (
        <div className=''>

            <Header />

            {isValidPresupuesto &&
                (
                    <>
                        <main>
                            <Filtro
                                filtro={filtro}
                                setFiltro={setFiltro}
                            />
                            <ListadoGastos
                                gastos={gastos}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                                filtro={filtro}
                                gastosfiltrados={gastosfiltrados}
                            />
                        </main>
                        <div htmlFor="my-modal" className="nuevo-gasto">
                            <img src={IconoNuevoGasto} alt="icono nuevo gasto"
                                onClick={handleNuevoGasto}
                            />
                        </div>

                    </>
                )}


        </div>

    )
}

export default Presupuesto