import React from 'react'

import Card from './movie/Card';
// import { API_KEY } from '../service/network'; les 3 import sont utilisable  
// import moment from 'moment';                  // avant l'importe de la methode getLatesMovies 
// import placeholder from '../image/placeholder.png';
import { getLatestMovies } from '../service/network'

class DiscoverBattle extends React.Component {

    constructor() {
        super()
        this.cardClick = this.cardClick.bind(this);
        this.state = {

            currentPage: 1,
            movies: [],
            originalList: []
        }
    }
    componentDidMount() {


        getLatestMovies().then(movies=>{this.setState({ originalList: movies,
                     movies: [movies[0], movies[1]]
                    })
                })
        // const TODAY = moment().toISOString();
        // const NEXT_WEEK = moment().add(1, 'weeks').toISOString();
        // // console.log('[DiscoverB]today', TODAY);
        // // console.log('[DiscoverB] next_week', NEXT_WEEK);
        // const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`
        // fetch(url)
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log('[Discover]json', json)
        //         const movies = json.results.map((elem) => {

        //             return {
        //                 id: elem.id,
        //                 title: elem.title,
        //                 description: elem.overview,
        //                 imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder

        //             }
        //         })
        //         this.setState({
        //             originalList: movies,
        //             movies: [movies[0], movies[1]],
        //         })
        //         //console.log('my movies', movies)

        //     })

    }

    cardClick(id) {
        console.log('[DiscoverBattle] cardClick', id);
        //a chaque click il faut j'augmente mon currentPage
        this.setState({
            currentPage: this.state.currentPage + 1
        })
        // il faut enrigistre le film cliquer 
        const myList = JSON.parse(localStorage.getItem('my-list')) // si ya les film on stock le id sinon on sauvgarde un tableau vide

        if (!myList.includes(id)) {
            myList.push(id)
            localStorage.setItem('my-list', JSON.stringify(myList))//mylist doit etre un string  dans local storage
        }

        console.log('[DiscoverBattle]mylist', myList)
        console.log('[DiscoverBattle]currentpage', this.state.currentPage)

        //il faut remplacer les deux film par les deux suivant 

        const secondIndex = this.state.currentPage * 2 - 1;
        const firstIndex = secondIndex - 1;
        console.log('[DiscoverBattle]secondIndex', secondIndex);
        console.log('[DiscoverBattle]firstIndex', firstIndex);

        this.setState({
            movies: [this.state.originalList[firstIndex], this.state.originalList[secondIndex]],
        })

    }
    /*il faut ajouté l'evenment onClick sur html car si sur composant il le considére comme props*/

    render() {

        return (
            <div className="row" >

                {this.state.movies.map((one, index) => (

                    <div className="col-6 " key={index} onClick={() => this.cardClick(one.id)}>
                        <Card {...one}></Card>
                    </div>

                ))}
            </div>
        )
    }
} export default DiscoverBattle