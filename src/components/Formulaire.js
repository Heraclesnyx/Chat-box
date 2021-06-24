import React, { Component } from 'react'

class Formulaire extends Component {

	state = {
		message: '',
		length: this.props.length
	}

	createMessage = () => {
		const { addMessage, pseudo, length } = this.props

		const message = {
			pseudo,
			message: this.state.message
		}
		addMessage(message)


		//Reset Message
		this.setState({message: '', length })
	}//Fin de createMesage


	handleSubmit = event => {
		event.preventDefault()
		this.createMessage()
	}//Fin de handleSubmit

	handleChange = event => {
		const message = event.target.value
		const length = this.props.length - message.length
		this.setState({message, length })
	}//Fin de handleChange

	handleKeyUp = event => {
		if(event.key === 'Enter'){
			this.createMessage()
		}
	}//Fin de handleKeyUp, permet d'appuyer sur Entrer pour valider notre message

	render() {
		return (
			<form
				className='form'
				onSubmit= {this.handleSubmit}>

				<textarea
					value={this.state.message}
					onChange={this.handleChange}
					onKeyUp={this.handleKeyUp}
					required
					maxLength={this.props.length} />

				<div className='info'>
					{this.state.length}
				</div>

				<button type='submit'>Envoyer</button>
			</form>
			)
	}

}//Fin de la classe Formulaire


export default Formulaire