import React from "react";
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    React Admin
                </span>
            </div>
            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>

                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>

                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>

                    <li>
                        <CategoryOutlinedIcon className="icon"/>
                        <span>Products</span>
                    </li>

                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Orders</span>
                    </li>

                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentSharpIcon className="icon"/>
                        <span>Status</span>
                    </li>

                    <li>
                        <NotificationsActiveOutlinedIcon className="icon"/>
                        <span>Notification</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamRoundedIcon className="icon"/>
                        <span>System Health</span>
                    </li>

                    <li>
                        <PsychologyRoundedIcon className="icon"/>
                        <span>Logs</span>
                    </li>

                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>

                    <li>
                        <ExitToAppOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption"></div>

                <div className="colorOption"></div>

                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar;