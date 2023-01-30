import { useEffect, useState } from 'react'

const Filtro = ({ filtro, setFiltro }) => {
    return (
        <div className='filtros sombra contenedor'>
            <form >
                <div className='campo'>
                    <label className='text-2xl md:text-4xl'>Filtrar Gastos</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="">-- Todas las Categorias --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="materiales">Materiales</option>
                        <option value="equipos">Equipos</option>
                        <option value="subscripciones">Subscripciones</option>
                        <option value="transporte">Transporte o Combustible</option>
                    </select>
                </div>
            </form>

        </div>
    )
}

export default Filtro