import React from 'react'
import { useSelector } from 'react-redux';
import TitleCard from '../../../components/Cards/TitleCard';
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = () => {
    const { isValidPresupuesto } = useSelector((state) => state.Presupuesto);
    return (
        <>

            {isValidPresupuesto ? (
                <div className='md:w-3/4 md:m-auto'>
                    <TitleCard title="Planificador de Gastos" topMargin="mt-2" >
                        <ControlPresupuesto />
                    </TitleCard>
                </div>

            ) : (
                <TitleCard title="Nuevo Presupuesto" topMargin="mt-2" >
                    <NuevoPresupuesto />
                </TitleCard>
            )}
        </>
    )
}

export default Header