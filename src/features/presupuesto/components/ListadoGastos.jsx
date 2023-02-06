import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosfiltrados

}) => {

    return (
        <div className='mt-4 '>

            {
                filtro ? (
                    <>
                        {/* <h2 className='text-xl'>{gastosfiltrados.length ? 'Gastos' : 'No hay Gastos Aún'}</h2> */}

                        {gastosfiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}



                    </>

                ) : (
                    <>
                        {/* <h2 className='text-4xl mb-2'>{gastos.length ? 'Gastos' : 'No hay Gastos Aún'}</h2> */}

                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}



                    </>


                )
            }

        </div>
    )
}

export default ListadoGastos