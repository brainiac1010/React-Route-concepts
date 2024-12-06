import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f2f2f2',
            fontFamily: 'Arial, sans-serif',
            color: '#333'
        }}>
            <div style={{
                textAlign: 'center',
                backgroundColor: '#fff',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '80%',
                maxWidth: '600px'
            }}>
                <h2 style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#e74c3c'
                }}>
                    Oops! Something went wrong.
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#7f8c8d',
                    marginTop: '10px'
                }}>
                    {error.statusText || error.message}
                </p>
                {error.status === 404 && (
                    <div style={{
                        marginTop: '30px',
                        padding: '20px',
                        backgroundColor: '#f8d7da',
                        borderRadius: '8px',
                        color: '#721c24',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                        }}>
                            Page Not Found
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            marginBottom: '20px'
                        }}>
                            It seems the page you were looking for doesn't exist. You can go back to the homepage.
                        </p>
                        <Link to="/">
                            <button style={{
                                padding: '12px 24px',
                                backgroundColor: '#2ecc71',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                transition: 'background-color 0.3s'
                            }}>
                                Go to Home
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;
