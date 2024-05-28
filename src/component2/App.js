import React, { useEffect, useState } from 'react'
import Home from './Home'
import Search from './Search'
import Buchdetails from './Buchdetails';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {
    const [data,setData]=useState();

    useEffect(()=>{
        fetch(`https://openlibrary.org/people/mekBot/books/want-to-read.json`)
        .then((res)=>res.json())
        .then((json)=>{
            setData(json.reading_log_entries)
        })
    },[data])

  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home startseite={data}/>}/>
                <Route path='/Buchdetails/:id' element={<Buchdetails buchdetails={data}/>}/>
                <Route path='/Search/:title' element={<Search searchdetails={data}/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App