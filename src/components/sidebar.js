import React, { useState } from 'react'
import  '../styles/sidebar.css'
import avatar from "../img/avatar.jpg"
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import CategoryIcon from '@material-ui/icons/Category';
import plusicon from "../img/plus.png"
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';
import Compose from './Compose'
import { StateContext, useStateValue } from '../context/StateProvider';
import { actions } from '../context/Reducer';
import { NavLink } from "react-router-dom"


function Sidebar() {
 const [{user,showcompose}, dispatch] = useStateValue(StateContext);

 const openCompose = ()=> {
    dispatch({
         type : actions.SHOW_COMPOSE,
         showcompose: true,
     })
 }
    return (
        <>
        {showcompose && 
          <Compose/>
         }
        <div className="sidebar">
            <div className="newmail" onClick={e=>openCompose()}>
                <img src={plusicon}/>
                <span>Compose</span>
            </div>

            <div class="incoming__outgoing">
                <NavLink exact={true} to="/" className="categories" activeClassName="active_category">
                    <InboxIcon/>
                    <span>Inbox</span>
                </NavLink>

                <div className="categories">
                    <WatchLaterIcon/>
                    <span>Starred</span>
                </div>

                <div className="categories">
                    <StarIcon/>
                    <span>Snoozed</span>
                </div>

                <div className="categories">
                    <LabelImportantIcon/>
                    <span>Important</span>
                </div>

                <NavLink to="/sentemail" className="categories" activeClassName="active_category">
                    <SendIcon/>
                    <span>Sent</span>
                </NavLink>
               

                <div className="categories">
                    <DraftsIcon/>
                    <span><b>Draft</b></span>
                </div>

                <div className="categories">
                    <CategoryIcon/>
                    <span><b>Categories</b></span>
                </div>

                <div className="categories">
                    <DeleteIcon/>
                    <span>[Map]/Trash</span>
                </div>

                <div className="categories">
                    <FindInPageIcon className="documents"/>
                    <span>Documents</span>
                </div>
            </div>

            <div className="google_meet_wrapper">
                <h5>Meet</h5>
                <div className="categories">
                    <VideocamIcon/>
                    <span>New Meeting</span>
                </div>
                <div className="categories">
                    <KeyboardIcon/>
                    <span>Join a Meeting</span>
                </div>
            </div>

            <div className="hangout_wrapper">
                <h5>Hangouts</h5>
                <div className="login_user online_user">
                    <div class="user_details">
                        <Avatar src={user.photoURL}/>
                        <span>{user.displayName}</span>
                        <ArrowDropDownIcon/>
                    </div>
                    <AddIcon/>
                </div>

                <div className="other_user">
                    <div class="user_details">
                        <Avatar>M</Avatar>
                    </div>
                    <div class="user_messages">
                        <h5>Mahabeer</h5>
                        <p>You : Hi How are you ?</p>
                    </div>
                </div>

                <div className="other_user">
                    <div class="user_details">
                        <Avatar>S</Avatar>
                    </div>
                    <div class="user_messages">
                        <h5>Suraj</h5>
                        <p>You : Are you there ?</p>
                    </div>
                </div>

                <div className="other_user">
                    <div class="user_details">
                        <Avatar>W</Avatar>
                    </div>
                    <div class="user_messages">
                        <h5>Waseem</h5>
                        <p>You : Bhai Html seekh raha hu.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    )
}

export default Sidebar
