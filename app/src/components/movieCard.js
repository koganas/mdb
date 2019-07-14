import React, { Component } from 'react'

class MovieLink extends Component {

    render() {
        return (
            <li className="list__item" onClick={this.props.onClick} >
            	<img src={'http://image.tmdb.org/t/p/w200' + this.props.movie.poster_path} alt="" />
                <h1>{this.props.movie.title}</h1>
            </li>
        )
    }

}
 
export default MovieLink