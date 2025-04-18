export const PUBLIC_ROUTES = {
	LOGIN: '/login',
	REGISTER: '/register'
} as const;

export const PRIVATE_ROUTES_STUDENT = {
	HOMEPAGE: '/',
	PROFILE: '/profile',
	CALENDAR: '/student/calendar'
	
} as const;

export const PRIVATE_ROUTES_ADMIN = {
	ADMINPAGE: '/admin/home'
} as const;

export const PRIVATE_ROUTE_TEACHER = {
	HOMEPAGE: '/teacher/home',
	CALENDAR: '/teacher/calendar' 
}as const; 