import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { wrapper } from '../store'

function MyApp({Component, pageProps}: AppProps) {
	return (
		//  TODO 3 STEP - убрать Provider. Странное решение
		// <Provider store={store}>
		// 	<Component {...pageProps} />
		// </Provider>

	<Component {...pageProps} />
	)
}

//  TODO 2 STEP
export default wrapper.withRedux(MyApp)
