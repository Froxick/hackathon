import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './App/routers/routers';
import { Provider } from 'react-redux';
import { store } from './App/store/store';
import { initAuth } from './App/init/initAuth';


const root = createRoot(document.getElementById('root') as HTMLElement);
async function init(){
	await initAuth();
	root.render(
		<StrictMode>
			<Provider store={store} >
				<RouterProvider router={router} />
			</Provider>
		</StrictMode>
	);
}
init();