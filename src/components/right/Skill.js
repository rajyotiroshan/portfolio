const Skill = ({ name, percentage }) => {
  const style = {
    width: `${percentage}%`
  };
  return (
    <article className="skill">
      <div className="skill-name" style={style}>
        {name}
      </div>
    </article>
  );
};

export default Skill;
