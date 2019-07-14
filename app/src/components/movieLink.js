import React, { Component } from 'react'
import MovieModal from './movieModal'

class MovieLink extends Component {

    render() {
        return (
            <li className="list__item">
            	<img src={'http://image.tmdb.org/t/p/w200/' + this.props.movie.poster_path} alt="" />
                <h1>{this.props.movie.title}</h1>
                <MovieModal movie={this.props.movie} />
            </li>
        )
    }

}
 
export default MovieLink