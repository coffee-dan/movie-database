import React, { ReactNode } from 'react';
import './styles/movie-list.css';

interface Props {
	children: JSX.Element | ReactNode | null;
}

const MovieList: React.FC<Props> = ({ children }) => {
	return <div className="movie-list">{children}</div>;
};

export default MovieList;
