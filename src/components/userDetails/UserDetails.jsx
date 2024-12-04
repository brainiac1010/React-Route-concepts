import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();

    
    const { name, phone } = user || {};
    // console.log(name, phone)
    return (
        <div>
        <h3>Details about user: {name}</h3>
        <p>Phone: {phone}</p>
    </div>
    );
};

export default UserDetails;