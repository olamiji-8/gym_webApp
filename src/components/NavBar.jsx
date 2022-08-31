import "./navbar.css"
import {Link,NavLink } from "react-router-dom"
import Logo from "../images/logo.png"
import {links} from "../data"

const NavBar = () => {
  return (
   <nav>
    <div className="container_nav">
    <Link to ="/" className="logo" >
    <img src={Logo} alt=""/>
    </Link>
     
     <ul>
          {
            links.map(({name,path}, index)=>{
              return(
                <li>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              )
            }
            )
          }
     </ul>
      nav links
      button

    </div>
   </nav>
  )
}

export default NavBar