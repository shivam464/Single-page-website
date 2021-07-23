import './App.css';
import Navbar from "./Components/Navbar";
import ITServices from "./Components/ITServices";
import Solutions from "./Components/Solutions";
import Hosting_Services from "./Components/Hosting_Services";
import Design from "./Components/Design";
import Features from "./Components/Features";
import TeamMember from "./Components/TeamMember";
import Projects from "./Components/Projects";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import Companies from "./Components/Companies";
import Blogs from "./Components/Blogs";
import JoinWithUs from "./Components/JoinWithUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="Main_div">
      <Navbar />
      <ITServices />
      <Solutions />
      <Hosting_Services />
      <Design />
      <Features/>
      <TeamMember/>
      <Projects/>
      <Pricing/>
      <Testimonial/>
      <Companies/>
      <Blogs/>
      <JoinWithUs/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
