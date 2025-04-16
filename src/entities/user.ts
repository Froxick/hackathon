
export type UserRole = 'admin' | 'student' | 'teacher'
export interface User {
    email: string,
    FirstName: string,
    LastName: string,
    patronymic: string,
    role: UserRole
    group?: string,

}