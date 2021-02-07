import React from 'react';
import './Header.css';

import {Avatar,Input} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../../contextAPI/StateProvider';

// const user = {displayName:"khattak01",photoURL:"https://avatars0.githubusercontent.com/u/57499748?s=400&u=111de90fb42bb69559b3c04b7ac234238edca2a7&v=4"}
const Header = () => {
    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                {/* <AccessTimeIcon /> */}
            </div>
            <div className="header__search">
                <SearchIcon />
                <input className="header__search-input" placeholder="Search..."/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
