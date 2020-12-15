import React from 'react'
import Card from './movie/Card'
import { API_KEY } from '../service/network'
import placeholder from '../image/placeholder.png'

class PopularBattle extends React.Component {

    constructor() {
        super()
        this.choseFilm = this.choseFilm.bind(this)
        this.state = {
            currentPage: 1,
            movies: [],// liste des films

        }

    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const movies = json.results.map((elem) => {
                    //  console.log ('my elem', elem)
                    //  console.log('my return',elem)
                    return {
                        id: elem.id,
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder

                    }
                })
                this.setState({ movies: movies }) // on sauvgarde la liste des film qu'on a recupérer par la requete fetch
                // console.log('my movies', movies)

            })

    }
    choseFilm(id) {

        console.log('le film choisi id', id)
        let myList = JSON.parse(localStorage.getItem('my-list')) || [] // si ya les film on stock le id sinon on sauvgarde un tableau vide

        if (!myList.includes(id)) { // pour verifier si id n'existe pas deja dans la liste on va l'ajouter avec push
            myList.push(id)
            localStorage.setItem('my-list', JSON.stringify(myList))//mylist doit etre un string
        }
        console.log('mylist', myList)

        this.setState({
            currentPage: this.state.currentPage + 1,
        })
    }

    render() {
        const {
            //movies,
            currentPage,
        } = this.state

        const secondIndex = currentPage * 2 - 1
        const firstIndex = secondIndex - 1


        //console.log('popularbattle render', this.state) // pour savoir si c'est bien enregistrer avec this set state

        const firstMovie = this.state.movies[firstIndex]
        // console.log('firstMovie', firstMovie);

        if (firstMovie === undefined) {
            return (<div>Films are loading ,please wait!!</div>)
        }

        const secondMovie = this.state.movies[secondIndex]
        // console.log('firstMovie', secondMovie);


        return (
            <div className="row">
                <div className="col-6">
                    <button onClick={() => this.choseFilm(firstMovie.id)}>
                        <Card  {...firstMovie} />
                    </button>
                </div>

                <div className="col-6">
                    <button onClick={() => this.choseFilm(secondMovie.id)}>
                        <Card  {...secondMovie} />
                    </button>
                </div>

                {/* < Card title={firstMovie.title} description={firstMovie.description} imgUrl={firstMovie.imgUrl}/> ca marche pas parcque on essy d'afficher un undefine car ilconnais pas encore le title  parcontre acev le spreed ça marche on peux passer  des objet vide */}
                {/* le nom de props egale au nom de la cle  donc on peut faire un spred */}




            </div>
        )
    }
} export default PopularBattle

//explication pour afficher deux a deux les film
// on 20 film 
// 1 page ==>1 er &2 éme film 
// (num de page x 2 = num du 2 eme film de chaque battaille)
// (num de 1 ere film === num de 2 eme film -1)
// 2       ==> 3 & 4
// 3      ==> 5 & 6

/* ma premier methde
constructor() {
        super()
        this.click = this.click.bind(this)
        this.state = {
            currentpage: 1,
            movies: [],
            poster_path: '',
            title: '',
            overview: '',
            currentMovice: null,
             image:'',

        }

    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    title: json.results[0].title,
                    posterpath: json.results[0].poster_path,
                    overview: json.results[0].overview,
                    image: './image/placeholder.png',
                    movies: json.results,

                })

                console.log('movice', json.results)
            })
            render() {
        return (
            <div>
                <h5>PopularBattle</h5>

                <Card
                    title={this.state.title}
                    overview={this.state.overview}
                    poster_path={this.state.poster_path} />

                <section>

                    {this.state.movies.map((elem, index) => {
                        return (
                            <button onClick={() => this.click(elem)} key={index} >
                                <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`}style={{width:150,height:250}} />
                                <p>{elem.title}</p>

                            </button>
                        )
                    })}
                </section>
            </div>
        );
    }
} export default PopularBattle
 */