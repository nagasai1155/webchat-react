import Message from "./Message";
import Mymessage from "./Mymessage";
import Theirmessage from "./Theirmessage";


const ChatFeed = (props)=>{
  const {chats,activeChat,userName,messages} = props;
  const chat = chats && chats[activeChat];
  console.log(chat,userName,messages);
  const renderMessages=()=>{
    const keys = Object.keys(messages);
    console.log(keys);
  }
  renderMessages();
 return(
    <>
    <h3>chatfeed</h3>
    </>
 )
}
export default ChatFeed;