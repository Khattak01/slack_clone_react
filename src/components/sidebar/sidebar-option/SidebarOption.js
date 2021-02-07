import React from 'react'
import './SidebarOption.css'

import {useHistory} from 'react-router-dom'
import db from '../../../firebase'

const SidebarOption = ({Icon,title,id,addChannelOption}) => {
    const history = useHistory()
    const selectChannelHandler = () => {
        if(id){
            // console.log(id)
            history.push(`/room/${id}`)
        }else{
            history.push(title)//will be implemented latter
        }
    }
    const addChannelHandler = () => {
        const channelName = prompt('Please Enter CHANNEL name : ')
        if(channelName){
            db.collection('rooms').add({
                name:channelName
            })
        }
    }
    return (
        <div className="sidebar-option" onClick={
            addChannelOption ? 
            addChannelHandler : 
            selectChannelHandler}
            >
            {Icon && <Icon className="sidebar-option__icon"/>}
            {Icon ?(
                <h3>{title}</h3>):
                <h3 className="sidebar-option__channel">
                    <span className="sidebar-option__hash">#</span> 
                    {title}
                </h3>}
        </div>
    )
}

export default SidebarOption
