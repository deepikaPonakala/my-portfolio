function Projects() {
  const projects = [
    {
      title: "Recipe Finder Web Application",
      tech: "HTML, CSS, JavaScript",
      desc: "Developed a responsive web application to search and discover recipes using external APIs.",
      link: "https://github.com/deepikaPonakala/recipe-finder"
    },
    {
      title: "Smart Crop Sharing & Marketplace System",
      tech: "JavaScript, Node.js, Express.js, MySQL",
      desc: "Built a web platform with role-based dashboards for farmers and buyers to manage crop listings and requests.",
      link: "https://github.com/deepikaPonakala/Crop_Sharing"
    },
    {
      title: "Car Price Prediction",
      tech: "Machine Learning, Flask, HTML",
      desc: "Built a web-based application to predict car prices using machine learning models.",
      link: "https://github.com/deepikaPonakala/carPricePrediction"
    },
    {
      title: "Cartoonifier Application",
      tech: "Python, OpenCV, NumPy, Tkinter",
      desc: "Developed a desktop application to convert images into cartoon-style visuals.",
      link: "https://github.com/deepikaPonakala/cartoonifyImages"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <h4>{project.tech}</h4>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;