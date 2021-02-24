import React from 'react'
import logo from '../img/logo.png'
import avatar from "../img/avatar.jpg"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import '../styles/header.css'

const header = ()=> {
    return (
        <div className="header">
            <div className="logo__wrapper">
                <MenuIcon/>
                <img src={logo}/>
            </div>

            <div className="search__wrapper">
                <SearchIcon/>
                    <input type="text" placeholder="Search mail"/>
                <ExpandMoreIcon/>
            </div>

            <div className="icon__wrapper">
                <HelpOutlineIcon/>
                <SettingsIcon/>
                <AppsIcon/>
                <Avatar src={avatar}/>
            </div>
        </div>
    )
}

export default header
