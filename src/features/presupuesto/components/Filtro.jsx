import { useEffect, useState } from 'react'
import SelectBox from '../../../components/Input/SelectBox'



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


const Filtro = ({ filtro, setFiltro }) => {
    const [gastoObj, setgastoObj] = useState(filtro)

    return (
        <div className=''>
            <form >
                <div className='w-full'>
                    {/* <label className='text-2xl md:text-4xl'>Filtrar Gastos</label> */}
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                        className='select  select-primary   w-full '
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