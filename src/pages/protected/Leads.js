import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Leads from '../../features/prestamo'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Prestamo" }))
    }, [])


    return (
        <Leads />
    )
}

export default InternalPage