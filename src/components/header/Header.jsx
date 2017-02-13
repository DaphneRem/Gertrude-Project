import React from 'react';
import './Header.css';
import Panier from './Panier';

class Header extends React.Component {


	render() {
		return (
			<div>
			<div className="nav-bar">
				<div className="logo">
					<img src="https://www.prodomaines.com/sites/default/files/extensions/nom-domaine-restaurant.png"/>
				</div>
				<div className="titre"><h1>Gertrude Restaurant</h1></div>
				<div className="ulButton">
					<ul className="nav">
						<li><a href="#presentation">Accueil</a></li>
						<li><a href="#classContainer">Carte</a></li>

						<li><a href="#">Contact</a></li>
					</ul>
					<button className="btn1" onClick={this.props.click}><i className="fa fa-shopping-basket fa-3x"></i></button>
				</div>
				<Panier />

			</div>
			<div className="nav-mobile">
				<a href="#">Accueil</a>
				<a href="#classContainer">Carte</a>
				<a href="#">Contact</a>
			</div>
		</div>

			);
	}
}

export default Header;
//
//
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isModalOpen: false }
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.openModal()}>Open modal</button>
//         <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
//           <h1>Modal title</h1>
//           <p>hello</p>
//           <p><button onClick={() => this.closeModal()}>Close</button></p>
//         </Modal>
//       </div>
//     )
//   }
//
//   openModal() {
//     this.setState({ isModalOpen: true })
//   }
//
//   closeModal() {
//     this.setState({ isModalOpen: false })
//   }
// }
