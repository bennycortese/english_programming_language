import './App.css'
import { useRef } from 'react'
import microphoneIcon from './assets/white-microphone-mic-voice-sound-icon-31631921779zd8rnvneso.png';
import logo from './assets/IMG_0403.png';

function App() {
  const myContainer = useRef<any>()
  
  function handleClickMicro() {
    console.log('Hello World')
  }

  function handleClickEnter() {
    if (myContainer.current) {
      alert(myContainer.current.value);
    }
    console.log("Enter clicked")
  }


  return (
    <div className="page-container">
      <div className="sidebar">
        <img className="logo" style={{ width: '100%', height: '30%' }} src={logo} alt="English Programming Language Logo" />
      </div>
      <div className="col-container">
        <div className="absolute-container">
          <div className="mic-icon" id="mic" >
            <img className="mic-icon-image" style={{ width: '100%', height: '100%' }} src={microphoneIcon} alt="Microphone icon" />
          </div>
          <div className='send-container'>
            <textarea id="textInput"/>
            <div className="airplane-icon" id="send"> 
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="airplane" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </div>
          </div>
        </div>
        <textarea id="w3review" name="w3review">  </textarea>
        <textarea id="w3review" name="w3review"> </textarea>
        <textarea id="w3review" name="w3review"> </textarea>
      </div>
    </div>
  )
}

export default App
