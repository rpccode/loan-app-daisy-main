import React from 'react'
import { useSelector } from 'react-redux';
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = () => {
    const { isValidPresupuesto } = useSelector((state) => state.Presupuesto);
    return (
        <header className='bg-primary'>
            <h1 className='text-4xl'>Planificador de Gastos</h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto />
            ) : (
                <NuevoPresupuesto />
            )}
        </header>
    )
}

export default Header