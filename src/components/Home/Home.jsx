import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <h1 className="main-title">Artem Kilchytskyi</h1>
        <h2 className="subtitle">Portfolio</h2>
        <p className="description">
          Welcome to my personal portfolio website! Here you can get to know me
          better, learn about my projects and skills in web development.
        </p>
        <div className="navigation-section">
          <NavLink to="/about" className="nav-button">
            Learn more about me
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
