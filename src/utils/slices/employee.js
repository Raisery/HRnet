import { createSlice } from '@reduxjs/toolkit';


const { actions, reducer } = createSlice({
    name: 'employee',
    initialState: {
        data: []
    },
    reducers: {
        add: (draft, action) => {
            console.log(action.payload)
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