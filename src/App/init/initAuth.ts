import { authComplete, testAuthComplete  } from '../../features/auth/model/authSlice';
import { checkAuth } from '../../features/auth/model/authThunk';
import { store } from '../store/store';

export const initAuth =  async() => {
	try{
		// await store.dispatch(checkAuth());
		store.dispatch(testAuthComplete());
	}catch(e){
		console.log(e, 'Auth error');
	}finally{
		store.dispatch(authComplete());
	}
};