import React, { Component, createRef } from 'react';
import './App.css';
import './animations.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

//Firebase
import base from './base';

//Animations
import {
	CSSTransition,
	TransitionGroup
} from 'react-transition-group'



class App extends Component {
	state = {
		messages: {}, /*State global pour enregistrer tous les messages issu du formulaire, {} === Objet vide et non une string vide (voir component du formulaire)*/
		pseudo: this.props.match.params.pseudo /*Dans console react dans APP*/
	}

	messagesRef = createRef() //Creation d'un réference

	componentDidMount() {
		base.syncState('/', {
			context: this,
			state: 'messages'
		})
	}


	//ComponentDidUpdate == fonction qui permet de voir quand le state est mise à jour
	componentDidUpdate(){
		//Méthode permettant de scroll auto dans ma div messages lorsque new messages
		const ref = this.messagesRef.current  //current fait reference du moment situer ds la div messages
		ref.scrollTop = ref.scrollHeight //Définition du haut du scroll == à la hauteur de mon scroll. En gros mon scroll reste en bas
	}

	addMessage = message => {
		const messages = {...this.state.messages} /*Shallow copy cad copy de notre state*/
		
		messages[`message-${Date.now()}`] = message /*Timestamp unique soit message unique*/
		
		//On souhaite garder un certain nbr de message (ici 10 par exemple)
		Object
			.keys(messages)
			.slice(0, -10)//Couper un array en JS
			.forEach(key =>{
				messages[key] = null
			})//ForEach pour les traitements seulement
		
		this.setState({ messages })
	}//Fin de addMessage

	isUser = pseudo => pseudo === this.state.pseudo
	

	//}

  render () {
  	const messages = Object
  		.keys(this.state.messages)
  		.map(key =>(
  			<CSSTransition
  				timeout={200} //en miliseconde soit X sec ici
  				classNames='fade'
  				key={key}>
  				<Message
  				
  				isUser={this.isUser}
  				message={this.state.messages[key].message}
  				pseudo={this.state.messages[key].pseudo} />
  			</CSSTransition>
  		))

  	console.log(messages);

    return (
      <div className='box'>
      	<div>
      		<div className='messages' ref= {this.messagesRef}> {/*Appel de la référence*/}
      			<TransitionGroup className='message'>
      				{messages}
      			</TransitionGroup>
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
