import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authReduser } from '../../features/auth/model/authSlice';
import { weekReduser } from '../../features/schedule/model/weekSlice';
import { groupReduser } from '../../features/schedule/model/groupSlice';

export const store = configureStore({
	reducer: {
		auth: authReduser,
		week: weekReduser,
		group: groupReduser
	}
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispath = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;