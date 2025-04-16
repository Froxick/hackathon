import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTE_TEACHER, PRIVATE_ROUTES_ADMIN, PRIVATE_ROUTES_STUDENT } from '../../../App/routers/config/routes.config';
import { useAppDispath, useAppSelector } from '../../../App/store/store';
import { UserRole } from '../../../entities/user';
import { AuthApi } from '../api/authApi';
import { authComplete, loginSucces, logout } from '../model/authSlice';

export const useAuth = () => {
	const dispatch = useAppDispath();
	const navigate = useNavigate();
	const {isAuth,isLoaded,isLoading, user} = useAppSelector((state) => state.auth);
	const getRole = (role: UserRole) => {
		switch(role){
		case 'admin': return PRIVATE_ROUTES_ADMIN.ADMINPAGE ;
		case 'student': return PRIVATE_ROUTES_STUDENT.HOMEPAGE;
		case 'teacher' :return PRIVATE_ROUTE_TEACHER.HOMEPAGE;
		default: return '/';
		}
	};
	const loginFnc = async(email: string, password: string ) => {
		try {
			const login_user_data = await AuthApi.login({email,password});
			if(login_user_data != undefined){
				const {user, token} = login_user_data;
				dispatch(loginSucces({user,token}));
				navigate(getRole(user.role));
			}
		} catch (error) {
			dispatch(
				authComplete()
			);
			throw error;
		}
	};
	const registerFnc = async(email: string,password: string,  contract_number: string) => {
		try {
			const user_register_data = await AuthApi.register({email,password,contract_number});
			if(user_register_data != undefined){
				const {user , token } = user_register_data;
				dispatch(loginSucces({user,token}));
				navigate(getRole(user.role));
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