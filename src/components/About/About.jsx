import { NavLink } from 'react-router-dom';
import './About.css';
import picOfHotMan from '../../photos/photo_2025-07-18_21-06-41.jpg';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h2>About</h2>
        <img src={picOfHotMan} alt="hotMan" />
        <NavLink to="/">Go Back</NavLink>
      </div>
    </div>
  );
}

export default About;
