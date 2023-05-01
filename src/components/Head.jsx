import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import Urls from '../components/Urls'
export const Head = () => {

    const [trendingMovies,setTrendingMovies] = useState([]);

    const fetchTrending = async () => {
        await axios.get(Urls?.Trending)
        .then((res) => setTrendingMovies(res.data.results))
        .catch(err => console.log(err));
    }
    useEffect(() => {
        fetchTrending();
    } , []);

    const posterMovie = trendingMovies[Math.floor(Math.random() * trendingMovies.length)];
      
  return (
    <div className="min-w-screen h-[550px] text-white"> 
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img  className=" top-0 w-full h-[550px] object-cover" src={`https://image.tmdb.org/t/p/original/${posterMovie?.backdrop_path}`} alt={posterMovie?.title} />
       
       <div className='absolute w-full top-[20%] pl-8 sm:pl-12 md:pl-16 space-y-4'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>{posterMovie?.title}</h1>
        <div>
        <button className=' border-slate-900 bg-red-600 mr-4 px-2 py-1 rounded-sm'>Play</button>
        <button className=' border px-2 py-1 rounded-sm' >watchlater</button>
       </div>
       <div>
       <div className='text-gray-600 text-sm mb-1'>released on: {posterMovie?.release_date}</div>
       <div className="w-[80vw] md:w-[60vw] xl:w-[35vw] text-xs sm:text-sm md:text-md font-light ">{posterMovie?.overview.length>200 ? posterMovie?.overview.slice(0,200)+ "..." : posterMovie?.overview }</div>
       </div>
       </div>
    </div>
  )  
}
