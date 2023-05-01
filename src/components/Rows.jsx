import React, { useState,useEffect } from 'react'
import Urls from '../components/Urls'
import { Movie } from './component';
import  {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import axios from 'axios';
export const Rows = ({title,fetchUrl,rowId}) => {  
    const [movies,setMovies] = useState([]);
    
    
   const fetchRow = async () => {
    //    console.log(fetchUrl);
        await axios.get(fetchUrl)
            .then((res) => setMovies(res.data.results))
                .catch(err => console.log(err));
                
        
        // console.log(movies);
    }

    useEffect(()=>{
        fetchRow();
    },[fetchUrl]);
    
  const slide = (e)  => {
   
        var slider = document.getElementById('slider'+rowId);
        if(e == 'left'){
            slider.scrollLeft =  slider.scrollLeft - 500;
        }
        else{
            slider.scrollLeft =  slider.scrollLeft + 500;
        }
  }


  return (
     <div>
        <h2 className='text-white font-bold lg:text-xl m-2'>{title}</h2>




        <div className='flex items-center justify-between text-white'>

            <MdChevronLeft size={40} onClick={() => slide('left')} className='absolute hover:bg-white/50 z-10 rounded-full left-0 hover:text-red-700'/>
        <div  id={'slider'+rowId} className='relative w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hide  scroll-smooth space-x-1 '>
                        {movies.map((movie, id) => (
                                <Movie key={id}  item={movie} />
                        ))}
        </div>
            <MdChevronRight  size={40}  onClick={() => slide('right')} className='absolute right-0 hover:bg-white/50 z-10 rounded-full hover:text-blue-700' />
      </div>
     </div>



  )
    
}
 