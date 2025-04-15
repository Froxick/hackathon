import { AppDispatch } from '../../../App/store/store';
import { AuthApi } from '../api/authApi';
import { authComplete, loginSucces, logout } from './authSlice';

export const checkAuth = () => async(dispatch: AppDispatch) => {
	try{
		const token = localStorage.getItem('token');
		if(!token){
			dispatch(authComplete());
			return;
		}
		const data = await AuthApi.checkAuth();
		if(data != undefined){
			const user = data.user;
			if(user){
				dispatch(loginSucces({user,token}));
				return;
			}
			
		}
	}catch(e){
		dispatch(logout());
		throw e;
	}
	finally{
		dispatch(authComplete());
	}
};