import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Author({ authordetails }) {
  const { author } = useParams();

  console.log("authordetails--->", authordetails);

  const searchAuthor = authordetails.filter((item) => item.work.author_names.includes(author));
 
  console.log("searchAuthor--->", searchAuthor);

  return (
    <div className="detailmaindiv">
    <div className="carddiv">
      <p>Number of books by the author: {searchAuthor.length}</p>
      {searchAuthor.map((item, index) => (
        <div key={index}>
          <div className='carddiv' key={index}>
        <Link to={`/Buchdetails/${item.work.cover_edition_key}`} >
        <p style={{color:"red",fontSize:"25px"}}><b>{item.work.title}</b></p> 
        <img src={`https://covers.openlibrary.org/b/id/${item.work.cover_id}-M.jpg`}></img></Link>
        <Link to={`/Author/${item.work.author_names}`}><p><b>{item.work.author_names}</b></p></Link>
      </div>
        </div>
      ))}
    </div>
  </div>
)
}
