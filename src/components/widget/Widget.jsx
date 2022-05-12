import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
import './widget.scss';

const Widget = ({ type }) => {
    let data;
    const amount = 100;
    const different = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon
                    className="icon"
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255,0,0,0.2)"
                    }}
                />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all order",
                icon: <ShoppingCartOutlined
                    className="icon"
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218,165,32,0.2)"
                    }}
                />
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earning",
                icon: <MonetizationOnOutlined
                    className="icon"
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0,128,0,0.2)"
                    }}
                />
            }
            break;
        case "balance":
            data = {
                title: "BALANCES",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon 
                className="icon" 
                style={{
                    color: "lightblue",
                    backgroundColor: "rgb(67, 124, 230)"
                }}
                />
            }
            break;
        default:
            break;
    }

    return (
        <div className="widget">

            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                {/* biểu thức data.isMoney && "$" mà đúng thì hiện ra dấu "$" */}
                <span className="link">{data.link}</span>
            </div>

            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {different} %
                </div>
                {/* <PersonOutlinedIcon className="icon" /> */}
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;