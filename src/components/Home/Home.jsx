import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [showGitHub, setShowGitHub] = useState(false);

    const handleExploreClick = () => {
        setShowGitHub(true);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#f4f7f9',
            fontFamily: 'Arial, sans-serif'
        }}>
            
            <header style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Header></Header>
            </header>

          
            <main style={{
                flex: '1',
                padding: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <section style={{
                    marginBottom: '40px',
                    backgroundColor: '#3498db',
                    padding: '40px 20px',
                    borderRadius: '8px',
                    color: '#fff'
                }}>
                    <h1 style={{
                        color: '#ecf0f1',
                        fontSize: '36px',
                        fontWeight: 'bold'
                    }}>
                        Welcome to Arman's Developer Journey
                    </h1>
                    <p style={{
                        color: '#ecf0f1',
                        fontSize: '18px',
                        lineHeight: '1.6',
                        marginTop: '10px'
                    }}>
                        Hi there! I'm Arman Hossain, a passionate beginner developer. Dive into my journey as I
                        explore the world of coding, build exciting projects, and share my learning experiences.
                        Together, let's create something amazing.
                    </p>
                    <button
                        onClick={handleExploreClick}
                        style={{
                            display: 'inline-block',
                            padding: '12px 25px',
                            marginTop: '20px',
                            backgroundColor: '#2ecc71',
                            color: '#fff',
                            border: 'none',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.3s'
                        }}
                    >
                        Explore My Projects
                    </button>
                </section>

                {/* Projects Section */}
                <section id="projects" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        color: '#2c3e50',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>
                        My Recent Projects
                    </h2>
                    <p style={{ color: '#34495e', fontSize: '18px', marginBottom: '30px' }}>
                        Here's a glimpse of what I've been working on. Check out the latest projects I've created,
                        built with love and passion.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '20px'
                    }}>


                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ color: '#2c3e50', fontSize: '24px', fontWeight: 'bold' }}>Image Search Engine</h3>
                            <p style={{ color: '#34495e' }}>
                                A search engine for finding images based on keywords. You can search for any image and view it instantly. Check it out here:
                                <a href="https://brainiac1010.github.io/Image-Search-engine/" target="_blank" rel="noopener noreferrer">
                                    Image Search Engine
                                </a>
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ color: '#2c3e50', fontSize: '24px', fontWeight: 'bold' }}>Summer Sell</h3>
                            <p style={{ color: '#34495e' }}>
                                A seasonal e-commerce website for summer products. Users can browse through a collection of summer items available for sale.
                                Check it out here:
                                <a href="https://66785120dd68c8b800fc26fc--earnest-pika-3dd079.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Summer Sell
                                </a>
                            </p>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ color: '#2c3e50', fontSize: '24px', fontWeight: 'bold' }}>Geometry Area Calculator</h3>
                            <p style={{ color: '#34495e' }}>
                                An interactive tool to calculate areas of different geometric shapes. It supports shapes like rectangles, circles, and triangles.
                                You can try it here:
                                <a href="https://6671463dff903dce8b9ec80a--incomparable-peony-96a0f8.netlify.app/#rectangle" target="_blank" rel="noopener noreferrer">
                                    Geometry Area Calculator
                                </a>
                            </p>
                        </div>

                    </div>


                    {showGitHub && (
                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '40px' }}>
                            <h3 style={{ color: '#2c3e50', fontSize: '24px', fontWeight: 'bold' }}>GitHub Repository</h3>
                            <p style={{ color: '#34495e' }}>
                                Explore all my projects on my GitHub repository. Here you will find the source code for each of my projects:
                                <a href="https://github.com/brainiac1010" target="_blank" rel="noopener noreferrer">
                                    My GitHub
                                </a>
                            </p>
                        </div>
                    )}
                </section>

                {/* this part will change */}
                <Outlet></Outlet>
            </main>

            <footer style={{
                marginTop: '20px',
                backgroundColor: '#2c3e50',
                color: '#ecf0f1',
                padding: '15px 0',
                textAlign: 'center'
            }}>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;
