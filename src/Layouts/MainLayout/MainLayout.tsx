import { Outlet } from 'react-router-dom';
import { NavMenu } from '../../features/nav_menu/ui/nav_menu/nav_menu';
import styles from './MainLayout.module.css';
export function MainLayout(){
	return(
		<div className={styles['main_div']}>
			<div className={styles.main_div}>
				<NavMenu />
				<div className={styles.content}>
					<Outlet />
				</div>
			</div>
           
		</div>
	);
}