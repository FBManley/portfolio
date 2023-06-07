import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import fetchPortfolio from rails api

const initialState = {
    portfolio: [],

}

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                portfolio: action.payload
            }
        default:
            return state
    }
}