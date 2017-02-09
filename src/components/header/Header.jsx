import React from 'react';
import Panier from './Panier';
import './Header.css';

class Header extends React.Component {


	render() {
		return (
			<div className="nav-bar">
				<div className="logo">
					<img src="https://www.prodomaines.com/sites/default/files/extensions/nom-domaine-restaurant.png"/>
				</div>
				<div className="titre"><h1>Gertrude Restaurant</h1></div>
				<div className="ulButton">
					<ul className="nav">
						<li><a href="#">Accueil</a></li>
						<li><a href="#classContainer">Carte</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
					<button className="btn1"><i className="fa fa-shopping-basket fa-3x"></i></button>

				</div>

			</div>
			);
	}
}

export default Header;
