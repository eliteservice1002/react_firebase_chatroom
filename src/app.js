import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChatRoom from './components/ChatRoom';


class App extends Component {
  render(){
    return (
        <div>
          this is my react app!
          <ChatRoom/>
        </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
