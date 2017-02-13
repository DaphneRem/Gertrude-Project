import React from 'react';
import './style.css';
import contenu from '../data/data.js';



class Panier extends React.Component {


		 dataJson(){
		return contenu.carte.map(function(el){
			return (<div className="cart">

						<div className="cart-image">
							<img src={el.image} alt="menu" width="100px" height="100px" />
						</div>
						 <div className="cart-description">
							<h3 className="cart-name">{el.name}</h3>




							<div >{el.price}</div>
						</div>
					</div> )
		});
	};
	render() {

		let carts= this.dataJson();
		return (

			<div className="cart-container">
				<div className="test">
					<div>{carts}</div>
				</div>

			</div>

			);
		}
	}

export default Panier;
