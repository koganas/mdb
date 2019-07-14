import React, { Component } from 'react'
import MovieLink from './movieLink'

class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    updateSearch(e) {
        this.setState({
            search: e.target.value
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
                    <ul className="list">
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