import { Link } from "react-router-dom";
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm Jgnana Deepika</h1>
        <h3>Aspiring Front-End Developer</h3>
        <p>
          I build responsive web applications using HTML, CSS, JavaScript, and React.js.
          I am passionate about creating clean, user-friendly interfaces.
        </p>

        <a href="/projects" className="btn">View Projects</a>
      </div>
    </section>
  );
}

export default Home;