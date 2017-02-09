import React from 'react';
import css from './Footer.css';
class Footer extends React.Component {

	render() {
		return (
<div className="container">
<div className="footerLeft">
	<h3>La bonne bouffe</h3>
	<p>55 rue de vincennes<br/>93100 Montreuil</p>
	<i className="fa fa-facebook-official fa-2x"aria-hidden="true" ></i>
	<i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
	<i className="fa fa-snapchat-square fa-2x" aria-hidden="true"></i>
</div>

<div className="footerRight" >
		<a href="#">Accueil</a>
		<a href="#">Carte</a>
		<a href="#">Contact</a>
	</div>
</div>

			);
	}
}

export default Footer;
