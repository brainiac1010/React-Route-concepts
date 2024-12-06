const Contact = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#eef6f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <h2 style={{ color: '#2c3e50', fontSize: '24px', marginBottom: '10px' }}>Contact Me</h2>
            <p style={{ color: '#34495e', fontSize: '16px', marginBottom: '20px' }}>
                Hi, I'm Arman Hossain! Feel free to reach out to me anytime.
            </p>
            <div style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
                <p><strong>Email:</strong> armanmahi00@gmail.com</p>
                <p><strong>Phone:</strong> 01685757700</p>
                <p><strong>Address:</strong> Dhaka, Bangladesh</p>
            </div>
            <button style={{ 
                marginTop: '20px', 
                padding: '10px 20px', 
                backgroundColor: '#3498db', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' 
            }}>
                Get in Touch
            </button>
        </div>
    );
};

export default Contact;
