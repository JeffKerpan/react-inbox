import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import MessageList from './components/MessageList';


class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
