import styles from './ScheduleLineBar.module.css';
export const ScheduleLineBar = () => {
	return(
		<div className={styles['main_div']}>
			<div className={styles['item']}>
				<div className={styles['circl_1']}>
                    
				</div>
				<p className={styles['text']}>- Запланированна</p>
			</div>
			<div className={styles['item']}>
				<div className={styles['circl_2']}>
                    
				</div>
				<p className={styles['text']}>- Идёт</p>
			</div>
			<div className={styles['item']}>
				<div className={styles['circl_3']}>
                    
				</div>
				<p className={styles['text']}>- Закончилась</p>
			</div>
		</div>
	);
};