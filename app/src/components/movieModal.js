import React, { Component } from 'react'

class MovieModal extends Component {

    render() {
        return (
            <div className={this.props.display ? 'modal modal--open col-4' : 'modal'} >
                <div className="modal__container">
                    {this.props.movie.poster_path ?
                        (
                	       <img src={'http://image.tmdb.org/t/p/w342' + this.props.movie.poster_path} alt="" />
                        ) : (
                           <img src="https://via.placeholder.com/342x513.jpg" alt="" />
                        )
                    }
                    <h1>{this.props.movie.title}</h1>
                    <p>{this.props.movie.overview}</p>
                    {this.props.movie.genre_ids}
                    {this.props.movie.release_date}

                    <button onClick={this.props.onClick}>Close</button>
                </div>
            </div>
        )
    }

}
 
export default MovieModal