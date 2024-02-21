import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/App.jsx'





import {io} from "socket.io-client";
const socket =io("172.16.6.1:3000");

//Ici
const msg = {
      content : "Salut =)",
      date : Date.now(),
      author : "Matvei"
}

socket.emit("send_msg",msg);

socket.on("new_msg",(newMessage)=>{
  console.log(newMessage);
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App socket={socket}/>
  </React.StrictMode>,
)
