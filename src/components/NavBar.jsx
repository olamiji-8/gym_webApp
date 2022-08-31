import "./navbar.css"
import {Link} from "react-router-dom"
import Logo from "../images/logo.png"

const NavBar = () => {
  return (
   <nav>
    <div className="container_nav">
    <Link to ="/" className="logo" >
    <img src={Logo} alt=""/>
    </Link>
      Logo
      nav links
      button

    </div>
   </nav>
  )
}

export default NavBar