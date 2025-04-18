import { useWeekSelector } from '../../features/schedule/lib/useWeekSelector';
import { DatePicker } from '../../features/schedule/ui/datePicker/DatePicker';
import { GroupPicker } from '../../features/schedule/ui/group_picker/GroupPicker';
import { ScheduleLineBar } from '../../features/schedule/ui/scheduleLineBar/ScheduleLineBar';
import { ScheduleView } from '../../features/schedule/ui/scheduleView/ScheduleView';
import { Title } from '../../shared/ui/title/title';
import styles from './CalendarPage.module.css';

export const CalendarPage = () => {
	const {weekRange} = useWeekSelector();
	return (
		
		<div>
			<div className={styles['header']}>
				<Title text="Расписание"  />
				<div className={styles['date_pick']}>
					<DatePicker />
				</div>
				<div className={styles['group_selector']}>
					<GroupPicker />
				</div>

			</div>
			
			<div className={styles['data_div']}>
				<p className={styles['pick_date_text']}>
					{weekRange.start} - {weekRange.end}
				</p>
			</div>
			<div>
				<ScheduleLineBar />
			</div>
			<div className={styles['calendar_div']}>
				<ScheduleView />
			</div>
		</div>
	);
};