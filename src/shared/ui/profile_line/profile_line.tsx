import styles from './profile_line.module.css';
interface ProfileLineProps {
    info_text : string,
    icon: string
}
export function ProfileLine ({info_text, icon} : ProfileLineProps){
	return (
		<div className={styles['main_div']}>
			<div className={styles['icon_div']}> 
				<img src={icon}/>
			</div>
			<p className={styles['text']}>
				{info_text}
			</p>
		</div>
	);
}