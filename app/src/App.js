import React, { Component } from 'react'
import './App.css'

import MovieList from './components/movieList'
import axios from 'axios'


class App extends Component {

	constructor(props) {
		super(props)      
		this.state = {
			list: this.getUpcomingMovies()
		}
	}

	getUpcomingMovies() {
		axios.get('http://localhost/mdb/api/')
			.then( res => {
				const movies = res.data;
				this.setState({
					list: movies
				})
			})
			.catch( err => {
				console.log('No movies found');
				return null;
			})
	}

	render() {
		return (
			<div className="App">
				<MovieList movies={this.state.list} />
			</div>
		)
	}
}

export default App;
