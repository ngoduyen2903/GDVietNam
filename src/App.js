import Navbar from "./components/Navbar/Navbar";
import Introduce from "./components/Introduce/Introduce";
import Service from "./components/Service/Service";
import "./App.css";
import Mile from "./components/Mile/Mile";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { useState, useEffect } from "react";
import Solution from "./components/Solution/Solution";
import Reviews from "./components/Reviews/Reviews";
import GridLoader from "react-spinners/GridLoader";
import Project from "./components/Project/Project";
import TeamMember from "./components/TeamMember/TeamMember";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])
  return (
    <div className="App">
      {loading ?
        <GridLoader color={'#106eea'} loading={loading} size={25} className="Loading" /> :
        <div>
          <Navbar />
          <Introduce />
          <About />
          <Service />
          <Mile />
          <Reviews />
          <Project />
          <Solution />
          <TeamMember />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
