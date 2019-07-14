import React, { Component } from 'react'

class MovieModal extends Component {

    render() {
        return (
            <div className="modal">
            	<img src={'http://image.tmdb.org/t/p/w342/' + this.props.movie.poster_path} alt="" />
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.overview}</p>
                {this.props.movie.genre_ids}
                {this.props.movie.release_date}
            </div>
        )
    }

}
 
export default MovieModal