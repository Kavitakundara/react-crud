import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/me.png';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
    // const pathChange = useNavigate();
    return (<>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>

                        </li>

                        <li className="nav-item">
                            <Link to="/read">List</Link>

                        </li>

                        <li className="nav-item">
                            <Link to="/create">Create Data</Link>

                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar;