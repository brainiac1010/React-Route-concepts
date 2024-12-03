import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {
    //state-->data
    //state --> loader
    //use effect
    //fetch --> state set --> set state

    const users = useLoaderData();
    console.log(users);
    const users1 = ["Alice", "Bob", "Charlie", "Diana"]; 

    return (
        <div className="container">
            <h2>Our users: {users?.length || 0}</h2> 
            
       
            <div className="Users">
                {users?.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>

          
            <ul>
                {users1.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
