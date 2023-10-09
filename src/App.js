import Navbar from "./Navbar";
import TrendingSection from "./TrendingSection";
import Cards from "./Cards";
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <br/>
      <TrendingSection />
      <br/>
      <Cards />
    </div>
  );
}

export default App;
