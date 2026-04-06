import ellielogo from "./ellielogo.png";
import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={ellielogo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/htm-ellie" target="_blank">
              Ellie Litt
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/htm-ellie/dictionary-project"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a href="https://lexicon-project.netlify.app/" target="_blank">
              Netlify.
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}


