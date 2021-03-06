import React, { useEffect, useState } from 'react'

import EmailInbox from './EmailInbox';
import db from '../firebase'
import { StateContext, useStateValue } from '../context/StateProvider';


function Email() {
    const [{user},dispatch] = useStateValue(StateContext);

    const [dummyemails,setEmail] = useState([])

    
    useEffect(() => {
        db.collection("emails").where("to", "==", user.email).orderBy("time","desc").onSnapshot(snapshot=>{
            setEmail(snapshot.docs.map((doc)=>({
                id:doc.id,
                email:doc.data()
            }
        ))
        )})
    },[]);
 
    return (
        <>
            {
                dummyemails.map(({id,email})=>{
                    return <EmailInbox key={id} id={id} username={email.fromName} subject={email.subject} time={new Date(email.time?.seconds*1000).toUTCString()}/>
                })
            }
            
                </>
            )
}

export default Email
