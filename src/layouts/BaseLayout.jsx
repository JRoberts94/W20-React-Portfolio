import React from 'react'
import NavBar from './nav/navbar'

export default function BaseLayout(props){
    return (
    <main>
        {/* header */}
        <NavBar/>

        {/* content */}
        {props.children}



        {/* footer */}



    </main>
    )
}