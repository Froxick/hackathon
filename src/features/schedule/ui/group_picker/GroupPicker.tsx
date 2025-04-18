
import styles from './GroupPicker.module.css';

import { useGroupSelector } from '../../lib/useGroupSelector';
export function GroupPicker() {
	
  
	const {
		inputValue,
		showAccept,
		handleInputChange,
		handleAccept,
		handleReset
	  } = useGroupSelector();
	
	  return (
		<div className={styles.main}>
		  <div className={styles.input_div}>
				<img src='/group.svg' className={styles.icon_1} alt="Группа" />
			
				<input
			  value={inputValue}
			  onChange={handleInputChange}
			  placeholder='Введите группу'
			  className={styles.input}
				/>
			
				{inputValue && (
			  <div 
						onClick={handleReset}
						className={styles.button_2}
						aria-label="Сбросить группу"
			  >
						<img src="/clear.svg" alt="Очистить" />
			  </div>
				)}
		  </div>
		  
		  {showAccept && (
				<div 
			  onClick={handleAccept}
			  className={styles.button}
			  aria-label="Подтвердить выбор группы"
				>
			  <img src="/check.svg" alt="Подтвердить" />
				</div>
		  )}
		</div>
	  );
}