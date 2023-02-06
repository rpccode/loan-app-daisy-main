import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getLoansContent = createAsyncThunk('/Loans/content', async () => {
    const response = await axios.get('/api/users?page=2', {})
    return response.data;
})

export const LoansSlice = createSlice({
    name: 'Loans',
    initialState: {
        isSaving: false,
        isEditing: false,
        isLoading: false,
        Loans: [],
        active: {
            id: '',
            interes: 0,
            numero_cuotas: 0,
            saldo_pendiente: 0,
            monto_prestado: 0,
            fecha_otorgamiento: '',
            fecha_vencimiento: '',
            usuario_id: '',
            cliente_id: '',
            estado: 1
        }

    },
    reducers: {


        addNewLoan: (state, action) => {
            state.Loans.push(action.payload)
            state.isSaving = false
        },

        updateLoans: (state, action) => {
            state.isSaving = false;
            state.Loans = state.Loans.map((Loan) => {
                if (Loan.id === action.payload.id) {
                    return action.payload;
                }

                return Loan;
            });
            ///mostrar mensage de actulaizacion
            state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
        },
        clearLoanLogout: (state) => {
            state.isSaving = false;
            state.messageSave = "";
            state.Loans = [];
            state.active = null;
        },
        clearLoanActive: (state, action) => {
            state.active = action.payload;
            state.isEditing = false
        },
        delectLoansById: (state, action) => {
            state.Loans = state.Loans.filter(
                (loan) => loan.id !== action.payload
            );
            state.active = null;
        },
        // deleteLoan: (state, action) => {
        //     let { index } = action.payload
        //     state.Loans.splice(index, 1)
        // }
    },

    extraReducers: {
        [getLoansContent.pending]: state => {
            state.isLoading = true
        },
        [getLoansContent.fulfilled]: (state, action) => {
            state.Loans = action.payload.data
            state.isLoading = false
        },
        [getLoansContent.rejected]: state => {
            state.isLoading = false
        },
    }
})

export const {
    addNewLoan,
    updateLoans,
    clearLoanLogout,
    clearLoanActive,
    delectLoansById,
    deleteLead
} = LoansSlice.actions

export default LoansSlice.reducer