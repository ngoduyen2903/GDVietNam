import Navbar from "./components/Navbar/Navbar";
import Introduce from "./components/Introduce/Introduce";
import Service from "./components/Service/Service";
import "./App.css";
import Mile from "./components/Mile/Mile";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { useContext, useState, useEffect } from "react";
import { themeContext } from "./Context";
import Solution from "./components/Solution/Solution";
import Reviews from "./components/Reviews/Reviews";
import GridLoader from "react-spinners/GridLoader";
import Project from "./components/Project/Project";
import TeamMember from "./components/TeamMember/TeamMember";
import ImageCarousel from "./components/CompanyImage/Image";
import Statistics from "./components/Statistics/Statistics";
import Quote from "./components/Quote/Quote";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? "#212B36" : "", color: darkMode ? "white" : "", }}>
      {loading ?
        <GridLoader color={'#106eea'} loading={loading} size={25} className="Loading" /> :
        <div>
          <Navbar />
          <Introduce />
          <About />
          <Mile />
          <Reviews />
          <Service />
          <Statistics />
          <TeamMember />
          <ImageCarousel />
          <Project />
          <Solution />
          <Quote />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
