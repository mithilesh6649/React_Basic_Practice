import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";

const App = () =>{
  
  const desing = (
     
          <Router>
          <Navbar />
          <div class="page">
           <div class="container">
            <Routes>
              <Route exact path="/" element={ <Homepage /> }>
              </Route>

              <Route exact path="/images" element={ <h1>Images</h1> }>
              </Route>

              <Route exact path="/videos" element={ <h1>videos</h1> }>
              </Route>

              <Route exact path="/about-us" element={ <h1>about-us</h1> }>
              </Route>

              <Route exact path="/contact-us" element={ <h1>contact-us</h1> }>
              </Route>
            </Routes>
            </div>
             </div> 
          <Footer /> 
          </Router>
         
  );

  return desing;

}

export default App;