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
    </header>
  );
};

export default Left;
