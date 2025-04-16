import { useLogin } from '../../lib/useLogin';

export const LoginForm = () => {
	const {onSubmit,errors,register} = useLogin();
	return(
		<div>
			<form onSubmit={onSubmit}>
				<input {...register('email',{required: 'Email обязателен'})}
					placeholder='Почта'/>
				{errors.email && <span>{errors.email.message}</span>}
				<input {...register('password',{required: 'Пароль обязателен'})}
					placeholder='Пароль'/>
				<button type='submit' >Войти</button>
			</form>
		</div>
	);
};