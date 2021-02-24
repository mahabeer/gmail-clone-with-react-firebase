import React from 'react'
import  '../styles/rightbar.css'
import righticon1 from '../img/righticon1.png';
import righticon2 from '../img/righticon2.png';
import righticon3 from '../img/righticon3.png';
import righticon4 from '../img/righticon4.png';
import righticon5 from '../img/righticon5.png';
import righticon6 from '../img/righticon6.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton } from '@material-ui/core';

function rightbar() {
    return (
        <div className="rightbar">
            <div className="top_icons">
                <img src={righticon1}/>
                <img src={righticon2}/>
                <img src={righticon3}/>
                <img src={righticon4}/>
            </div>

            <div className="middle_icons">
                <img src={righticon5}/>
                <img src={righticon6}/>
            </div>

            <div className="bottom_icons">
                <IconButton>
                <ChevronRightIcon/>
                </IconButton>
                
            </div>
        </div>
    )
}

export default rightbar
