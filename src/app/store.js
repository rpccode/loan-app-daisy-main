import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/prestamo/leadSlice'
import { gastoSlice } from '../features/presupuesto/gastosSlice'
import { presupuestoSlice } from '../features/presupuesto/presupuestoSlice'

const combinedReducer = {
    header: headerSlice,
    rightDrawer: rightDrawerSlice,
    modal: modalSlice,
    lead: leadsSlice,
    Presupuesto: presupuestoSlice.reducer,
    gasto: gastoSlice.reducer
}

export default configureStore({
    reducer: combinedReducer
})