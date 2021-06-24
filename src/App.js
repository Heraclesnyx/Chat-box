import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

//Firebase
import base from './base';

class App extends Component {
	state = {
		messages: {}, /*State global pour enregistrer tous les messages issu du formulaire, {} === Objet vide et non une string vide (voir component du formulaire)*/
		pseudo: this.props.match.params.pseudo /*Dans console react dans APP*/
	}

	componentDidMount() {
		base.syncState('/', {
			context: this,
			state: 'messages'
		})
	}

	addMessage = message => {
		const messages = {...this.state.messages} /*Shallow copy cad copy de notre state*/
		messages[`message-${Date.now()}`] = message /*Timestamp unique soit message unique*/
		this.setState({ messages })
	}//Fin de addMessage

  render () {
  	const messages = Object
  		.keys(this.state.messages)
  		.map(key =>(
  			<Message
  				key={key}
  				message={this.state.messages[key].message}
  				pseudo={this.state.messages[key].pseudo} />
  		))

  	console.log(messages);

    return (
      <div className='box'>
      	<div>
      		<div className='messages'>
      			<div className='message'>
      				{messages}
      			</div>
      		</div>
      	</div>

      	<Formulaire
      		length={140}
      		pseudo={this.state.pseudo}
      		addMessage={this.addMessage} />
      	</div>
    )
  }
}

export default App
