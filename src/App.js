import "./App.css";
import Architecture from "./components/Architecture";
import Collection from "./components/Collection";
import DesignEducation from "./components/DesignEducation";
import LatestNews from "./components/LatestNews";
import Lifestyle from "./components/Lifestyle";
import MustSeePlaces from "./components/MustSeePlaces";
import NewsDigest from "./components/NewsDigest";
import OutdoorExperience from "./components/OutdoorExperience";
import Services from "./components/Services";
import TheNewyYorkTimes from "./components/TheNewYorkTimes";
import Travel from "./components/Travel";

function App() {
  return (
    <main className="main">
      <section className="appSectionOne">
        <Travel />
        <OutdoorExperience />
      </section>
      <Services />
      <Collection />
      <div className="appSectionTo">
        <div>
          <MustSeePlaces />
          <Lifestyle />
        </div>
        <LatestNews />
      </div>
      <section className="appSectionThree">
        <Architecture />
        <NewsDigest />
        <TheNewyYorkTimes />
      </section>
      <DesignEducation />
    </main>
  );
}

export default App;
