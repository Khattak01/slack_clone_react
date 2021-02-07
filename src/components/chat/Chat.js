import React,{useEffect,useState} from 'react'
import './Chat.css'

import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase'
import Message from './message/Message'
import ChatInput from './chat-input/ChatInput'


const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState()
    const [roomMessages, setRoomMessages] = useState([])
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot( snapshot => setRoomDetails(snapshot.data()))

            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timeStamp','asc')
            .onSnapshot( (snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())))
        }
        console.log("Messages >>> ",roomMessages)
    }, [roomId])
    
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header-left">
                    <h4 className="chat__channel-name">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>                
                <div className="chat__header-right">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map( (message,i) => (
                    message.message?
                    <Message
                    key={i}
                    message={message.message}
                    timeStamp={message.timeStamp}
                    user={message.name}
                    userImage={message.imageURL}
                    />
                    : null
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
