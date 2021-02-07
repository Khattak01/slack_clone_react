import React,{useState} from 'react'
import './ChatInput.css'

import {useStateValue} from '../../../contextAPI/StateProvider'
import db from '../../../firebase'
import firebase from 'firebase'

const ChatInput = ({channelName,channelId}) => {
    const [input, setInput] = useState('')
    const[{user}] = useStateValue()
    const sendMessageHandler = (e) =>{
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId)
            .collection('messages')
            .add({
                message: input,
                timeStamp:firebase.firestore.FieldValue.serverTimestamp(),//no matter where from we are sending from the world it will have consistancy
                name:user.displayName,
                imageURL:user.photoURL
            }) 
        }
        setInput("")
    }
    return (
        <div className="channel-input">
            <form>
                <input value={input} onChange={ e => setInput(e.target.value)} placeholder={`Message ${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessageHandler}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
