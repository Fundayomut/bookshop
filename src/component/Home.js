import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Buchdetails from './Buchdetails';


export default function Home({startseite}) {

  const [searchItem, setSearchItem]=useState("");
  //const { title } = useParams(); 
  
  const handleChange = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
  };

    //console.log("startseite",startseite)

  return (
    <div className='homediv'>
    <div className='homeinputdiv'>
      <input type="text" value={searchItem} onChange={handleChange} placeholder="Search Book..."/>
        <Link to={`/Search/${searchItem}`}><button>Find</button></Link>
        </div>
        <div className='homedetaildiv'>
     {startseite 
      ?(startseite.map((item,index)=>(
        <div className='carddiv' key={index}>
        <Link to={`/Buchdetails/${item.work.cover_edition_key}`} >
        <p style={{color:"red",fontSize:"25px"}}><b>{item.work.title}</b></p> 
        <img src={`https://covers.openlibrary.org/b/id/${item.work.cover_id}-M.jpg`}></img></Link>
        <Link to={`/Author/${item.work.author_names}`}><p><b>{item.work.author_names}</b></p></Link>
      </div>
      )))
      :(<p></p>)}
      </div>
    </div>
   
  )
}


























/* {startseite.reading_log_entries.map((item,index)=>(
        <div key={index}>
            {item.work&& item.work.map((itemx,indexx)=>(
            <p key={indexx}>{itemx.title}</p>
        ))}
      </div>))}*/


/*
 {startseite.work.map((item,index)=>(
        <div key={index}>
          <p>{item.work.title}</p>
      </div>))}
*/


      /*
{startseite 
      ?(startseite.map((item,index)=>(
      <div className='carddiv' key={index}>
        <p style={{color:"red",fontSize:"25px"}}><b>{item.work.title}</b></p>
        <p><b>{item.work.author_names}</b></p>
        <p>Year : {item.work.first_publish_year}</p>
        <p>Edition key:{item.work.cover_edition_key}</p>
      </div>
      )))
      :(<p>nicht finden</p>)}
      */