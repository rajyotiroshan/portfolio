const Certification = ({ name, desc }) => {
  return (
    <article className="cert">
      <h4>{name}</h4>
      <p>{desc}</p>
    </article>
  );
};

export default Certification;
