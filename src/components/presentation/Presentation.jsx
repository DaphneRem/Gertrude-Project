import React from 'react';
import contenu from '../data/data.js';
import './Presentation.css';

class Presentation extends React.Component {

	render() {

		return (
			<div className="presentation" id="presentation">
				<h1>{contenu.name}</h1>
				<p>{contenu.description}</p>
			</div>
			);
	}
}

export default Presentation;
