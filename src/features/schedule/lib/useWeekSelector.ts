
import { format } from 'date-fns';
import { useAppDispath, useAppSelector } from '../../../App/store/store';
import { setNextWeek, setPrevWeek } from '../model/weekSlice';

export const useWeekSelector = () => {
	const dispatch = useAppDispath();
	const startDate = useAppSelector((state) => state.week.startDate);

	const handlePrevWeek = () => dispatch(setPrevWeek());
	const handleNextWeek = () => dispatch(setNextWeek());

	const getWeekRange = () => {
		const start = new Date(startDate);
		const end = new Date(start);
		end.setDate(start.getDate() + 6);
    
		return {
			start: format(start, 'dd.MM.yyyy'),
			end: format(end, 'dd.MM.yyyy')
		};
	};

	return {
		weekRange: getWeekRange(),
		handlePrevWeek,
		handleNextWeek,
		currentWeekStart: startDate
	};
};