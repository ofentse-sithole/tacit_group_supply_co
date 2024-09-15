import './AboutMiddleSec.css'
import {useEffect} from 'react';

const AboutMiddleSec = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Tacit Group Supply Co.</h1>
          <p>
            As the Tacit Group Supply Co, we specialize in providing top-notch 
            gadgets and phones to meet all your tech needs. With a keen eye for quality, 
            we meticulously curate our inventory to ensure that every product we offer is 
            nothing short of excellent. As trusted consignors, we pride ourselves on delivering 
            reliability and satisfaction with every purchase. Whether you're searching for the 
            latest smartphone or cutting-edge gadgets, we're here to provide unparalleled service 
            and exceptional products.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-mission">

        <div className="mission-vision">
          <h2>Our Mission</h2>
          <p>
            At Tatic Group, our mission is to deliver top-quality 
            products that ensure customer satisfaction and build 
            long-term relationships with our clients.
          </p>
        </div>

        <div className="mission-vision">
          <h2>Our Vision</h2>
          <p>
            To become a globally recognized brand known for our 
            commitment to quality, innovation, and outstanding 
            customer service.
          </p>
        </div>

      </section>

      {/* Company Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Sustainability</li>
        </ul>
      </section>


      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Tacit Group Supply Co. All rights reserved.</p>
        <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
      </footer>
    </div>
  );
};

export default AboutMiddleSec;
