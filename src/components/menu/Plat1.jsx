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

  addItem() {

  	console.log(this.props.price)

    const getAlert = () => (
      <SweetAlert success title={this.props.name}
      onConfirm={() => this.hideAlert()}>
      ajouté au panier
      
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
					{this.state.alert}
				    <Col xs={12} md={4} sm={6}>
				      <Thumbnail src={this.props.image} alt="242x200">
				        <h3 className="text-center">{this.props.name}</h3>
				        <p className="text-justify" height="100">{this.props.description}</p>
				        <h4 className="text-center">{this.props.price}</h4>
				        <p>
				      	
						<Button bsStyle="danger" className="center-block" block bsSize="large"  onClick={() => this.addItem()}>Commander</Button>&nbsp;
				        </p>
				      </Thumbnail>
				    </Col>	
			</div>
			);
	}
}






export default Plat1;

