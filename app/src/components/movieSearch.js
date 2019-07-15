import React, { Component } from 'react'
import MovieCard from './movieCard'
import MovieModal from './movieModal'

class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isSelected: false,
            alreadyOpened: false,
            modalMovie: ''
        }
    }

    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
    }

    toggleModal(e) {
        this.setState({
            isSelected: !this.state.isSelected,
            alreadyOpened: !this.state.alreadyOpened
        })
    }

    showModal(e, movie) {
        e.preventDefault()
        this.setState({
            isSelected: false,
            alreadyOpened: true
        })
        setTimeout(
            ()=> {
                this.setState({
                    isSelected: true,
                    modalMovie: movie
                })
            },
            300
        )
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
                    <div className="row">
                        <ul className={this.state.alreadyOpened ? 'list col-6' : 'list col-10'} >
                            {
                                this.props.movies.filter(movie =>
                                    movie.title.toLowerCase().includes(this.state.search.toLowerCase())
                                ).map(
                                    (movie, index) => { return <MovieCard movie={movie} key={index} onClick={(e)=>this.showModal(e, movie)} /> }
                                )
                            }
                        </ul>
                        {
                            this.state.alreadyOpened ? (
                                <MovieModal
                                    display={this.state.isSelected}
                                    movie={this.state.modalMovie}
                                    onClick={(e)=>this.toggleModal(e)}
                                /> )
                            : ''
                        }
                    </div>
                ) : (
                    <p>Try searching for a movie</p>
                )}

            </div>
        )

    }

}

export default MovieList  