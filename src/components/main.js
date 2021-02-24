import React from 'react'
import Mail from './mail'
import Rightbar from './rightbar'
import Sidebar from './sidebar'
import "../styles/main.css"


function main() {
    return (
        <div className="content__Wrapper">
            <Sidebar/>
            <Mail/>
            <Rightbar/>
        </div>
    )
}

export default main
