import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./Navbar.css";
import myphoto from './logo192.png';
const Navbar = () => {
	const navbar_desing = (
       <ul>
         <li><Link to="/"><img src={myphoto} width="40" /></Link></li>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/images">Images</Link></li>
         <li><Link to="/videos">Videos</Link></li>
         <li><Link to="/about-us">About us</Link></li>
         <li><Link to="/contact-us">Contact us</Link></li>
       </ul>
	);

	return navbar_desing;
}

export default Navbar;