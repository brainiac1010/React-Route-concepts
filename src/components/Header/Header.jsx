import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div>
        <span>My website</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/user">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;
