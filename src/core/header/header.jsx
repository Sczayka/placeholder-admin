import './header.css';
import logo from '../../assets/logo.svg'

function Header() {
    return (
      <nav className="main-menu">
        <img src={logo} alt="" />
      </nav>
    );
  }
  
  export default Header;