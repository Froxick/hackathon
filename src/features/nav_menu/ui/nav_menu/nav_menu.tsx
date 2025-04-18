
import styles from './nav_menu.module.css';
import { NavItem } from '../../../../shared/ui/nav_item/nav_item';
import { PRIVATE_ROUTES_STUDENT } from '../../../../App/routers/config/routes.config';
import { ProfileLine } from '../../../../shared/ui/profile_line/profile_line';
export const NavMenu = () => {
	return (
		<div className={styles['main_div']}>
			<div className={styles['title_div']}>
				<p className={styles['title']}>
                    TempoPlan
				</p>
			</div>
			<div className={styles.content_div}>
				
				<NavItem text='Главная' icon='/hom.svg' link={PRIVATE_ROUTES_STUDENT.HOMEPAGE}/>
				<NavItem text='Расписание' icon='/plan.svg' link={PRIVATE_ROUTES_STUDENT.CALENDAR}/>
				<NavItem text='Профиль' icon='/profile.svg' link={PRIVATE_ROUTES_STUDENT.PROFILE}/>
				
			</div>
			<div className={styles['footer_div']}>
				<div className={styles['line_div']}>
					<ProfileLine info_text='Ворожев Н.C' icon='/profile.svg'/>
				</div>
			</div>
			
		
		</div>
	);
};