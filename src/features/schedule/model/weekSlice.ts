import { createSlice } from '@reduxjs/toolkit';

interface WeekState {
  startDate: string; 
}

const getInitialMonday = () => {
	const date = new Date();
	const day = date.getDay();
	const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
	return new Date(date.setDate(diff)).toISOString();
};

const initialState: WeekState = {
	startDate: getInitialMonday()
};

const weekSlice = createSlice({
	name: 'week',
	initialState,
	reducers: {
		setPrevWeek(state) {
			const date = new Date(state.startDate);
			date.setDate(date.getDate() - 7);
			state.startDate = date.toISOString();
		},
		setNextWeek(state) {
			const date = new Date(state.startDate);
			date.setDate(date.getDate() + 7);
			state.startDate = date.toISOString();
		}
	}
});

export const { setPrevWeek, setNextWeek } = weekSlice.actions;
export const weekReduser = weekSlice.reducer;