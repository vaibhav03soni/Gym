
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import BMICalculator from "./Components/BMICalculator";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import Gallery from "./Components/Gallery";
import WorkoutSessions from "./Components/WorkoutSessions";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <Router>
      
      <Navbar/>
   <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/>
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;