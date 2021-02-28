import React from 'react'

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import "../styles/email.css"
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
function EmailInbox({id,username,subject,time}) {
    return (
    <Link to={`/message/${id}`}>
        <div id={id} key={id}>
            <div className="emails">
            <div className="emails__left">
                <IconButton>
                    <CheckBoxOutlineBlankIcon/>
                </IconButton>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
                <span>{username}</span>
            </div>   
            <div className="emails__middle">
                <p>{subject}</p>
            </div>   
            <div className="emails__right">
                <p className="time">
                 {time}
                </p>
            </div>         
        </div>
        </div>
    </Link>
    )
}

export default EmailInbox
