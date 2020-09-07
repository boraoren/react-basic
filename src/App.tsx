import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Name from './Name';

interface AppProps{
    message: string;
    name: string;
}

const App: React.FC<AppProps> = (props) =>{

  const name = props.name;
  const message = props.message;

  return(
    <div className="App">
      <Message text={message}/>
      <Name text={name}/>
    </div>
  );
}


export default App;
