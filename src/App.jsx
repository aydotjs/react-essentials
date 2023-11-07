import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
// import componentImg from "./assets/components.png";
// import stateImg from "./assets/state-mgmt.png";
// import jsxImg from "./assets/jsx-ui.png";
// import configImg from "./assets/config.png";
import { CORE_CONCEPTS } from "./data";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              // title="Components"
              // description="The Core UI building Block"
              // image={componentImg}
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcepts
              // title="State"
              // description="Enable Dynamic and interactive User Interfaces"
              // image={stateImg}
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts
              // title="Javascript XML"
              // description="Describes UI components with HTML-like syntax"
              // image={jsxImg}
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcepts
              // title="Props"
              // description="Make components configurable (and therefore reusable) by passing input data to them"
              // image={configImg}
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>States</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
