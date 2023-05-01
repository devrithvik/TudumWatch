import React from 'react'
const API_KEY =  '20499b33ca190c361d3a099f370b98c4';
const Urls = {
  API_KEY :  '20499b33ca190c361d3a099f370b98c4',
  Trending : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`,
  Popular : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`,
  Toprated : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=3`,
  New : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`,
 }

export default Urls;