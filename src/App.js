import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This page was coded by{" "}
            <a
              href="https://github.com/wrightrebecca"
              target="_blank"
              rel="noreferrer"
            >
              Rebecca Wright
            </a>
            . It is available on{" "}
            <a
              href="https://github.com/wrightrebecca/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted by{" "}
            <a
              href="https://app.netlify.com/sites/react-weather-forecaster-project/deploys/6744732604cbb300081c85bc"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
