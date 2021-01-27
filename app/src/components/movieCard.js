import React, { Component } from 'react'

class MovieLink extends Component {
    render() {
        const { movie, onClick, img } = this.props
        return (
            <li className="list__item" onClick={onClick} >
                {movie.poster_path ?
                    (
            	       <img src={img.base_url+img.poster_sizes[2]+movie.poster_path} alt={movie.title+' poster'} />
                    ) : (
                       <img src="https://via.placeholder.com/185x278.jpg" alt="" />
                    )
                }
                <h1 className="list__title">{movie.title}</h1>
            </li>
        )
    }

}

export default MovieLink