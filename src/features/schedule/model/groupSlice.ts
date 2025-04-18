import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GroupState {
  group: string;
}

const initialState: GroupState = {
	group: ''
};

const groupSlice = createSlice({
	name: 'group',
	initialState,
	reducers: {
		setGroup: (state, action: PayloadAction<string>) => {
			state.group = action.payload;
		},
		resetGroup: (state) => {
			state.group = '';
		}
	}
});

export const { setGroup, resetGroup } = groupSlice.actions;
export const groupReduser = groupSlice.reducer;