import React, { ReactNode } from 'react';
import './styles/card.css';

interface Props {
	children: JSX.Element | ReactNode | null;
}

const Card: React.FC<Props> = ({ children }) => {
	return <div className="card">{children}</div>;
};

export default Card;
