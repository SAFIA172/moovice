import React, { Component } from 'react';

 import Card from './movie/Card';
// import placeholder from '../image/placeholder.png';// les 3 import sont utilisable 
// import { API_KEY } from '../service/network' //avant l'importe de la methode getLatesMovies 
// import moment from 'moment'                         
import { getLatestMovies } from '../service/network'

class Discover extends Component {

    constructor() {

        super()
        this.state = {
            movies: [],

        }

    }
    componentDidMount() {
        getLatestMovies().then(movies=>{this.setState({movies})})





        // const TODAY = moment().toISOString();
        // const NEXT_WEEK = moment().add(1, 'weeks').toISOString();
        // console.log('[Discover]today', TODAY);
        // console.log('[Discover] next_week', NEXT_WEEK);
        // const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`
        // fetch(url)
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log('[Discover]json', json)
        //         const movies = json.results.map((elem) => {
        //             //  console.log ('my elem', elem)
        //             //  console.log('my return',elem)
        //             return {
        //                 title: elem.title,
        //                 description: elem.overview,
        //                 imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder

        //             }
        //         })
        //         this.setState({ movies: movies })
        //         console.log('my movies', movies)

        //     })

    }

    render() {
        console.log('popular render', this.state) // pour savoir si c'est bien enregistrer avec this set state
        const {
            movies
        } = this.state

        return (
            <div className='row'>
              
            
                {/* // react demande quand on faire un map dans le render d'ajouter une key */}

                {movies.map((elem, index) => {
                    console.log('Popular render map', elem);
                    return (<div className='col-6'>
                        <Card title={elem.title} description={elem.description} imgUrl={elem.imgUrl} />
                    </div>
                    )
                })}





            </div>
        )
    }
} export default Discover