import { NavLink } from 'react-router-dom';
import styles from './nav_item.module.css';
interface NavItemProps {
    icon: string,
    text: string,
	link: string
}
export function NavItem({ text, icon, link }: NavItemProps) {
	return (
	  <NavLink 
			to={link} 
			className={({ isActive }) => 
		  isActive 
					? `${styles.main_div} ${styles.active}` 
					: styles.main_div
			}
	  >
			<div className={styles.icon_div}>
		  <img 
					src={icon} 
					className={styles.icon} 
					alt="Иконка" 
		  />
			</div>
			<p className={styles.text}>{text}</p>
	  </NavLink>
	);
};