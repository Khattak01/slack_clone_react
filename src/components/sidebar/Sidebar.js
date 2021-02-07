import React,{useEffect,useState} from 'react'
import './Sidebar.css'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './sidebar-option/SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../../firebase'
import { useStateValue } from '../../contextAPI/StateProvider';

const Sidebar = () => {
    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue();
    console.log("USER >>> ",user)
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot =>(
            setChannels(
                snapshot.docs.map(doc => (
                    {
                        id:doc.id,
                        name:doc.data().name
                    }
                )))
        ))
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {/* {user?.email} */}
                        {user?.email?.split("@",1)}
                    </h3>
                </div>
                <div className="sidebar__icon-box">
                    <CreateIcon className="create-icon"/>
                </div>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user group"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel"/>
            {/* Connect to db and list all channels/> */}
            {channels.map( channel =>(
                <SidebarOption id={channel.id} title={channel.name} key={channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar
