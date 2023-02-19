import './App.css'
import styled from "styled-components";
import { useRef } from 'react'

function App() {
  const myContainer = useRef<any>()
  
  function handleClickMicro() {
    console.log('Hello World')
  }

  function handleClickEnter() {
    if (myContainer.current) {
      alert(myContainer.current.value);
    }
    
    // alert()
    console.log("Enter clicked")
  }


  return (
    <div className="page-container">
      <div className="sidebar"> </div>
      <div className="col-container">
        <div className="absolute-container">
          <div className="mic-icon" id="mic" > </div>
          <div className='send-container'>
            <textarea id="textInput"/>
            <div className="airplane-icon" id="send"> 
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="airplane" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
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

const RectangleRootRoot = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-color: #35363b;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100vw;
`;
const SideBar = styled.div`
  width: 18.06%;
  height: 687px;
  align-self: flex-start;
  box-sizing: border-box;
  background-color: #292624;
`;
const Microphone = styled.div`
  width: 2.72%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 605px 3px 58px 0px;
  box-sizing: border-box;
`;
const SFSymbolMicrophone = styled.img`
  width: 13.3px;
  min-width: 0px;
  height: 19.8px;
  min-height: 0px;
  left: 12.3px;
  top: 8.94px;
  position: absolute;
  box-sizing: border-box;
`;
const Circle = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Main = styled.div`
  width: 77.92%;
  gap: 19px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 38px 0px;
  box-sizing: border-box;
`;
const OutputArea = styled.div`
  gap: 395px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 0px 325px;
  box-sizing: border-box;
`;
const Line = styled.div`
  width: 1px;
  height: 580px;
  flex-shrink: 0;
  align-self: flex-start;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;
const Line1 = styled.div`
  width: 1px;
  height: 580px;
  flex-shrink: 0;
  align-self: flex-start;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;
const InputEnter = styled.div`
  width: 98%;
  gap: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 14px 8px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgba(194, 194, 218, 0.12);
`;
const Placeholder = styled.textarea`
  width: 97.73%;
  align-self: center;
  color: rgba(235, 235, 245, 0.6);
  font-size: 17px;
  font-family: Aclonica;
  line-height: 22px;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const Enter = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: center;
  margin: 1px 0px;
  box-sizing: border-box;
`;

export default App
