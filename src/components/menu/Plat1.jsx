import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Col from 'react-bootstrap/lib/Col';
import './stylecard.css';
import SweetAlert from 'react-bootstrap-sweetalert';


class Plat1 extends React.Component {
	
constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  } 

  showModal() {
    const getAlert = () => (
      <SweetAlert success title="Vous avez ajouté ce repas à votre panier" 
      onConfirm={() => this.hideAlert()}>
	  </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

	render() {


		return (
			<div id="cardContainer">
				    <Col xs={12} md={4} sm={6}>
				      <Thumbnail src={this.props.image} alt="242x200">
				        <h3>{this.props.name}</h3>
				        <p>{this.props.description}</p>
				        <p>{this.props.price}</p>
				        <p>
				      	{this.state.alert}
						<Button bsStyle="danger" onClick={() => this.showModal()}>Commander</Button>&nbsp;
				        <Button bsStyle="default">Button</Button>
				        </p>
				      </Thumbnail>
				    </Col>	
			</div>
			);
	}
}

Plat1.propTypes= {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string,
  price: React.PropTypes.string.isRequired,
};




export default Plat1;

