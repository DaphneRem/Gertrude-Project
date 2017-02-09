import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import './stylecard.css';
import SweetAlert from 'react-bootstrap-sweetalert';


class Plat1 extends React.Component {
	

	render() {

		const{
			name,
			image,
			description,
			price
		}= this.props;


		return (
			<div id="cardContainer">

				<Grid>
				    <Row>
				    <Col xs={12} md={4} sm={6}>
				      <Thumbnail src="http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg" alt="242x200">
				        <h3>Thumbnail label</h3>
				        <p>Description</p>
				        <p>
				       
				         
				      
						<Button bsStyle="danger" onClick={this.modalTrue}>Commander</Button>&nbsp;
				          <Button bsStyle="default">Button</Button>
				        </p>
				      </Thumbnail>
				    </Col>
				    <Col xs={6} md={4} sm={6}>
				      <Thumbnail src="http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg" alt="242x200">
				        <h3>Thumbnail label</h3>
				        <p>Description</p>
				        <p>
				          <Button bsStyle="danger">Commander</Button>&nbsp;
				          <Button bsStyle="default">Button</Button>
				        </p>
				      </Thumbnail>
				    </Col>
				    <Col xs={6} md={4} sm={6}>
				      <Thumbnail src="https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg" alt="242x200">
				        <h3>Thumbnail label</h3>
				        <p>Description</p>
				        <p>
				          <Button bsStyle="danger">Commander</Button>&nbsp;
				          <Button bsStyle="default">Button</Button>
				        </p>
				      </Thumbnail>
				    </Col>
				    </Row>
				  </Grid>	
			</div>
			);
	}
}

// Card.propTypes = {
//   name: React.PropTypes.string,
//   image: React.PropTypes.string,
//   description: React.PropTypes.string,
//   price: React.PropTypes.number
// };


export default Plat1;

