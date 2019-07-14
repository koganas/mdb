import React, { Component } from 'react'
import MovieList from './components/movieList'
import axios from 'axios'

class App extends Component {

	constructor() {
		super()
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
			<MovieList movies={this.state.list} />
		)
	}
}

export default App;
