import React from 'react'
import './Popup.css'

import { Button, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const Popup = (props) => {
    return (
        <div className="popup">
            <div className="popup__container">
                <IconButton className="close-btn" onClick={props.closeClicked}>
                    <CloseIcon className="popup__icon" />
                </IconButton>
                <div className="popup__personal-info">
                    <h2>Email : mskhattak.ncs@gmail.com</h2>
                    <h3>Made by <span className="popup__name">Khattak01</span> with &#128151;</h3>
                </div>
                <hr className="popup__line" />
                <div className="popup__features">
                    <h3>The app has the following features</h3>
                    <ul className="popup__features-list">
                        <li>User can sign up using google account</li>
                        <li>User can add Channel</li>
                        <li>User can view Channel</li>
                        <li>User can send messages to channels</li>
                        <li>Google account Image, username and name of the user will be displayed on the dashbaord when he/she signs up</li>
                    </ul>
                </div>
                <hr className="popup__line" />
                <div className="popup__project-info">
                    <h3>Made using</h3>
                    <ul className="popup__project-info-list">
                        <li>React js</li>
                        <li>Google User authentication</li>
                        <li>React Context API for(DATA LAYER)</li>
                        <li>React routers</li>
                        <li>React hooks</li>
                        <li>Firebase realtime databse</li>
                        <li>Flex box</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Popup
