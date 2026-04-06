import React from "react";

export default function Synonyms(props){
    console.log(props.meaning.synonyms);
  if (props.meaning.synonyms) {
    return "Hello from Synonyms";

  } else {
    return null;
  }
}