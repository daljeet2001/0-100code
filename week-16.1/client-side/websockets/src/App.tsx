import {useState,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [socket,setSocket]=useState()
  const inputRef=useRef()

  function sendMessage(e){
    if(!socket){
      return
    }
    //@ts-ignore
    socket.send(inputRef.current.value)

  }

  useEffect(()=>{
    const ws= new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage=(ev)=>{
      alert(ev.data)
    }
  },[])

  return (
    <>
    <div>
      <input  ref={inputRef} type="text" placeholder="send Message"></input>
      <button onClick={sendMessage}>send</button>
    </div>
    </>
  )
}

export default App
