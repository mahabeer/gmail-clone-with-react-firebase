import React, { useState } from 'react'
                    
import RemoveIcon from '@material-ui/icons/Remove';
import HeightIcon from '@material-ui/icons/Height';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PhotoIcon from '@material-ui/icons/Photo';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';import "../styles/compose.css"
import { StateContext, useStateValue } from '../context/StateProvider';
import { actions } from '../context/Reducer';
import  db from '../firebase'
import firebase from 'firebase'
function Compose() {

    const [{user}, dispatch] = useStateValue(StateContext);

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const closeCompose=()=>{
        dispatch({
            type: actions.HIDE_COMPOSE,
            showcompose:false,
        })
    }

    const sendMail=(e)=>{
        e.preventDefault();
        db.collection("emails").add({
            from:user.email,
            fromName:user.displayName,
            to:to,
            subject:subject,
            message:message,
            time:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTo('');
        setSubject('')
        setMessage('')
        alert("Email sent Successfully");
        closeCompose();
    }
    return (
        <div className="compose">
            <div className="compose__header">
                <div className="compose__headerLeft">
                    <span>New Message</span>
                </div>
                <div className="compose__headerRight">
                    <RemoveIcon/>
                    <HeightIcon/>
                    <CloseIcon onClick={e=>closeCompose()}/>

                </div>
            </div>
            <form onSubmit={sendMail}>
            <div className="compose__body">
                <div className="compose__bodyForm">
                    <input type="email" placeholder="Reciepents" name="to" required value={to} onChange={e=>setTo(e.target.value)}/>
                    <input placeholder="Subject" name="subject" required value={subject} onChange={e=>setSubject(e.target.value)}/>
                    <textarea rows="20" name="message" required  onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                </div>
            </div>

                <div className="compose__footer">
                <div className="compose__footerLeft">
                    <button type="submit">
                        Send <ArrowDropDownIcon/>
                    </button>
                </div>
                <div className="compose__footerRight">
                     <FormatColorTextIcon/>
                    <AttachFileIcon/>
                    <LinkIcon/>
                    <InsertEmoticonIcon/>
                    <NoteAddIcon/>
                    <PhotoIcon/>
                    <PhonelinkLockIcon/>
                    <CreateIcon/>
                    <MoreVertIcon/>
                    <DeleteIcon/>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Compose
