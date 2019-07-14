import React, { Component } from 'react'
import MovieModal from './movieModal'

class MovieLink extends Component {

    state = {
    	isSelected: false
    }

	toggle(e) {
        e.preventDefault()
        //e.target.parentNode.parentNode.querySelectorAll('.modal')

        console.log(this.props.movie.id)
        this.setState({ isSelected: !this.state.isSelected })
	}

    render() {
        return (
            <li className="list__item" onClick={this.toggle.bind(this)} >
            	<img src={'http://image.tmdb.org/t/p/w200' + this.props.movie.poster_path} alt="" />
                <h1>{this.props.movie.title}</h1>
                <MovieModal
                	movie={this.props.movie}
                	display={this.state.isSelected}
                />
            </li>
        )
    }

}
 
export default MovieLink