import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PaintBrushIcon from '@heroicons/react/24/outline/PaintBrushIcon'

import { showNotification } from '../common/headerSlice'


const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: "Nuevo Prestamo", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}

function Leads() {

    const { leads } = useSelector(state => state.lead)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLeadsContent())
    }, [])



    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Not Interested</div>
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>
        else if (index % 5 === 3) return <div className="badge badge-accent">Need Followup</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const deleteCurrentLead = (index) => {
        dispatch(deleteLead({ index }))
        dispatch(showNotification({ message: "Lead Deleted!", status: 1 }))
    }

    return (
        <>

            <TitleCard title="Prestamos" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>E-mail</th>
                                <th>Creado el</th>
                                <th>Status</th>
                                <th>Monto</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                leads.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">

                                                    <div>
                                                        <div className="font-bold">{l.first_name}</div>
                                                        <div className="text-sm opacity-50">{l.last_name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.email}</td>
                                            <td>{moment(new Date()).add(-5 * (k + 2), 'days').format("DD MMM YY")}</td>
                                            <td>{getDummyStatus(k)}</td>
                                            <td>{l.last_name}</td>
                                            <td>
                                                <button className="btn btn-square btn-ghost bg-warning" onClick={() => deleteCurrentLead(k)}><PaintBrushIcon className="w-5 " /></button>
                                                <button className="btn btn-square btn-ghost bg-error" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5" /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}


export default Leads