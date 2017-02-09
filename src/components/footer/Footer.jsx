import React from 'react';
import css from './Footer.css'
var SocialButton = require('react-social-button');
class Footer extends React.Component {

	render() {
		return (
<div>


	<SocialButton
	  social='twitter'
	  btnProps={{
	    disabled: true,
	    onClick: function(){alert('Callback called.');}
	  }}/>
	<div class="footerGauche" style={{float:"right"}}>
		<a href="#">Accueil</a>
		<a href="#">Carte</a>
		<a href="#">Contact</a>
	</div>
</div>

			);
	}
}

export default Footer;
