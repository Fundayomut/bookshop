import './App.css';
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Home from './component/Home';
import { useEffect, useState } from 'react';
import Buchdetails from './component/Buchdetails';
import Search from './component/Search';
import Author from './component/Author';



function App() {
const [data, setData]=useState();

useEffect(()=>{
  try {
    fetch(`https://openlibrary.org/people/mekBot/books/want-to-read.json`)
  .then((res)=>res.json())
  .then((json)=>{
    setData(json.reading_log_entries)
  })
  } catch (error) {
    console.error("Catch Error:", error);
  }
  
},[data])

//console.log("appjs data-->",data);

  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home startseite={data} />}/>
        <Route path='/Buchdetails/:id' element={<Buchdetails buchdetails={data}/>}/>
        <Route path='/Search/:title' element={<Search searchdetails={data}/>}/>
        <Route path='/Author/:author' element={<Author authordetails={data}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
