import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'
import Cuotas from '../../../features/Cuotas'

function InternalPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Pagos de Hoy" }))
    }, [])

    return (
        <Cuotas />
    )
}

export default InternalPage