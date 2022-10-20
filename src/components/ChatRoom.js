import React, { Component } from 'react';
import { Button, FormControl, Grid, Row, Col } from 'react-bootstrap';


class ChatRoom extends Component {

  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      message: '',
      messages: []
    }
  }

  componentDidMount(event){
    firebase.database().ref('messages/').on('value', (snapshot)=>{
      const currentMessages = snapshot.val();
      if(currentMessages != null){
        this.setState({
          messages: currentMessages
        })
      }
    })
  }

  updateMessage(event){
    console.log('updateMessage:'+ event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event){
    console.log("submitMessage:"+this.state.message, 'also passing event:'+event)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    this.refs.inputfield.value = '';
  }

  render(){
    const currentMessage = this.state.messages.map((message, i) => {
      return (
        <li key={message.id}>{message.text}</li>
      )
    })

    return(
      <Grid>
                <ol>
                  {currentMessage}
                </ol>
         <Row className="show-grid">
           <Col xs={12} md={8}><FormControl onChange={this.updateMessage} ref="inputfield"  type="text" placeholder="Type Message" /></Col>
           <Col xs={6} md={4}><Button bsStyle="primary" bsSize="small" refs="inputfield" onClick={this.submitMessage}>Submit Message</Button></Col>
         </Row>
      </Grid>
    )
  }
}

export default ChatRoom
