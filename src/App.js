import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
  
function App() {
  return (
    <>
    
    <ChatEngine
      height="100vh"
      projectID="
      48481b44-8c17-432b-a3a6-dfd124543f15"
      userName="nagasai"
      userSecret="password"
      renderChatFeed = {(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
     
     
     />
     
    </>
    
  );
}

export default App;
