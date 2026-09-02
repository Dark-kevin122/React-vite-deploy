import { Send } from 'lucide-react';
import styles from './chatboticon.module.css'
// import Chatboticon from './chatboticon.css'
// Usage
const Chatboticon = () => {
  
  return(
    

    <button className= {styles.sendbtn} id='send.btn'>
        <Send size={20} />
    </button>

  ) 
};
export default Chatboticon;