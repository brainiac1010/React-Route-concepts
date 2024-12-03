const Users = () => {
    const users = ["Alice", "Bob", "Charlie", "Diana"]; 

    return (
        <div>
            <h2>Our users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
