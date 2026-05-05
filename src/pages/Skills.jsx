function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Flask",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span className="skill-card" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;