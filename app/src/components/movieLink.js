import React, { Component } from 'react'
import MovieModal from './movieModal'

class MovieLink extends Component {

    constructor() {
        super()
        this.state = {
            modalClass: false
        }
        this.toggle = this.toggle.bind(this)
    }

	toggle(e) {
		// document.querySelectorAll('.modal').forEach(function(elm) {
        // 	if(elm.classList.contains('modal--open')) { elm.classList.remove('modal--open') }
        // })

        e.preventDefault()
        this.setState({ modalClass: !this.state.modalClass })
        console.log(this.props.movie.id)
	}

    render() {
        return (
            <li className="list__item" onClick={this.toggle} >
            	<img src={'http://image.tmdb.org/t/p/w200' + this.props.movie.poster_path} alt="" />
                <h1>{this.props.movie.title}</h1>
                {
                	this.state.modalClass ?
		                <MovieModal
		                	movie={this.props.movie}
		                	display={this.state.modalClass  ? 'modal--open' : ''}
		                />
                	: ''
                }
            </li>
        )
    }

}
 
export default MovieLink