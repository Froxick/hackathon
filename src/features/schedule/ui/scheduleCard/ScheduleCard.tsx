import styles from './ScheduleCard.module.css';
interface ScheduleCardProps {
    title : string,
    class_room: string,
    class_type: string,
    teacher: string
}

export function ScheduleCard ({teacher,title,class_room,class_type} : ScheduleCardProps) {
	return (
		<div className={styles['main']}>
			<div className={styles['content']}>
				<div className={styles['title_div']}>
					<p className={styles['title_text']}>
						{title}
					</p> 
				</div>
				<div className={styles['teacher_div']}>
					<p className={styles['teacher_text']}>
						{teacher}
					</p>
				</div>
				<div className={styles['type_class_div']}>
					<p className={styles['type_text']}>
						{class_type}
					</p>
				</div>
			</div>
			<div className={styles['class_div']}>
				<p className={styles['class_text']}>
					{class_room}
				</p>
			</div>
		</div>
	);
}