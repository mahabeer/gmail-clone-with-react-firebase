import React from 'react'
import "../styles/mail_body_tabs.css"
import InboxIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
function mail_body_tabs() {
    return (
        <div className="mail_body_tabs">
            <div className="tabs_inner active_tab">
                <InboxIcon/>
                <span>Primary</span>
            </div> 

            <div className="tabs_inner">
                <GroupIcon/>
                <span>Social</span>
            </div> 

            <div className="tabs_inner">
                <LocalOfferIcon/>
                <span>Promotion</span>
            </div>            
        </div>
    )
}

export default mail_body_tabs
