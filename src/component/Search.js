import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Search({ searchdetails }) {
  const { title } = useParams();

  const search = searchdetails.find((item) => item.work.title.toLowerCase() === title.toLowerCase());
  console.log("search--->",searchdetails)

  
  if (!search) {
    return (
      <div className="detailmaindiv">
        <p style={{ color: "red", fontSize: "30px" }}> Nicht gefunden "{title}"</p>
      </div>
    );
  }


  return (
    <div className="detailmaindiv">
      <div className="carddiv">
        <p style={{ color: "red", fontSize: "30px" }}>{search.work.title}</p>
        <img src={`https://covers.openlibrary.org/b/id/${search.work.cover_id}-M.jpg`}></img>
        <p style={{ fontSize: "25px" }}><b>{search.work.author_names}</b></p>
        <p>{search.work.cover_edition_key}</p>
        <p>Publish year : {search.work.first_publish_year}</p>
      </div>
    </div>
  );
}
