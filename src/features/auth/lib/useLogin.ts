import { useForm } from 'react-hook-form';
import { useAuth } from './useAuth';
import { LoginFormDataType } from '../types/LoginFormDataType';
import { emailRegex } from '../../../shared/validate/EmailRegex';
import { passwordRegex } from '../../../shared/validate/PasswordRegex';

export const useLogin = () => {
	const {loginFnc} = useAuth();

	const {
		register,
		handleSubmit,
		formState: {errors},
		setError
	} = useForm<LoginFormDataType>();


	const onSubmit = handleSubmit(async (data) =>{
		if(!emailRegex.test(data.email)){
			setError('root', {
				type: 'manual',
				message: 'Неверный формат email'
			});
			return;
		}
		if(!passwordRegex.test(data.password)){
			setError('root', {
				type: 'manual',
				message: 'Неверный формат пароля'
			});
			return;
		}
		try{
			await loginFnc(data.email,data.password);
		}catch(e){
			setError('root', {
				type: 'manual',
				message: 'Неверный email или пароль'
			});
			throw e;
		}
	});  
	return {register,errors,onSubmit};
};