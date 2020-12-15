import React, { Component } from 'react';
import { API_KEY } from '../service/network'
import Card from './movie/Card'
import placeholder from '../image/placeholder.png'

class Popular extends Component {

    constructor() {
        super()

        this.state = {
            movies: [],

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
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder

                    }
                })
                this.setState({ movies: movies })
                console.log('my movies', movies)

            })

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
} export default Popular


/*ma 1er methode
  constructor(){
         super()

         this.click=this.click.bind(this)
       this.state = {
        movies: [],
        poster_path: '',
        title: '',
        overview: '',
        currentMovice: null,
         image:'',
    }

}   componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                console.log(json)
                // const movies=json.result.map((elem)=>{
                //     return
                // })
                this.setState({
                    title: json.results[0].title,
                    posterpath: json.results[0].poster_path,
                    overview: json.results[0].overview,
                    movies: json.results,
                    image:'./image/placeholder.png',


                })

                console.log('movice', json.results)

            })

    }  click(poster_path) {
        fetch(poster_path)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    currentMovice: json
                })
            })
    }
     render() {
        return (
            <div>
               <h6>Popular</h6>

                <Card
                    title={this.state.title}
                    overview={this.state.overview}
                    poster_path={this.state.poster_path}
                    image= {this.state.image}/>
                <section>

                    {this.state.movies.map((elem,index) => {
                        return (
                            <span onClick={() => this.click(elem.poster_path)} key={index} >

                                <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} style={{width:150,height:250}} />
                                <p><b>{elem.title}</b></p>
                                <p>{elem.overview}</p>
                            </span>
                        )
                    })}
                </section>

            </div>
        )
    }*/
