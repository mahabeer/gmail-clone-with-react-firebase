import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function mail_body_header() {
    return (
        <div className="mail_body_header">
            <div className="left_icon">
                <div class="check_box">
                <CheckBoxOutlineBlankIcon/>
                <ArrowDropDownIcon/>
                </div>
                <RefreshIcon/>
                <MoreVertIcon/>
            </div>

            <div class="right_header">
                <span>1-50 12,21</span>
                <ChevronLeftIcon/>
                <ChevronRightIcon/>
            </div>
        </div>
    )
}

export default mail_body_header
