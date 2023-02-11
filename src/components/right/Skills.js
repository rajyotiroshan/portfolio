import Skill from "./Skill";
const Skills = () => {
  return (
    <article id="skills" className="right-section">
      <h2>Skills</h2>
      <div className="cont skills">
        <Skill name="HTML" percentage="95" />
        <Skill name="CSS" percentage="90" />
        <Skill name="Javascript" percentage="95" />
        <Skill name="React" percentage="95" />
        <Skill name="System Design" percentage="95" />
        <Skill name="AWS" percentage="70" />
      </div>
    </article>
  );
};

export default Skills;
