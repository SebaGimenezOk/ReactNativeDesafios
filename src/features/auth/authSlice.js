import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    use: null,
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reucers: {
        setUser: (state, action) => {

            return {
                user: action.payload.data.email,
                token: action.payload.data.idToken,
            }
        },
        clearUser: () => {
            return { user: null, token: null }
        }
    }
})
export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer 