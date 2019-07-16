import React, { Component } from 'react'
import MovieSearch from './movieSearch'
import axios from 'axios'

class App extends Component {

	constructor() {
		super()
		this.state = {
			list: this.getUpcomingMovies(),
			loading: true
		}
	}

	getUpcomingMovies() {
		axios.get('http://localhost/mdb/api/')
			.then( res => {
				const movies = res.data;
				this.setState({
					list: movies,
					loading: false
				})
			})
			.catch( err => {
				console.log('No movies found');
				return null;
			})
	}

	render() {
		return (
			<MovieSearch movies={this.state.list} loading={this.state.loading} />
		)
	}
}

export default App;
