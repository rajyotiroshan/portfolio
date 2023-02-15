import "./Left.css";

const Left = () => {
  const handleClick = (id) => () => {
    const sec = document.getElementById(id);
    sec.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <header>
      <div className="profile-pic"></div>
      <nav>
        <a
          href="#about-me"
          className="nav-link"
          onClick={handleClick("aboutme")}
        >
          About Me
        </a>
        <a
          href="#exp"
          className="nav-link"
          onClick={handleClick("experiences")}
        >
          Experiences
        </a>
        <a href="#projs" className="nav-link" onClick={handleClick("projects")}>
          Projects
        </a>
        <a href="#s" className="nav-link" onClick={handleClick("skills")}>
          Skills
        </a>{" "}
        <a href="#c" className="nav-link" onClick={handleClick("certs")}>
          Certifications
        </a>
        <a href="#e" className="nav-link" onClick={handleClick("edu")}>
          Educations
        </a>
        <a href="#c" className="nav-link" onClick={handleClick("contactme")}>
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
