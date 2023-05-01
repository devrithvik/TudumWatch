import React from 'react'
import {Head, Rows} from '../components/component'
import Urls from '../components/Urls'

const categories = ['trending','popular','toprated','new'];
export const Home = () => {
   return (
    <div>
        <Head />
        <Rows rowId='1' title='Trending' fetchUrl={Urls.Trending}/>
        <Rows rowId='2' title='Popular' fetchUrl={Urls.Trending}/>
        <Rows rowId='3' title='On Top' fetchUrl={Urls.Trending}/>
        <Rows rowId='4' title='Reccomended' fetchUrl={Urls.Trending}/>
         
            
        
    </div>
  )
}

 