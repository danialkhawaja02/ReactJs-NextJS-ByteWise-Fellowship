import "./App.css";
import Anchor from "./Anchor";
import Count from "./Count";

function App() {
  return (
    <div>
      <Anchor
        href="https://www.linkedin.com/danialsohail02"
        title="Danial's Linkedin"
      />
      <Anchor
        href="https://www.github.com/danialkhawaja02"
        title="Danial's Github"
      />
      <Count />
    </div>
  );
}

export default App;
