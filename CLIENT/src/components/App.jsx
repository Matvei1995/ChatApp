export function App({socket}) {

function handleClick(){
    const msg = {
        content : "Salut =)",
        date : Date.now(),
        author : "Matvei"
  }
  socket.emit("send_msg",msg);

}

  return (
    
    <>
      <h1>Client Chat</h1>
      
        
        <button onClick={handleClick}>Envoyer</button>
     
    </>
  );
}
