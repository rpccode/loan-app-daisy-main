import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'
import Presupuesto from '../../../features/presupuesto'




const InternalPage = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setPageTitle({ title: "Presupuesto" }))
    }, [])

    return (
        <div className=''>
            <Presupuesto />
        </div>
    )
}

export default InternalPage