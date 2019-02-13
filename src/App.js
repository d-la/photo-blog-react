import React, { Component } from 'react';
import Gallery from './components/Gallery';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
	state = {
		galleryImages: [
			{
				id: 1,
				src: '/img/img1.jpg',
				title: 'Beautiful Image',
				desc: 'Nature'
			},
			{
				id: 2,
				src: '/img/img2.jpg',
				title: 'Beautiful Image',
				desc: 'Nature'
			},
			{
				id: 3,
				src: '/img/img3.jpg',
				title: 'Beautiful Image',
				desc: 'Nature'
			},
			{
				id: 4,
				src: '/img/img4.jpg',
				title: 'Beautiful Image',
				desc: 'Nature'
			}
		]
	}


	render() {
		return (
			<div className="App">
				<Header />
				<header className="App-header">
					<Gallery galleryImages={this.state.galleryImages} />
				</header>
			</div>
		);
	}
}

export default App;
