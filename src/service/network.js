

import placeholder from '../image/placeholder.png';
import moment from 'moment';
export const API_KEY = '134d92c3d72c8501356da2496ace8c7e';


//ctrl+R sur network pour voir tout les requettes

function fetchAndTransformMovies(url) {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log('[Discover]json', json)
            const movies = json.results.map((elem) => {

                return {
                    id: elem.id,
                    title: elem.title,
                    description: elem.overview,
                    imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder

                }
            })

            return Promise.resolve(movies)

        })

}
export const getLatestMovies = () => {
    const TODAY = moment().toISOString();
    const NEXT_WEEK = moment().add(1, 'weeks').toISOString();
    const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`
    return fetchAndTransformMovies(url)
}

export const getPopularMovies = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
    return fetchAndTransformMovies(url)
}

export const getMovie = (id) => {
    const url = `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    return fetchAndTransformMovies(url)
}