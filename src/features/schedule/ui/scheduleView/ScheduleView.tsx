import { ScheduleCard } from '../scheduleCard/ScheduleCard';
import styles from './ScheduleView.module.css';
const times = [
	'9:00-10:30',
	'10:45-12:15', 
	'13:00-14:30',
	'14:40-16:10',
	'16:20-17:50',
	'18:00-19:30'
];
  
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  
const scheduleData = {
	'Понедельник': [
		{ time: 0, subject: 'Разработка программных модулей', teacher: 'Старцев К.М.', type: 'Лекция', class_room: '308' },
		{ time: 1, subject: 'Разработка программных модулей', teacher: 'Старцев К.М.', type: 'Практика',class_room: '308' }
	],
	'Вторник': [
		{ time: 2, subject: 'Разработка программных модулей', teacher: 'Старцев К.М.', type: 'Семинар',class_room: '308' }
	]
};
  
export function ScheduleView() {
	return (
		<div className={styles.gridContainer}>
			
			<div className={styles.corner}></div>

			
			{days.map((day, index) => (
				<div 
					key={day} 
					className={styles.dayHeader}
					style={{ gridColumn: index + 2 }}
				>
					<div className={styles['day_div']}>
						{day}
					</div>
				</div>
			))}

			
			{times.map((time, index) => (
				<div
					key={time}
					className={styles.timeCell}
					style={{ gridRow: index + 2 }}
				>
					{time}
				</div>
			))}

			
			{days.map((day, dayIndex) => 
				times.map((_, timeIndex) => {
					const lesson = scheduleData[day as keyof typeof scheduleData]
						?.find(l => l.time === timeIndex);
          
					return (
						<div
							key={`${day}-${timeIndex}`}
							className={styles.lessonCell}
							style={{
								gridRow: timeIndex + 2,
								gridColumn: dayIndex + 2
							}}
						>
							{/* {lesson && (
								<div className={styles.lessonCard}>
									<h4>{lesson.subject}</h4>
									<p>{lesson.teacher}</p>
									<span>{lesson.type}</span>
								</div>
							)} */
								lesson && (
									<ScheduleCard title={lesson.subject} teacher={lesson.teacher} class_room={lesson.class_room} class_type={lesson.type} />
								)
							}
						</div>
					);
				})
			)}
		</div>
	);
}