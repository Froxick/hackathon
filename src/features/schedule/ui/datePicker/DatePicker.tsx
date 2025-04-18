import { useWeekSelector } from '../../lib/useWeekSelector';
import styles from './DatePicker.module.css';
// interface DatePickerProps {
//     prevFnc: () => void;
//     nextFnc: () => void;
//     date: string
// }
export function DatePicker () {
	const {handleNextWeek,handlePrevWeek,weekRange} = useWeekSelector();
	return (
		<div className={styles['main']}>
			<div className={styles['item']}  onClick={handlePrevWeek}>
				<img className={styles['icon']} src="/left_arrow.svg"/>
			</div>
			<p className={styles['text']}>{weekRange.start} <br/> {weekRange.end }</p>
			
			<div className={styles['item']} onClick={handleNextWeek}>
				<img className={styles['icon']} src="/right_arrow.svg" />
			</div>
			
			
		</div>
	);
}

