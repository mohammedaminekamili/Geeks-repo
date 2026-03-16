import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"



function Header() {
    return  <nav className="header">
    <div className=" title">
    <FontAwesomeIcon icon={faRocket} className="icon icon_header" />

      <h2>company</h2>
    </div>

      <ul className="menu">
          <li><a href="">Home</a></li>
          <li><a href="" >Features</a></li>
          <li><a href="">Contact</a></li>
      </ul>
      </nav>
  }


  export default Header