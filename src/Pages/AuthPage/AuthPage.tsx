import { AuthPageProps } from './AuthPageInterface';

export function AuthPage({type} : AuthPageProps) {
	switch(type){
	case 'login' : 
		return (
			<div>
                login form
			</div>
		);
	case 'register' : 
		return (
			<div>
                register form
			</div>
		);
	}
}