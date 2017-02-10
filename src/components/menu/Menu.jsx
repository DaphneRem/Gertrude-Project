import React from 'react';
import Plat1 from './Plat1';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import contenu from '../data/data.js';

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

Menu.propTypes= {
  content: React.PropTypes.arrayOf(React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isrequired,
  })).isRequired,
};


export default Menu;
