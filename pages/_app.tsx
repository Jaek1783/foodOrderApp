//_app.tsx
import Layout from '../components/Layout/layout';
import '../styles/globals.css';
import React from 'react';
import type {AppProps} from 'next/app';
const MyApp = ({Component, pageProps}:AppProps) => {
    return <Layout>
                <Component {...pageProps}/>
            </Layout>
    
}

export default MyApp;