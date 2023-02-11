const Skill = ({ name, percentage }) => {
  return (
    <article className="skill">
      <span className="skill-name">{name}</span>
      <span className="skill-perc">{percentage}</span>
    </article>
  );
};

export default Skill;
