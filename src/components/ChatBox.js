import React from 'react';
import { useState,useEffect } from 'react';

import chat from '../assets/Chat.svg';
import mic from '../assets/Mic.svg';
import fileAdd from '../assets/File_dock_add.svg';
import send from '../assets/Send_hor.svg'


function ChatBox() {
    const [enteredInput,setEnteredInput] = useState(false);
    const [message,setMessage]=useState("");

    
    
    const messageHandler = (e) =>{
        setMessage(e.target.value);
        if (message.length>0){
            setEnteredInput(true);
        }
    }

    useEffect(()=>{
        if (message.length==0) {setEnteredInput(false)};
    },[message])

  return (
    <div>
      <div className='flex gap-2 bg-white mx-8 rounded-full justify-between p-2'>
        <div className='flex flex-row gap-3 w-full'>
            <img src={chat} className='cursor-pointer'/>
            <input type='text' placeholder='Let’s talk medical...'  className='focus:outline-0 border-none w-[95%]'
            onChange={messageHandler}
            value={message}
            />
        </div>
        {enteredInput ? (
            <div onClick={()=>setMessage("")}>
                <img src={send} className='cursor-pointer'/>
            </div> ):( 
            <div className="flex gap-2">
            <img src={fileAdd} className='cursor-pointer'/>
            <img src={mic} className='cursor-pointer'/>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default ChatBox
