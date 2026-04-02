import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5> {props.meaning.partOfSpeech}</h5>

      <div className="Meaning">
        <p>
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>
        </p>
      </div>
    </div>
  );
}
