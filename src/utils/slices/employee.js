import { createSlice } from '@reduxjs/toolkit';
import { EXEMPLE } from '../constant';


const { actions, reducer } = createSlice({
    name: 'employee',
    initialState: {
        data: EXEMPLE
    },
    reducers: {
        add: (draft, action) => {
            const row = {
                id: draft.data.length+1,
                ...action.payload
            }
            draft.data.push(row)
        }       
    }
})

export const {add} = actions

export default reducer