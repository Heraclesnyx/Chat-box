import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'

import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Root = () => (
	<BrowserRouter>
		<Switch>  {/*Permet de prendre en enfant plusieurs routes, celon condition il affiche tel ou tel Component*/}
			<Route exact path='/' component= {Connexion} /> {/*On demande tjr le chemin exact avant, sinon tous ceux qui apparait après '/' est pris en compte et sa merde*/}
			<Route path='/pseudo/:pseudo' component= {App} /> {/*:pseudo == nom de la variable de l'url, exempl: si pseudo = toto alors url ser /pseudo/toto...*/}
			<Route component= {NotFound} /> {/*Pas de path car il s'agit d'un component d'erreur*/}
		</Switch>
	</BrowserRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
