import React from 'react'
import { useParams } from 'react-router-dom'

export default function Search({searchdetails}) {
    const{title}=useParams();
    //console.log("searchdetails-->",searchdetails)
    
    const search=searchdetails.find((item)=>item.work.title.toLowerCase()===title.toLocaleLowerCase())

    if(!search){
        return(
            <div>
                <p>nicht gefunden</p>
            </div>
        )
    }

  return (
    <div>
        <div>
            <p>{search.work.title}</p>
            <p>{search.work.cover_edition_key}</p>
            <p>{search.work.author_names}</p>
        </div>
    </div>
  )
}
