import React, { Component } from 'react'

class MovieLink extends Component {

    render() {
        const { movie, onClick } = this.props
        return (
            <li className="list__item" onClick={onClick} >
                {movie.poster_path ?
                    (
            	       <img src={'http://image.tmdb.org/t/p/w200' + movie.poster_path} alt="" />
                    ) : (
                       <img src="https://via.placeholder.com/200x300.jpg" alt="" />
                    )
                }
                <h1>{movie.title}</h1>
            </li>
        )
    }

}

export default MovieLink