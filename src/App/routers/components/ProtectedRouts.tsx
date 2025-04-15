

import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../config/routes.config';
import { useAuth } from '../../../features/auth/lib/useAuth';
import { Loader } from '../../../shared/ui/loader/loader';



export function ProtectedRouter({children} :  {children: ReactNode}) {
	const location = useLocation();
	const {isAuth,isLoaded} = useAuth();
	console.log(isAuth,isLoaded);
	if(!isLoaded) {
		return(
			<Loader />
		);
	}
	if(!isAuth){
		return <Navigate to={PUBLIC_ROUTES.LOGIN} state={{from: location}} />;
	}
	return children;
}