import React, { Component } from 'react'
import MovieLink from './movieLink'
import '../index.scss'

class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    updateSearch(evt) {
        this.setState({
            search: evt.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <input type="text"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />

                {this.props.movies ? (
                    <ul>
                        {
                            this.props.movies.filter(movie =>
                                movie.title.toLowerCase().includes(this.state.search.toLowerCase())
                            ).map(
                                (movie, index) => { return <MovieLink movie={movie} key={index} /> }
                            )
                        }
                    </ul>
                ) :
                    (
                    <p>Try searching for a movie</p>
                )}

            </div>
        )

    }

}

export default MovieList  