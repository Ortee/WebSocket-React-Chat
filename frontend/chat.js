import React from 'react';
var socket = require('socket.io-client')('http://localhost:3034');

import Message from './message';

class Chat extends React.Component {
  constuctor(props){

  }
  onSub(){
    setInterval(function () {
      socket.emit('chat message', "test");
    }, 1000);
  }
  render() {
    socket.on('chat message', function(msg){
      console.log('this.state.messages', this.state);
    });
    socket.on('connect', function(){
      console.log('CONNECTED');
    });
    socket.on('event', function(data){
      console.log('EVENT');
    });
    socket.on('disconnect', function(){
      console.log('DISCONNECT');
    });
    console.log("messages",this.state);
    return (
      <div>
      {['test','test2'].map((e, i) => {
        return <Message key={i} text={e}/>
      })}
      CHAT
      </div>
    );
  }

}

export default Chat;
