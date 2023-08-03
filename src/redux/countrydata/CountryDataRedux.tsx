import { createSlice } from "@reduxjs/toolkit"

export interface countryState {
    isLoading: boolean
    error: string
    data: string
    isDarkMode: boolean
}

const initialState: countryState = {
    isLoading: false,
    error: "",
    data: "",
    isDarkMode: false
}

export const countryRedux = createSlice({
    name: "countryRedux",
    initialState,
    reducers: {
        countryDataRequest: (state: any) => {
            const newState = {
                ...state,
                isLoading: true,
            }
            return newState
        },
        countryDataSuccess: (state: any, action: any) => {
            const responce = action.payload
            const newState = {
                ...state,
                isLoading: false,
                data: responce,
            }
            return newState
        },
        countryDataFailure: (state: any, action: any) => {
            const responce = action.payload
            const newState = {
                ...state,
                isLoading: false,
                error: responce,
            }
            return newState
        },
        nameDetailsRequest: (state: any) => {
            const newState = {
                ...state,
                isLoading: true,
            }
            return newState
        },
        nameDetailsSuccess: (state: any, action: any) => {
            const responce = action.payload
            const newState = {
                ...state,
                isLoading: false,
                data: responce,
            }
            return newState
        },
        nameDetailsFailure: (state: any, action: any) => {
            const responce = action.payload
            const newState = {
                ...state,
                isLoading: false,
                error: responce,
            }
            return newState
        },

        countrySetState: (state: any, action: any) => {
            const newState = {
                ...state,
            }
            newState[action.payload.key] = action.payload.value
            return newState
        },
    },
})

export const { countrySetState, nameDetailsFailure, nameDetailsSuccess, nameDetailsRequest, countryDataFailure, countryDataSuccess, countryDataRequest } =
    countryRedux.actions

export default countryRedux.reducer
