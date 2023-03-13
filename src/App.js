// import { Route, Routes } from 'react-router-dom';
// import ContactMe from './components/ContactMe';
// import NavBar from './components/NavBar';
import "../src/App.css";
import { FaLinkedin, FaGithub,FaDev } from 'react-icons/fa'

function App() {
  return (
    <div className="app-content">
      <div className="info">
        <div className="copy">
          <h1 className="name"> Bryan Sun </h1>
          <h4> Software Engineer</h4>
        </div>
        <img
          className="pfp"
          src="https://media.licdn.com/dms/image/C5103AQGHaJCX47Gbog/profile-displayphoto-shrink_800_800/0/1517278171816?e=1681948800&v=beta&t=9EUeC4MpWaQbl7OuaLNFk67Ta5QwRNoxolIfDRemyKM"
          alt="Bryan Sun"
        />
        <div className="copy"> Full Stack Developer With a Passion with Building the Future. </div>
      </div>

      <div className="social">
      <button
          className="social-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.linkedin.com/in/bryan-sun-531967113/";
          }}
        >
          {" "}
         <FaLinkedin/> Linkedin
        </button>
        <button
          className="social-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/BryanSun00";
          }}
        >
          {" "}
         <FaGithub/> Github
        </button>
        <button
          className="social-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://medium.com/@bryan.sun117/about";
          }}
        >
          {" "}
         <FaDev/> Blog
        </button>
      </div>

      <div className="projects">
        <button
          className="project-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://medium.com/@bryan.sun117/about";
          }}
        >
          {" "}
          Project 1
        </button>
        <button
          className="project-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.reddit.com/";
          }}
        >
          {" "}
          Project 2
        </button>{" "}
        <button
          className="project-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.reddit.com/";
          }}
        >
          {" "}
          Project 3
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
