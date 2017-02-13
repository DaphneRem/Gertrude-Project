import React from 'react';
import Plat1 from './Plat1';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import contenu from '../data/data.js';
import $ from "jquery";

class Menu extends React.Component {

	 donnees(){
		return contenu.carte.map(function(el){
			return (<Plat1 
						name={el.name} 
						description={el.description} 
						price={el.price} 
						key={el.id} 
						image={el.image} /> )
		});
	};
	

	render() {

		let items= this.donnees();		
		return (
			<div>

				<Grid>
				    <Row>
						{items}
				    </Row>
				  </Grid>
				

			</div>
			);
	}
}




export default Menu;
