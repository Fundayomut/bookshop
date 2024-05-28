import React from "react";
import { useParams } from "react-router-dom";

export default function Buchdetails({ buchdetails }) {
  const { id } = useParams();
  console.log("buchdetails", buchdetails);

  const buch = buchdetails.find((buch) => buch.work.cover_edition_key === id);
  //console.log("buch-->", buch);

  return (
    <div className="detailmaindiv">
      <div className="carddiv">
        <p style={{ color: "red", fontSize: "30px" }}>{buch.work.title}</p>
        <img src={`https://covers.openlibrary.org/b/id/${buch.work.cover_id}-M.jpg`}></img>
        <p style={{ fontSize: "25px" }}><b>{buch.work.author_names}</b></p>
      </div>
      <div>
        <h4>**** Info Detail ****</h4>
        <p>Edition key : {buch.work.cover_edition_key}</p>
        <p>Publish year : {buch.work.first_publish_year}</p>
        <p>Cover id :{buch.work.cover_id}</p>
        </div>
    </div>
  );
}
