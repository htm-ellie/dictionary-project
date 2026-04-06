import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5> {props.meaning.partOfSpeech}</h5>

      <div className="Meaning">
        <p>
          <strong>Definition:</strong> {props.meaning.definition}
          <br />
          <strong>Example:</strong>
          <em> {props.meaning.example}</em>
          <br />
          <strong>Synonyms: </strong>
          {props.meaning.synonyms}
        </p>
      </div>
    </div>
  );
}
