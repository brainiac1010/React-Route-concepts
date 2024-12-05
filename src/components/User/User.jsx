
import { Link } from 'react-router-dom'; 

const User = ({ user }) => {
    const { id, name, phone, email } = user || {};

    const userStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
    };

    const headingStyle = {
        fontSize: "1.5rem",
        marginBottom: "8px",
        color: "#333",
    };

    const paragraphStyle = {
        margin: "4px 0",
        color: "#555",
    };

    return (
        <div style={userStyle}>
            <h2 style={headingStyle}>{name || "Unknown User"}</h2>
            <p style={paragraphStyle}>
                <strong>Email:</strong> {email || "N/A"}
            </p>
            <p style={paragraphStyle}>
                <strong>Phone:</strong> {phone || "N/A"}
            </p>
            <Link to={`/user/${id}`}>Show details</Link>
            <Link to ={`/user/${id}`}><button> Click </button> </Link>
        </div>
    );
};

export default User;
