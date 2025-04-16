import { useRegister } from '../../lib/useRegister';

export function RegisterForm () {
	const {onSubmit,errors,register} = useRegister();
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input {...register('email',{required: 'Email обязателен'})}
					placeholder='Почта'/>
				{errors.email && <span>{errors.email.message}</span>}
				<input {...register('email',{required: 'Номер договора обязателен'})}
					placeholder='Номер договора'/>
				<input {...register('password',{required: 'Пароль обязателен'})}
					placeholder='Пароль'/>
				<input {...register('retry_password',{required: 'Пароль обязателен'})}
					placeholder='Повтор пароля'/>

				<button type='submit' >Создать</button>
			</form>
		</div>
	);
}