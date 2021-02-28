import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import db from '../firebase'
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';
import StarIcon from '@material-ui/icons/Star';
import ReplyIcon from '@material-ui/icons/Reply';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar } from '@material-ui/core';
import "../styles/message.css"

function Message() {
    const {id} = useParams();
    const [data,setEmail] = useState([])

    useEffect(() => {
        db.collection("emails").doc(id).get().then((docRef) => 
        { 
            setEmail(docRef.data()) 
        })
        .catch((error) => { })
    },[]);
    
    return (
        <div className="message">
            <div className="message__header">
                <h4>{data.subject} <LabelImportantIcon/></h4>
                <div className="message_headerIcon">
                    <PrintIcon onClick={e=>window.print()}/>
                    <LaunchIcon/>
                </div>
            </div>

            <div className="message__middle">
                <div className="message__middleLeft">
                    <Avatar/>
                    <h6>{data.fromName} <span>{data.from}</span></h6>
                </div>

                <div class="message_middleRight">
                    <span>{ new Date(data.time?.seconds*1000).toUTCString()} </span>
                    <StarIcon/>
                    <ReplyIcon/>
                    <MoreVertIcon/>
                </div>
            </div>

            <div className="message__body">
                {data.message}
            </div>
           
        </div>
    )
}

export default Message
