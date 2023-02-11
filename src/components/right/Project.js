const Project = () => {
  return (
    <article className="proj">
      <img src="../../assets/projects-images/adoptme.jpg" alt="project img" />
      <h2 className="proj-hdr">Adopt Me</h2>
      <p className="proj-desc">
        A Platform where you can search for any pet available for adoption. You
        can also post a request for pet adoption.
      </p>
      <h3>Technology Stack</h3>
      <ul>
        <li>React.js (Redux/React Router)</li>
        <li>Node.js (Express.js)</li>
        <li>AWS For deployment</li>
        <li>AWS Dynamodb and AWS RDS</li>
      </ul>
    </article>
  );
};

export default Project;
