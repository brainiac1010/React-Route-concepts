import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;



    const navigate = useNavigate();

    const postStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: "#002242",
        color: "#fff",
        textAlign: "left",
    };

    const buttonStyle = {
        padding: "8px 16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        textDecoration: "none",
    };

    const handelDetailButton = () => {
        navigate(`/post/${id}`);
        console.log('working')
    }

    return (
        <div style={postStyle}>
            <h4>Post ID: {id}</h4>
            <p>{title}</p>
           
            <Link to={`/post/${id}`}>
                
            <button style={buttonStyle} onClick={handelDetailButton}> Click to see details</button>
            </Link>

        </div>
    );
};

export default Post;
