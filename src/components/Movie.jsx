import React from 'react'
import  {FaHeart,FaRegHeart} from 'react-icons/fa'
import useState from 'react'

export const Movie = ({item}) => {
    const [liked,setLiked] = React.useState(false);
  return (
    <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto inline-block cursor-pointer ' >
        <img className='w-full h-full rounded-md' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} /> 
        <div className='absolute w-full h-full top-0 left-0 opacity-0 hover:bg-black/60 hover:opacity-100 flex '>
        <p className='text-white text-sm md:text-md self-center m-auto max-w-[100%]'> {item?.title}</p>
        <p> {liked ? <FaHeart className='absolute t ext-white top-4 left-5'/> : <FaRegHeart className='absolute text-white top-4 left-5'/>} </p>
        </div>     
    </div>
  )
}
