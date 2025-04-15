import { User } from '../../../entities/user';
import { apiClient } from '../../../shared/api/ApiClient';
import { USER_API_URL } from '../../../shared/api/apiConfigUrl';

type loginData = {
    email: string,
    password: string,
}
type registerData = loginData & {
    age: number,
    username: string
}

export const AuthApi = {
	async login(data: loginData) {
		try{
			const res = await apiClient.post<{user: User, token:string}>(USER_API_URL.login, data);
			return res.data;
		}catch(e){
			console.log(e);
		}
	},
	async register(data: registerData){
		try{
			const res = await apiClient.post<{user: User, token: string}>(USER_API_URL.register,data);
			return res.data;
		}catch(e){
			console.log(e);
		}
		
	},
	async checkAuth(){
		try{
			const res = await apiClient.get<{user: User}>(USER_API_URL.checkAuth);
			return res.data;
		}catch(e){
			console.log(e);
		}
		
	}
};