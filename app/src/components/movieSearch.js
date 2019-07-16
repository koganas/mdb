import React, { Component } from 'react'
import MovieCard from './movieCard'
import MovieModal from './movieModal'
import Loading from './loading'
import tmdbLogo from '../assets/themoviedb.svg'

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
        const { movies, loading } = this.props
        let filteredMovies = movies ? movies
        .filter(movie =>
            movie.title.toLowerCase().includes(this.state.search.toLowerCase())
        ).map((movie, index) =>
            { return <MovieCard movie={movie} key={index} onClick={(e)=>this.showModal(e, movie)} /> }
        ) : ''

        return (
            <div className="container">

                <header className="header">
                    <input type="text"
                        className="input__search"
                        placeholder="Search for a movie"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    />
                    <img src={tmdbLogo} className="header__logo" alt="logo" />
                </header>

                {loading ? (
                    <div className="row">
                        <Loading />
                    </div>
                ) : (
                    <div className="row">
                        <ul className={this.state.alreadyOpened ? 'list col-6' : 'list col-10'} >
                            { filteredMovies.length ? filteredMovies : <p>No movies found. Try searching again.</p> }
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
                )}

            </div>
        )

    }

}

export default MovieList  