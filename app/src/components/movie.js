import React, { Component } from 'react'

class Movie extends Component {

    render() {
        return (
            <li>
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.overview}</p>
            </li>
        )
    }

}
 
export default Movie  