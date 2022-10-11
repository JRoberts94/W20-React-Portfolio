import React from 'react'
import NavBar from './nav/navbar'
import Footer from '../../src/components/Footer.jsx'

export default function BaseLayout(props){
    return (
    <main>
        {/* header */}
        <NavBar/>

        {/* content */}
        {props.children}



        {/* footer */}
        <Footer/>


    </main>
    )
}