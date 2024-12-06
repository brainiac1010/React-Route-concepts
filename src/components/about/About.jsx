const About = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}>This is the About Section</h2>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '16px', textAlign: 'justify' }}>
                Welcome to the About section! Here, you'll find all the essential details and information you need to know about our platform. 
                We aim to provide a user-friendly experience while offering insightful content and resources to help you on your journey.
            </p>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '16px', textAlign: 'justify' }}>
                Our mission is to empower individuals and communities through knowledge, innovation, and collaboration. 
                Stay tuned for more updates and feel free to explore other sections of our site to discover more.
            </p>
        </div>
    );
};

export default About;
