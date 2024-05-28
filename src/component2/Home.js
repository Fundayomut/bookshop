import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Home({startseite}) {
//console.log("homepagedata---->",startseite)

const [searchItem,setSearchItem]=useState("");

const HandleChange=(e)=>{
    setSearchItem(e.target.value)
}
  return (
    <div className='homediv'>
        <div className='homeinputdiv'>
            <input value={searchItem} placeholder='Search book...' onChange={HandleChange} type='text' />
            <Link to={`/Search/${searchItem}`}><button>Find</button></Link>
        </div>
        <div className='homedetaildiv'>
            {startseite
            ?(startseite.map((item,index)=>(
                <Link to={`/Buchdetails/${item.work.cover_edition_key}`}><div>
                    <p key={index}>{item.work.title}</p>
                    <p>{item.work.cover_edition_key}</p>
                    <p>{item.work.author_names}</p>
                </div></Link>
            ))):(<p>Nicht Finden</p>)}
        </div>
    </div>
  )
}
