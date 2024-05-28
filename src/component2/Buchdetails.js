import React from 'react'
import { useParams } from 'react-router-dom'

export default function Buchdetails({buchdetails}) {
const {id}=useParams();
//console.log("buchdetails-->",buchdetails)

const buch=buchdetails.find((buch)=>buch.work.cover_edition_key === id)

  return (
    <div>
        <p>{buch.work.title}</p>
        <p>{buch.work.author_names}</p>
    </div>
  )
}
