// slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    username: string;
}

interface AuthState {
    user: null | User; // Define your User type
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice: any = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { registerUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
