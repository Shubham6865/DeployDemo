import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
// import About from "./components/About.jsx";
// import Brands from "./components/Brands.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";


import "./styles/App.css";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
// import "./styles/About.scss";
// import "./styles/Brands.scss";
import "./styles/Services.scss";
import "./styles/Footer.scss";
import "./styles/mediaquery.scss";


function App() {
  return (
    
    <Router>
<Header/>

      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       
        <Route path="/Services" element={<Services/>}/>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
