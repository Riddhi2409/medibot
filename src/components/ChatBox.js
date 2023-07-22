import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

import chat from '../assets/Chat.svg';
import mic from '../assets/Mic.svg';
import fileAdd from '../assets/File_dock_add.svg';
import send from '../assets/Send_hor.svg'


function ChatBox({setCurrentMessage,sources,messages,setMessages,setCurrentReply,currentReply,reply,setReply}) {

  
  const [showSendIcon,setShowSendIcon] = useState(false);
  const [enteredInput,setEnteredInput]=useState("");
  
    
    
    const messageHandler = (e) =>{
        setEnteredInput(e.target.value);
        if (enteredInput.length>0){
            setShowSendIcon(true);
        }
    }

    const sendHandler = (e) => {
      if (enteredInput.length > 0){
        setCurrentMessage({sources,"message":enteredInput})
        setMessages([...messages,{sources,"message":enteredInput}])
        setCurrentReply({"reply":"You should stay in and rest until you feel better. It is important to focus on taking care of yourself and protecting others from getting sick. If your symptoms persist, you should contact your doctor or go to the hospital.",sources});
        axios.post('/patient_query',{
          query: enteredInput
        })
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err);
        })

        axios.get('/run_medibot')
          .then((res)=>{
            console.log(res);
          })
          .catch((err)=>{
            console.log(err)
          })
        setReply([...reply,{"reply":"You should stay in and rest until you feel better. It is important to focus on taking care of yourself and protecting others from getting sick. If your symptoms persist, you should contact your doctor or go to the hospital.","sources":sources}]);
      }
    }

    useEffect(()=>{
        if (enteredInput.length==0) {setShowSendIcon(false)}
        else {setShowSendIcon(true)};
    },[enteredInput])

  return (
    <div>
      <div className='flex gap-2 bg-white mx-8 rounded-full justify-between p-2'>
        <div className='flex flex-row gap-3 w-full'>
            <img src={chat} className='cursor-pointer'/>
            <input type='text' placeholder='Let’s talk medical...'  className='focus:outline-0 border-none w-[95%]'
            onChange={messageHandler}
            value={enteredInput}
            />
        </div>
        {showSendIcon ? (
            <div onClick={()=>setEnteredInput("")}>
                <button  onClick={sendHandler}>
                  <img src={send} />
                </button>
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
