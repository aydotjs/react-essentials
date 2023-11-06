import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import componentImg from "./assets/components.png";
import stateImg from "./assets/state-mgmt.png";
import jsxImg from "./assets/jsx-ui.png";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title="Components"
              description="The Core UI building Block"
              image={componentImg}
            />
            <CoreConcepts
              title="State"
              description="Enable Dynamic and interactive User Interfaces"
              image={stateImg}
            />
            <CoreConcepts
              title="Javascript XML"
              description="Describes UI components with HTML-like syntax"
              image={jsxImg}
            />
            <CoreConcepts
              title="Components"
              description="The Core UI building Block"
              image={componentImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
