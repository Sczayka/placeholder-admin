import './aside-menu.css';

// Icons
import { FaHome, FaMapMarkerAlt, FaUser, FaRegSun } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";

function AsideMenu() {
    function reloadPage() {
        setTimeout(() => { document.location.reload() }, 0)
    }

    return (
        <Router>
            <aside>
                <ul>
                    <Link to="/places">
                        <li title="Locais" onClick={() => reloadPage()}><FaMapMarkerAlt /></li>
                    </Link>
                    <Link to="/users">
                        <li title="Usuários" onClick={() => reloadPage()}><FaUser /></li>
                    </Link>
                </ul>
            </aside>
        </Router>
    );
}

export default AsideMenu;