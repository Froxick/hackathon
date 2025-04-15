import { useAppDispath, useAppSelector } from '../../../App/store/store';
import { AuthApi } from '../api/authApi';
import { authComplete, loginSucces, logout } from '../model/authSlice';

export const useAuth = () => {
	const dispatch = useAppDispath();
	const {isAuth,isLoaded,isLoading, user} = useAppSelector((state) => state.auth);

	const loginFnc = async(email: string, password: string ) => {
		try {
			const login_user_data = await AuthApi.login({email,password});
			if(login_user_data != undefined){
				const {user, token} = login_user_data;
				dispatch(loginSucces({user,token}));
			}
		} catch (error) {
			dispatch(
				authComplete()
			);
			throw error;
		}
	};
	const registerFnc = async(email: string,username: string, password: string, age: number ) => {
		try {
			const user_register_data = await AuthApi.register({email,username,password,age});
			if(user_register_data != undefined){
				const {user , token } = user_register_data;
				dispatch(loginSucces({user,token}));
			}
		} catch (error) {
			dispatch(authComplete());
			throw error;
		}
	};
	const checkAuthFnc = async( ) => {
		const token = localStorage.getItem('token');
		if(!token){
			dispatch(authComplete());
			return;
		}
		try{
			const user_check_data = await AuthApi.checkAuth();
			if(user_check_data != undefined){
				const {user } = user_check_data;
				dispatch(loginSucces({user,token}));
			}
		}catch(error){
			dispatch(logout());
			throw error;
		}
	};
	const logoutFnc = () => {
		dispatch(logout());
	};


	return {
		user,
		isAuth,
		isLoaded,
		isLoading,
		loginFnc,
		registerFnc,
		checkAuthFnc,
		logoutFnc
	};
};