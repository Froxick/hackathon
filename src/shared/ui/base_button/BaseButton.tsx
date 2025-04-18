import { ReactNode } from 'react';
import styles from './BaseButton.module.css';
export function BaseButton({children} : {children: ReactNode}){
	return(
		<button className={styles['main']}>
		    {children}
	    </button>
	);
}