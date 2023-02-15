import { useRef } from "react";

const Project = () => {
  const projRef = useRef(null);
  const mouseEnter = (evt) => {
    evt.stopPropagation();
    projRef.classList.remove("proj-hover-hide");
    projRef.classList.add("proj-hover-show");
  };

  const mouseLeave = (evt) => {
    evt.stopPropagation();

    evt.target.classList.remove("proj-hover-show");
    evt.target.classList.add("proj-hover-hide");
  };
  return (
    <article className="proj" onMouseEnter={mouseEnter}>
      <h2 className="proj-hdr">Adopt Me</h2>
      <div className="proj-img"></div>
      <div
      ref={projRef}
        className="proj-hover proj-hover-hide"
        
        onMouseLeave={mouseLeave}
      >
        <p className="proj-desc">
          A Platform where you can search for any pet available for adoption.
          You can also post a request for pet adoption.
        </p>
        <h3>Technology Stack</h3>
        <ul className="proj-tech-list">
          <li>React.js (Redux/React Router)</li>
          <li>Node.js (Express.js)</li>
          <li>AWS For deployment</li>
          <li>AWS Dynamodb and AWS RDS</li>
        </ul>
      </div>
    </article>
  );
};

export default Project;
