import './HomeMiddleSec.css';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function HomeMiddleSec() {

    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const AboutPage = () => { 
                            navigate('/about');
                            };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Tacit Group Supply Co.</h1>
                <p>Your One-Stop Shop for Quality Products</p>
                {/*<button className="cta-button">Explore Now</button>*/}
            </header>

            <main className="home-main">
                <section className="services-section">
                <div className= "our-services">
                    <h2>Our Services</h2>
                    <p>We offer a range of high-quality products to meet all your needs.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-item">
                            <h3>iPhone Premium Reselling</h3>
                            <p>High-quality iPhones at competitive prices.</p>
                        </div>
                        <div className="service-item">
                            <h3>Repairs</h3>
                            <p>Expert repair services for all gadgets, specializing in iPhones.</p>
                        </div>
                        <div className="service-item">
                            <h3>Gadgets</h3>
                            <p>A range of premium gadgets and accessories.</p>
                        </div>
                        <div className="service-item">
                            <h3>Professional Procurement Services</h3>
                            <p>Assisting businesses and individuals in sourcing tech products.</p>
                        </div>
                        <div className="service-item">
                            <h3>Consignor Services</h3>
                            <p>Streamlined solutions for consigning your products with us.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                <div className="our-services">
                    <h2>About Us</h2>
                    <p>
                        At Tacit Group Supply Co.,
                        we specialize in providing premium iPhones, 
                        expert repair services, and professional 
                        gadget procurement.
                    </p>
                    </div>
                    <button className="cta-button" onClick={AboutPage}>Read More</button>
                </section>
            </main>

            <footer className="about-footer">
                <p>© {new Date().getFullYear()} Tacit Group Supply Co. All rights reserved.</p>
                <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
            </footer>
        </div>
    );
}

export default HomeMiddleSec;
