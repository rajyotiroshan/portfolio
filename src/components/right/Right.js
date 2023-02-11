import "./Right.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Educations from "./Educations";
import ContactMe from "./ContactMe";
const Right = () => {
  return (
    <section className="right">
      <AboutMe />
      <Experiences />
      <Projects />
      <Skills />
      <Certifications />
      <Educations />
      <ContactMe />
    </section>
  );
};

export default Right;
