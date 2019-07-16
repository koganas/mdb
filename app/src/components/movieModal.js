import React, { Component } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class MovieModal extends Component {

    render() {
        const { movie, onClick, display, img } = this.props
        let release_date = moment(movie.release_date).format('MMMM DD, YYYY')
        let genres = movie.genre_ids ? movie.genre_ids.map((genre, i) => <li key={i}>{genre}</li> ) : ''
        return (
            <div className={display ? 'modal modal--open col-4' : 'modal'} >
                <div className="modal__container">
                    {movie.poster_path ?
                        (
                	       <img src={img.base_url+img.poster_sizes[3]+movie.poster_path} alt={movie.title+' poster'} />
                        ) : (
                           <img src="https://via.placeholder.com/342x513.jpg" alt="" />
                        )
                    }
                    <h1>{movie.title}</h1>
                    <h2>Release date: {release_date}</h2>
                    <ul>{genres}</ul>
                    <p>{movie.overview}</p>
                    <FontAwesomeIcon
                        icon={faTimes}
                        onClick={onClick}
                        className="modal__close"
                    />
                </div>
            </div>
        )
    }

}
 
export default MovieModal