//_app.tsx
import Layout from '../components/Layout/layout';
import '../styles/globals.css';
import React from 'react';
import type {AppProps} from 'next/app';
import { store } from '../store/store';
import {Provider} from 'react-redux';
const MyApp = ({Component, pageProps}:AppProps) => {
    return <Provider store={store}>
                        <Layout>
                            <Component {...pageProps}/>
                        </Layout>
           </Provider>


    
}

export default MyApp;