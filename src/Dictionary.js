import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "84ob6879a3t305ff0c4b95aea130d3b6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1> Type the word you would like to define below:</h1>
        <form onSubmit={search} className="Form">
          <input type="search" onChange={handleKeywordChange} />
        </form>
        
      </section>

      <Results results={results} />
    </div>
  );
}


