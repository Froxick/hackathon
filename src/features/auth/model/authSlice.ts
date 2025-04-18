import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../entities/user';

type AuthState = { 
    isAuth: boolean;
    user: User | null;
    isLoading: boolean;
    isLoaded: boolean;
}
const initialState: AuthState = {
	isAuth: false,
	user: null,
	isLoading: true,
	isLoaded: false
};


const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSucces(state, action: PayloadAction<{user: User, token: string}>){
			state.isAuth = true;
			state.user = action.payload.user;
			state.isLoading = false;
			state.isLoaded = true;
			localStorage.setItem('token', action.payload.token);
		},
		logout(state) {
			state.isAuth = false;
			state.user = null;
			state.isLoading = false;
			state.isLoaded = false;
			localStorage.removeItem('token');
		},
		loading(state, action: PayloadAction<{isLoading: boolean}>) {
			state.isLoading = action.payload.isLoading;
		},
		authComplete(state) {
			state.isLoading = false;
			state.isLoaded = true;
		},
		testAuthComplete(state) {
			state.isLoaded = true;
			state.isLoading = false;
			state.isAuth = true;
		}
	}
    
});
export const {authComplete,loading, logout, loginSucces,testAuthComplete} = authSlice.actions;
export const authReduser = authSlice.reducer;