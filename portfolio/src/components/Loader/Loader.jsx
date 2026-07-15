import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-logo">JP</h1>
        <h2>Jatin Prajapat</h2>
        <p>Full Stack Developer</p>

        <div className="loading-bar">
          <div className="loading-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;