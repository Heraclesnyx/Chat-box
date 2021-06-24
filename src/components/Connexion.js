import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; /*Permet de faire une redirection comme son nom l'indique*/


class Connexion extends Component {
	state = {
		pseudo: '',
		goToChat: false
	}

	handleChange = event => {
		const pseudo = event.target.value
		this.setState({pseudo})
	}

	handleSubmit = event => {
		event.preventDefault() /*Annulation de l'event par defaut, ici je gère moi même mon changement lors de la soumission du formulaire*/
		this.setState({ goToChat: true}) /*Passer goToChat à vrai*/
	}

	render() {
		if(this.state.goToChat){
			return <Redirect push to={`/pseudo/${this.state.pseudo}`} /> /*Push permet de revenir sur la page d'accueil*//*to en solo== Remplace dans l'historique de na vigation de ma page*/
		}



		return(
		<div className='connexionBox'>
			<form className='connexion' onSubmit={this.handleSubmit}>
				<input
					value={this.state.pseudo}
					onChange={this.handleChange}
					placeholder='Pseudo'
					type='text'
					required /> {/*onChange === Permet de se mettre à jour*/}
				<button type='submit'> GOGOGO </button>
			</form>
		</div>
		)
	}
}

export default Connexion