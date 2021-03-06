import Head from 'next/head'
import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>My App</title>
        </Head>
        <Header />
        <div className="container mx-auto mt-10 bg-white p rounded-md bg-opacity-20">
            {children}
        </div>
        <Footer />
        </>
    );
}
 
export default Layout;
