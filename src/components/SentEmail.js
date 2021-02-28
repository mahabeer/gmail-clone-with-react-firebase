import React, { useEffect, useState } from 'react'
import  '../styles/mail_body_header.css'

import EmailInbox from './EmailInbox';
import db from '../firebase'
import { StateContext, useStateValue } from '../context/StateProvider';


function SentEmail() {
    const [{user},dispatch] = useStateValue(StateContext);

    const [dummyemails,setEmail] = useState([])

    
    useEffect(() => {
        db.collection("emails").where("from", "==", user.email).orderBy("time","desc").onSnapshot(snapshot=>{
            setEmail(snapshot.docs.map((doc)=>({
                id:doc.id,
                email:doc.data()
            }
        ))
        )})
    },[]);
    return (
        <>
        <div class="mail_body_wrapper_scroller">
               
            
            {
                dummyemails.map(({id,email})=>{
                    return <EmailInbox key={id} id={id} username={email.to} subject={email.subject} time={new Date(email.time?.seconds*1000).toUTCString()}/>
                })
            }
            </div>
                </>
            )
}
export default SentEmail
