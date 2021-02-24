import React from 'react'

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import "../styles/email.css"
import { IconButton } from '@material-ui/core';
function EmailInbox({username,subject,time}) {
    return (
        <div>
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
    )
}

export default EmailInbox
