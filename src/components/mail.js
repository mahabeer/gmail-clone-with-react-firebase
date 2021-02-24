import React from 'react'
import  '../styles/mail_body_header.css'
import Email from './Email'
import Mail_body_header from './mail_body_header'
import Mail_body_tabs from './mail_body_tabs'

function mail() {
    return (
        <div className="mailbody">
            <Mail_body_header/>
            <div class="mail_body_wrapper_scroller">
                <Mail_body_tabs/>
                <Email/>
            </div>
            
            
        </div>
    )
}

export default mail
