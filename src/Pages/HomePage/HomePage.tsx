import { BaseButton } from '../../shared/ui/base_button/BaseButton';
import { Title } from '../../shared/ui/title/title';
import styles from './HomePage.module.css';
export function HomePage(){
	return (
		<div className={styles.container}>
			<div className={styles.title_div}>
				<Title text='Главная'/>
			</div>
      
			<div className={styles.hello_div}>
				<p className={styles.text_hello}>Здравствуйте, Даниил Павлович!</p>
			</div>
      
			<div className={styles.content}>
				<p className={styles.context_text_1}>
          Добро пожаловать в систему {' '}
					<span className={styles.logo_name}>TempoPlan</span> <br/>
          Уральского промышленно-экономического техникума!
				</p>
        
				<div className={styles.content_container}>
					<div className={styles.text_div}>
						<p className={styles.text_div_text}>
              Данный сервис разработан студентами для удобства просмотра 
              и планирования расписания занятий
						</p>
						<BaseButton>Узнать больше</BaseButton>
					</div>
          
					<div className={styles.img_div}>
						<img 
							src='/home_image.png' 
							alt="Иллюстрация"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}