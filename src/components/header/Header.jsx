import React from 'react';
import './Header.css';
import Panier from './Panier';

class Header extends React.Component {

 constructor(props) {
    super(props);
    

    this.state = {
      showComponent: false,
    };

    this.modalCart= this.modalCart.bind(this);
  }

  modalCart() {
    this.setState({
      showComponent: !this.state.showComponent,

    });

  }

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
					<button className="btn1" onClick={this.modalCart}><i className="fa fa-shopping-basket fa-3x"></i></button>	
				</div>
				

				{this.state.showComponent ?
           <Panier /> :
           null
        }
			</div>

			);
	}
}

export default Header;
