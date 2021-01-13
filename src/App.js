import "./App.css";
import Architecture from "./components/Architecture";
import Collection from "./components/Collection";
import OutdoorExperience from "./components/OutdoorExperience";
import Services from "./components/Services";
import Travel from "./components/Travel";

function App() {
  return (
    <main>
      <section className="appSectionOne">
        <Travel />
        <OutdoorExperience />
      </section>
      <Services />
      <Collection />
      <Architecture />
    </main>
  );
}

export default App;
