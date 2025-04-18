import { Link } from 'react-router-dom';
import { useLogin } from '../../lib/useLogin';
import styles from './LoginForm.module.css';
import { PUBLIC_ROUTES } from '../../../../App/routers/config/routes.config';
export const LoginForm = () => {
	const {onSubmit,errors,register} = useLogin();
	
	// return(
	// 	<div>
	// 		<form onSubmit={onSubmit}>
	// 			<input {...register('email',{required: 'Email обязателен'})}
	// 				placeholder='Почта'/>
	// 			{errors.email && <span>{errors.email.message}</span>}
	// 			<input {...register('password',{required: 'Пароль обязателен'})}
	// 				placeholder='Пароль'/>
	// 			<button type='submit' >Войти</button>
	// 		</form>
	// 	</div>
	// );


	return( 
		<div className={styles['pon2']}>
			<div className={styles['main']}>
				<form onSubmit={onSubmit}>
					<h1 className={styles['reg']}>Вход</h1>
					<div className={styles['input']}>
						<p className={styles['pochta']}>Почта</p>
						<img className={styles['icon1']} src="/mail.svg" alt="mail"/>
						<input className={styles['PlcEm']} type="text" id="Email" {...register('email',{required: 'Email обязателен'})} placeholder="Почта" />
						
					</div>
					<div className={styles['input']}>
						<p className={styles['parol']}>Введите пароль</p>
						<img className={styles['icon3']} src="/bx-lock-alt.svg" alt="lock"/>
						<input className={styles['PlcPass']} type="password" id="Password" {...register('password',{required: 'Пароль обязателен'})} placeholder="Пароль" />
					
					</div>
					<div className={styles['login']}>
						<button type="submit" className={styles['btn']}>Войти</button>
						<p className={styles['reg']}>Нет аккаунта?<Link to={PUBLIC_ROUTES.REGISTER}>    Создать</Link></p>
					</div>
				</form>
			</div>
			<div className={styles['slide']}>
				<img className={styles['PicLog']} src="/login.svg" alt="lOg"/>
				<img className={styles['vect']} src="/Vector.svg" alt="vector"/>
				<p className={styles['text_1']}>TempoPlan</p>
				<p className={styles['text_2']}>Планировщик расписания занятий</p>
			</div>
		</div>
	);
};