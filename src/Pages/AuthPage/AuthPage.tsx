import { LoginForm } from '../../features/auth/ui/LoginForm/LoginForm';
import { RegisterForm } from '../../features/auth/ui/RegisterForm/RegisterForm';
import { AuthPageProps } from './AuthPageInterface';

export function AuthPage({type} : AuthPageProps) {
	switch(type){
	case 'login' : 
		return (
			<div>
				<LoginForm />
			</div>
		);
	case 'register' : 
		return (
			<div>
				<RegisterForm />
			</div>
		);
	}
}