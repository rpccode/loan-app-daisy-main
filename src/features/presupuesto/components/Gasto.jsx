import React from 'react'
import { formatearFecha } from '../helpers';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import IconTrasporte from '../img/school-bus-transport-svgrepo-com.svg'
import TitleCard from '../../../components/Cards/TitleCard';
import { useDispatch } from 'react-redux';
import { openModal } from '../../common/modalSlice';
import { MODAL_BODY_TYPES } from '../../../utils/globalConstantUtil';

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
    const dispatch = useDispatch();

    const diccionarioIconos = {

        ahorro: IconoAhorro,
        comida: IconoComida,
        casa: IconoCasa,
        gastos: IconoGastos,
        ocio: IconoOcio,
        salud: IconoSalud,
        materiales: IconoGastos,
        equipos: IconoGastos,
        subscripciones: IconoSuscripciones,
        transporte: IconTrasporte,
    }

    const { Categoria, Nombre, Cantidad, Fecha } = gasto;

    const EditarGasto = () => {
        setGastoEditar(gasto)
        // dispatch(openModal({ title: "Edita tu Gasto", bodyType: MODAL_BODY_TYPES.GASTO_ADD_NEW }))

    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => EditarGasto(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => eliminarGasto(gasto.id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
    return (

        <div className='md:w-3/4 md:m-auto'>
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    <TitleCard title={Nombre} className=" ">
                        <div className=" flex justify-between   ">
                            <img
                                src={diccionarioIconos[Categoria]}
                                alt="Icono Gasto"
                                className='w-20 h-20 inline-block  m-2 justify-items-center  '
                            />
                            <div className=" flex justify-start md: w-2/3 flex-col ">
                                <p className=" text-2xl  font-semibold ">{Categoria}</p>
                                <p className="  text-lg ">
                                    Agregado el: {''}
                                    <span className='text-md text-primary' >{formatearFecha(Fecha)}</span>
                                </p>
                            </div>
                        </div>
                        <p className="flex justify-center  text-2xl w-full border-green-800  border mt-4 p-2 rounded-lg">${Cantidad}</p>
                    </TitleCard>
                </SwipeableListItem>
            </SwipeableList>
        </div>

    )
}

export default Gasto