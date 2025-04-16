

import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../config/routes.config';
import { useAuth } from '../../../features/auth/lib/useAuth';
import { Loader } from '../../../shared/ui/loader/loader';
import {  UserRole } from '../../../entities/user';



export function ProtectedRouter({children, alowedRole} :  {children: ReactNode, alowedRole: UserRole[]}) {
	const location = useLocation();
	const {isAuth,isLoaded, user} = useAuth();
	console.log(isAuth,isLoaded);
	if(!isLoaded) {
		return(
			<Loader />
		);
	}
	if(!isAuth){
		return <Navigate to={PUBLIC_ROUTES.LOGIN} state={{from: location}} />;
	}
	if(user?.role && !alowedRole.includes(user.role)){
		return <Navigate to='/' replace />;
	}
	
	return children;
}