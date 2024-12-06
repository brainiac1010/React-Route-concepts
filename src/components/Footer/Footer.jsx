const Footer = () => {
    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#2c3e50', 
            color: '#ecf0f1', 
            textAlign: 'center', 
            fontSize: '14px', 
            marginTop: '20px' ,
            borderRadius:'10px'
        }}>
            <p style={{ margin: '0', marginBottom: '10px' }}>
                <small>Thank you for visiting my website!</small>
            </p>
            <p style={{ margin: '0' }}>
                <small>© {new Date().getFullYear()} Arman Hossain. All rights reserved.</small>
            </p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
                <small>“Learning to code is not just learning new skills—it's creating the future.”</small>
            </p>
            <div style={{ marginTop: '10px' }}>
                
                <a href="/contact" style={{ color: '#ecf0f1', textDecoration: 'none', margin: '0 10px' }}>
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Footer;
