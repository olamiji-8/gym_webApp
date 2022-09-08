import "./navbar.css"
import {Link,NavLink } from "react-router-dom"
import Logo from "../images/logo.png"
import {links} from "../data"
import {GoThreeBars} from "react-icons/go"

const NavBar = () => {
  return (
   <nav>
    <div className="nav_container">
    <Link to ="/" className="logo" >
    <img src={Logo} alt="Nav"/>
    </Link>
     
   <ul className="nav_links">
    {
      links.map(({name,path}, index)=> {
        return(
          <li>
            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : 
            ''}>{name}</NavLink>
          </li>
        )
      })
    }
   </ul>
   <button className="nav_toggle-btn">
   <GoThreeBars/>
   </button>
     

    </div>
   </nav>
  )
}

export default NavBar