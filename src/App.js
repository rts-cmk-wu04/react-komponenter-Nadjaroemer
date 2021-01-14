import "./App.css";
import Architecture from "./components/Architecture";
import Collection from "./components/Collection";
import DesignEducation from "./components/DesignEducation";
import LatestNews from "./components/LatestNews";
import OutdoorExperience from "./components/OutdoorExperience";
import Services from "./components/Services";
import TheNewyYorkTimes from "./components/TheNewYorkTimes";
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
      <LatestNews />
      <Architecture />
      <DesignEducation />
      <TheNewyYorkTimes />
    </main>
  );
}

export default App;
