import {  createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../../Layouts/AuthLayout/AuthLayout';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './config/routes.config';
import { AuthPage } from '../../Pages/AuthPage/AuthPage';
import { HomePage } from '../../Pages/HomePage/HomePage';
import { ProfilePage } from '../../Pages/ProfilePage/ProfilePage';
import { ProtectedRouter } from './components/ProtectedRouts';

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{
				path: PUBLIC_ROUTES.LOGIN,
				element: <AuthPage type='login' />
			},
			{
				path: PUBLIC_ROUTES.REGISTER,
				element: <AuthPage type='register' />
			}
		]
	},
	{
		element: <ProtectedRouter><MainLayout/></ProtectedRouter>,
		children: [
			{
				path: PRIVATE_ROUTES.HOMEPAGE,
				element: <HomePage />
			},
			{
				path: PRIVATE_ROUTES.PROFILE,
				element: <ProfilePage />
			}
		]
	}
]);