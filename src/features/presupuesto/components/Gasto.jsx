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

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
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

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
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
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={diccionarioIconos[Categoria]}
                            alt="Icono Gasto"
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria">{Categoria}</p>
                            <p className="nombre-gasto">{Nombre}</p>
                            <p className="fecha-gasto">
                                Agregado el: {''}
                                <span>{formatearFecha(Fecha)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${Cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto