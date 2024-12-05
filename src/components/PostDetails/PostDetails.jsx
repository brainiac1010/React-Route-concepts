import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { userId, title,  body } = postDetails;

    const containerStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "600px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        color: "#333",
        lineHeight: "1.6",
    };

    const titleStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "12px",
    };

    const smallTextStyle = {
        fontSize: "0.9rem",
        color: "#555",
    };

    return (
        <div style={containerStyle}>
            <h3 style={titleStyle}>Post Details for User ID: {userId}</h3>
            <p>
                <strong>Title:</strong> {title}
            </p>
            <p style={smallTextStyle}>{body}</p>
        </div>
    );
};

export default PostDetails;  
