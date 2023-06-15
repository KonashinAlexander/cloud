import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface formState {
    Nickname: string,
    Name: string,
    Surname: string,
    Phone: string,
    Email: string,
    Sex: string,
    advantages: object[],
    radio: number,
    checkbox: string[],
    About: string,
}


const initialState = {
    Nickname: '',
    Name: '',
    Surname: '',
    Phone: '',
    Email: '',
    Sex: '',
    advantages: [{ advantage: '' }],
    radio: 1,
    checkbox: [],
    About: '',
}



const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        apdateAction: (state, action: PayloadAction<object>) => {
            const newState = action.payload
            state = Object.assign(state, newState)
        },
    }
})

export const { apdateAction } = formSlice.actions
export default formSlice.reducer