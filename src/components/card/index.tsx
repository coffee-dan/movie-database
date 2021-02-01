import React, { ReactNode } from 'react';
import './styles/card.css';

interface Props {
	title: string;
	image: string;
}

const Card: React.FC<Props> = ({ title, image }) => {
	return (
		<div className="card">
			<img src={image} alt={`${title} cover`} className="card--image" />
			<h1 className="card--title">{title}</h1>
		</div>
	);
};

export default Card;
