import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import './widget.scss';

const Widget = () => {
    return (
        <div className="widget">

            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">21312</span>
                <span className="link">See all users</span>
            </div>

            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon/>
                    20%
                </div>
                <PersonOutlinedIcon className="icon"/>
            </div>
        </div>
    )
}

export default Widget;