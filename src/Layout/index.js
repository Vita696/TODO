import React from 'react'
import Header from '../views/Header'
import Footer from '../views/Footer'

export default function Layout(props) {
    const {headerMenu, children} = props

    return (
        <>
            <Header headerMenu={headerMenu}/>
            {children}
            <Footer />
        </>
    )
}
