import './App.css'
import { BiBell } from 'react-icons/bi'
import { FiMail,FiTwitter, FiFacebook } from 'react-icons/fi'

function App() {
  return (
    <div className="App">
      <div className='ring'>
        <div></div>
        <div className='ring-o'><BiBell size={48} color="white"/></div>
      </div>
      <div className='box'>
        <div className='box-header'>
        You have 1 new message
        </div>
        <div className='box-message'>
          <div className='box-icon'><FiMail size={48} color="#C83974" /></div>
          <div className='box-message-content'>
            <div className='message-header'>Feb 22</div>
            <div className='message-content'>If you like what we do, please tell your friends and share.</div>
          </div>
        </div>
        <div className='links'>
          <div className='link-one'>
            <div><FiTwitter /></div>
            <div>Twitter</div>
          </div>
          <div className='link-two'>
          <div><FiFacebook /></div>
            <div>Facebook</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
