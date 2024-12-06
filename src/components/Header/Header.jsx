import { Link ,NavLink} from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '15px 20px', 
            backgroundColor: '#2c3e50', 
            color: '#ecf0f1', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}>
            <span style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                letterSpacing: '1px' 
            }}>
                My Website
            </span>
            <nav>
                <ul style={{ 
                    display: 'flex', 
                    gap: '15px', 
                    listStyleType: 'none', 
                    margin: '0', 
                    padding: '0' 
                }}>
                    <li>
    <NavLink to="/">Home</NavLink>
</li>
<li>
    <NavLink to="/posts">Posts</NavLink>
</li>
<li>
    <NavLink to="/user">Users</NavLink>
</li>
<li>
    <NavLink to="/about">About</NavLink>
</li>
<li>
    <NavLink to="/contact">Contact</NavLink>
</li>

                    
                </ul>
            </nav>
        </header>
    );
};

// Common link styles
const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
};

// Add hover effect dynamically
linkStyle[':hover'] = {
    backgroundColor: '#3498db',
    color: '#ffffff',
};

export default Header;
