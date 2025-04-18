import styls from './title.module.css';
interface titleProps {
    text: string
}
export function Title({text} : titleProps){
	return(
		<p className={styls['title']}>
			{text}
		</p>
	);
}