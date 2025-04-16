import { useForm } from 'react-hook-form';
import { useAuth } from './useAuth';
import { RegisterFormDataType } from '../types/RegisterFormDataType';


export const useRegister = () => {
	const {registerFnc} = useAuth();

	const {
		register,
		handleSubmit,
		formState: {errors},
		setError
	} = useForm<RegisterFormDataType>();

	const onSubmit = handleSubmit(async (data) => {
		if(data.password != data.password){
			setError('root',{
				type: 'manual',
				message: 'Пароли не совпадают'
			});
			return;
		}
		try{
			await registerFnc(data.email,data.password,data.contract_number);
		}catch(e){
			setError('root', {
				type: 'manual',
				message: 'Неверный номер договора или email'
			});
			throw e;
		}
		
	});
	return {
		register,
		errors,
		onSubmit
	};
};