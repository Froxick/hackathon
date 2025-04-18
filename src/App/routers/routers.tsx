import {  createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../../Layouts/AuthLayout/AuthLayout';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { PRIVATE_ROUTE_TEACHER, PRIVATE_ROUTES_ADMIN, PRIVATE_ROUTES_STUDENT, PUBLIC_ROUTES } from './config/routes.config';
import { AuthPage } from '../../Pages/AuthPage/AuthPage';
import { HomePage } from '../../Pages/HomePage/HomePage';
import { ProfilePage } from '../../Pages/ProfilePage/ProfilePage';
import { ProtectedRouter } from './components/ProtectedRouts';
import { AdminLayout } from '../../Layouts/AdminLayout/AdminLayout';
import { TeacherLayout } from '../../Layouts/TeacherLayout/TeacherLayout';
import { CalendarPage } from '../../Pages/CalendaerPage/CalendarPage';

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
		element: <ProtectedRouter alowedRole={['student']}><MainLayout/></ProtectedRouter>,
		children: [
			{
				path: PRIVATE_ROUTES_STUDENT.HOMEPAGE,
				element: <HomePage />
			},
			{
				path: PRIVATE_ROUTES_STUDENT.PROFILE,
				element: <ProfilePage />
			},{
				path: PRIVATE_ROUTES_STUDENT.CALENDAR,
				element: <CalendarPage />
			}
		]
	},
	{
		element: <ProtectedRouter alowedRole={['admin']}><AdminLayout/></ProtectedRouter>,
		children: [
			{
				path: PRIVATE_ROUTES_ADMIN.ADMINPAGE,
				element: <HomePage/>
			}
		
		]
	},
	{
		element: <ProtectedRouter alowedRole={['teacher']}><TeacherLayout/></ProtectedRouter>,
		children: [
			{
				path: PRIVATE_ROUTE_TEACHER.CALENDAR,
				element: <CalendarPage/>
			},
			{
				path: PRIVATE_ROUTE_TEACHER.HOMEPAGE,
				element: <HomePage/>
			}
		]
	}
]);