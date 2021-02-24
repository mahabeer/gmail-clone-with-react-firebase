import React from 'react'

import EmailInbox from './EmailInbox';
import dummyemails from "../emails-dummy"
function Email() {
    return (
        <>
            {
                dummyemails.map((email)=>{
                    return <EmailInbox username={email.username} subject={email.subject} time={email.time}/>
                })
            }
            
                </>
            )
}

export default Email
