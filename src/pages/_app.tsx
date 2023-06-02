import '../styles/globals.css'
import type {AppProps} from 'next/app'

import {wrapper} from '../store'
import {Provider} from "react-redux";

function MyApp({Component, ...rest}: AppProps) {
    //  TODO 2 STEP
    const {store, props} = wrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    )
}

export default MyApp

