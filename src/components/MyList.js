
//import { object } from "prop-types";
import { API_KEY } from '../service/network';
import React, { Component } from "react";
import Card from './movie/Card';


class MyList extends Component {


    constructor() { //7

        super();
        this.state = {

            movies: [],  // liste des tout les films
            movieIds: this.getFromLocalStorage()
        };
    }

    componentDidMount() {
        //etape 6
        // this.getFromLocalStorage() // on va appler la methode ici ou bien dans le render avec un evenement onClick
        // et comme on va appeler la methoe dans l'etape 7 a l'interieur de state ,on pas besoin de ça
        // etape 7
        //const url=`http://api.themoviedb.org/3/movie/${this.state.movieIds[0]}?api_key=${API_KEY}`//por le premier film


        //Je crée mon array de fetch :promesse ,qui contient les requetes film par film

        const arrayfetch = this.state.movieIds.map(elem => {
            const url = `http://api.themoviedb.org/3/movie/${elem}?api_key=${API_KEY}`;
            return fetch(url).then(res => res.json())


        })
        // ici on recupére tous les reponse de tout les requête pour recuperer tout les film

        Promise.all(arrayfetch)

            .then(results => {

                console.log('[MyList]results', results)

                const newArray = results.map(elem => {
                    return {
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: `https://image.tmdb.org/t/p/w300/${elem.poster_path}`
                    }

                })

                console.log('[MyList]newArray', newArray)

                this.setState({

                    movies: newArray,
                });

            }).catch(err => console.error(err))



    }

    getFromLocalStorage() { //etape 6

        const myList = JSON.parse(localStorage.getItem('my-list'));// il faut ajouter Json.parse pour qu'il devienne un object
        console.log("[MyList] my list", typeof myList);
        console.log("[MyList] my list", myList);
        return myList;

    }






    render() {
        return (
            // il faut returner la card 

            <div>
                { this.state.movies.map((elem, index) => {
                    return (
                        < Card key={index}
                            //    title={elem.title}
                            //    description={elem.description}
                            //    imgUrl={elem.imgUrl}
                            {...elem}></Card>
                        // comme tout les props ont un elem commun donc on peut faire un spred
                    )
                })}
            </div>
        );
    }
}
export default MyList;








// etape 6 et 7
// class MyList extends Component {

//      constructor() {
//          super();
//         
//        this.state = {
//              localStorage: [],
//              movies: [],  // liste des tout les film
//             movieIds: this.getFromLocalStorage()
//         };
//     //     console.log("valeur de local storage", localStorage);
//     // }

//     getFromLocalStorage() {

//         const movieIdsList = localStorage.getItem('my-list')
//         console.log("dans getfromLS", typeof movieIdsList);
//         console.log('list des id des film cliquer', movieIdsList);
//     }

//     componentDidMount() {
//         const promises = this.state.movies.map(elem => () => this.fetchMovies(elem));
//         Promise.all(promises)

//             .then((results) => {
//                 console.log('results', results);

//             });

//     }
//     fetchMoviece() {
//         return fetch(`http://api.themoviedb.org/3/movie/${this.state.movieIds}?api_key=134d92c3d72c8501356da2496ace8c7e`)
//             .then(res => res.json())
//             .then(json => json[0])

//     }

//     render() {
//         return (
//             // il faut returner la card 
//             <div onClick={this.getFromLocalStorage}>
//                 <button> click ici</button>
//             </div>
//         );
//     }
// }
// export default MyList;
//-------------------------------------------------------------------------------------------
 //console.log( json);
    //     // create an array of promises
    //     const promises = this.state.movieIds.map(movieID => pList(movieID));
    //     console.log('liste des film', this.state.movieIds)


    //     // execute all promises
    //     Promise.all(promises)
    //         .then((pList) => {
    //             // receives an array of responses
    //             // console.log('countries[0].capital', countries[0].capital);
    //             // console.log('countries[1].capital', countries[1].capital);
    //         });

    //     this.setState({
    //         movies: pList,
    //     })

    //     console.log('list des film avec ID', pList)