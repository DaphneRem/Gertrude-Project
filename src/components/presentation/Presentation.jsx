import React from 'react';
import contenu from '../data/data.js';

class Presentation extends React.Component {

	render() {
		return (
			<div>
				<h1>{contenu.name}</h1>
				<p>{contenu.description}</p>
			</div>
			);
	}
}

export default Presentation;
