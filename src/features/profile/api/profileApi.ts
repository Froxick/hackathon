import { User } from '../../../entities/user';
import { apiClient } from '../../../shared/api/ApiClient';
import { USER_API_URL } from '../../../shared/api/apiConfigUrl';

export const ProfileApi = {
	async update_password(password: string, new_password: string){
		try{
			const res = await apiClient.put<{user: User, token: string}>(USER_API_URL.raname,{password,new_password});
			return res.data;
		}catch(e){
			console.log(e);
		}
	},
	async delete_user(){
		try{
			const res = await apiClient.delete(USER_API_URL.delete);
			if(res){
				return true;
			}
			return false;
		}catch(e){
			console.log(e);
		}
	}
};