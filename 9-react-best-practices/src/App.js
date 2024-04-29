import logo from "./logo.svg";
import "./App.css";
import ImpureCounterComponent from "./components/Purity/impure";
import PureCounterComponent from "./components/Purity/pure";

function App() {
  return (
    <>
      <h4>Example of Pure vs Impure component</h4>
      <ImpureCounterComponent />
      <ImpureCounterComponent />
      <ImpureCounterComponent />
      <PureCounterComponent />
      <PureCounterComponent />
      <PureCounterComponent />
    </>
  );
}

export default App;
