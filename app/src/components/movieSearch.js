import React, { Component } from 'react'
import MovieCard from './movieCard'
import MovieModal from './movieModal'

class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isSelected: false,
            modalMovie: ''
        }
    }

    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
    }

    closeModal(e) {
        //e.target.parentNode.parentNode.querySelectorAll('.modal')
        // e.target.parentNode.parentNode.querySelectorAll('.modal--open').forEach((elm)=> {
        //     elm.classList.remove('modal--open')
        // })

        this.setState({
            isSelected: !this.state.isSelected
        })
    }

    toggleModal(e, index) {
        e.preventDefault()
        
        this.setState({
            isSelected: true,
            modalMovie: this.props.movies[index]
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
                    <div>
                        <ul className="list">
                            {
                                this.props.movies.filter(movie =>
                                    movie.title.toLowerCase().includes(this.state.search.toLowerCase())
                                ).map(
                                    (movie, index) => { return <MovieCard movie={movie} key={index} onClick={(e)=>this.toggleModal(e, index)} /> }
                                )
                            }
                        </ul>
                        <MovieModal
                            movie={this.state.modalMovie}
                            display={this.state.isSelected}
                        />
                    </div>
                ) :
                    (
                    <p>Try searching for a movie</p>
                )}

            </div>
        )

    }

}

export default MovieList  