import React, { Component } from 'react'
import moment from 'moment'

class MovieModal extends Component {

    render() {
        const { movie, onClick, display } = this.props
        let release_date = moment(movie.release_date).format('MMMM DD')
        let genres = movie.genre_ids ? movie.genre_ids.map((genre, i) => <li key={i}>{genre}</li> ) : ''

        return (
            <div className={display ? 'modal modal--open col-4' : 'modal'} >
                <div className="modal__container">
                    {movie.poster_path ?
                        (
                	       <img src={'http://image.tmdb.org/t/p/w342' + movie.poster_path} alt="" width="342" height="513" />
                        ) : (
                           <img src="https://via.placeholder.com/342x513.jpg" alt="" />
                        )
                    }
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>

                    <ul>{genres}</ul>
                    
                    {release_date}

                    <button onClick={onClick}>Close</button>
                </div>
            </div>
        )
    }

}
 
export default MovieModal