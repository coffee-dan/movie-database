import React from 'react';
import Header from './components/header/index';
import MovieList from './components/movie-list/index';
import Card from './components/card/index';
import './App.css';

const App: React.FC = () => {
	const films: string[] = [
		'Jaws',
		'Aliens',
		'Bad Santa',
		'Casablanca',
		'Ghost',
		'Twister',
		'legally Blonde',
		'Elf',
		'Zoolander',
	];

	return (
		<body className="App">
			<Header />
			<MovieList>
				{films.map(item => {
					return <Card title={item} image=""></Card>;
				})}
			</MovieList>
		</body>
	);
};

export default App;
