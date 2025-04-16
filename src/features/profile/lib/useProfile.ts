import { useNavigate } from 'react-router-dom';
import { useAppDispath } from '../../../App/store/store';
import { loginSucces, logout } from '../../auth/model/authSlice';
import { ProfileApi } from '../api/profileApi';

export const useProfile = () => {
	const dispatch = useAppDispath();   
	const navigate = useNavigate();
	const update_password_fnc = async (password: string, new_password:string) => {
		try{
			const update_user = await ProfileApi.update_password(password,new_password);
			if(update_user!= undefined){
				const {user,token} = update_user;
				if(user && token)
					dispatch(loginSucces({user,token}));
			}
		}
		catch(e){
			return 'Ошибка при смене пароля';
			throw e;
		}
	};
	const delete_user_fnc = async () => {
		try{
			const delete_check = await ProfileApi.delete_user();
			if(delete_check){
				dispatch(logout());
				navigate('/login');
			}
		}catch(e){
            
			return 'Ошибка при удалении';
			throw e;
		}
	};

	return {
		update_password_fnc,
		delete_user_fnc
	};
};