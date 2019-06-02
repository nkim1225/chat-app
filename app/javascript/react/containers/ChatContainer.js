import React, { Component } from 'react';
import TextField from '../components/TextField';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
      message: '',
    };
  }
  componentDidMount() {
    App.ChatChannel = App.cable.subscriptions.create(
      {
        channel: 'ChatChannel',
        Chat_id: this.props.ChatId,
      },
      {
        connected: () => console.log('ChatChannel connected'),
        disconnected: () => console.log('ChatChannel disconnected'),
        received: data => {
          console.log(data);
        },
      },
    );
  }

  render() {
    return (
      <div id="chat-app" className="small-12 medium-8 small-centered columns">
        <h1>Chat App Body</h1>
        <div id="message-container" className="small-12 medium-10 small-centered columns" />
        <div id="text-field" className="small-12 medium-10 small-centered columns">
          <TextField message={this.state.message} />
        </div>
      </div>
    );
  }
}

export default ChatContainer;
