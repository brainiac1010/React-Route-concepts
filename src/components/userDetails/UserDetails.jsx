import { useLoaderData,useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, phone, website, email, address } = user || {};

    const navigate = useNavigate()
    const hendelBackButton = ()=>{
        navigate(-1);
    }

    return (
        <div style={{ 
            padding: '20px', 
            maxWidth: '600px', 
            margin: '30px auto', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            color:'#3498DB'
        }}>
            <h2 style={{ 
                color: '#3498DB', 
                fontSize: '24px', 
                textAlign: 'center', 
                marginBottom: '20px' 
            }}>
                Details About User: {name || "N/A"}
            </h2>
            <ul style={{ 
                listStyle: 'none', 
                padding: '0', 
                fontSize: '16px', 
                lineHeight: '1.8', 
                color: '#3498DB' 
            }}>
                <li><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" style={{ color: '#3498DB' }}>{website || "N/A"}</a></li>
                <li><strong>Phone:</strong> {phone || "N/A"}</li>
                <li><strong>Email:</strong> {email || "N/A"}</li>
                <li><strong>Address:</strong> {address?.street}, {address?.city}, {address?.zipcode}</li>
            </ul>

            <button onClick={hendelBackButton}>Go back</button>
        </div>
    );
};

export default UserDetails;
