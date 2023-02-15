import "./Left.css";

const Left = () => {
  return (
    <header>
      <div className="profile-pic"></div>
      <nav>
        <a href="#aboutme" className="nav-link">
          About Me
        </a>
        <a href="#experiences" className="nav-link">
          Experiences
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>{" "}
        <a href="#certs" className="nav-link">
          Certifications
        </a>
        <a href="#edu" className="nav-link">
          Educations
        </a>
        <a href="#contacts" className="nav-link">
          Contact me
        </a>
      </nav>
      <footer>
        <a
          className="social-link"
          href="https://github.com/rajyotiroshan/portfolio"
          target="_blank"
        >
          GH
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/feed/"
          target="_blank"
        >
          LIn
        </a>
        <a
          className="social-link"
          href="https://www.hackerrank.com/"
          target="_blank"
        >
          HR
        </a>
      </footer>
    </header>
  );
};

export default Left;
