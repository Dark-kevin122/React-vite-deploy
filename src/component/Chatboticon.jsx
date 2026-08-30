import { Send } from 'lucide-react';
import styles from './chatboticon.module.css'
// import Chatboticon from './chatboticon.css'
// Usage
const Chatbot = () => {
  return(
    <button className= {styles.sendbtn} id='send.btn' type= {'submit'}>
        <Send size={20} />
    </button>

  ) 
};
export default Chatbot;