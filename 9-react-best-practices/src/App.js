import { Suspense } from "react";
import "./App.css";
import ImpureCounterComponent from "./components/1-purity/impure";
import PureCounterComponent from "./components/1-purity/pure";
import ParentWithProps from "./components/2-using-context/parent";
import ParentWithContext from "./components/2-using-context/parent2";
import Modal from "./components/20-portals/modal";
import DataFetcher from "./components/3-suspense/DataFetcher";
import TestWithError from "./components/5-error-boundary/test";
import { ErrorBoundary } from "react-error-boundary";
import { FallBack } from "./components/5-error-boundary/fallback";

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
      <hr />
      <h4>Using Context</h4>
      <ParentWithProps />
      <ParentWithContext />
      <hr />
      <h4>Suspense</h4>
      <Suspense fallback={<p>Loading...</p>}>
        <DataFetcher />
      </Suspense>
      <hr />
      <h4>Using Error Boundaries</h4>
      <ErrorBoundary FallbackComponent={FallBack}>
        <TestWithError />
      </ErrorBoundary>

      <hr />
      <h4>Using Portal</h4>
      <Modal>
        <div style={{ background: "grey", padding: "20px" }}>
          This is a modal content rendered using a portal!
        </div>
      </Modal>
    </>
  );
}

export default App;
