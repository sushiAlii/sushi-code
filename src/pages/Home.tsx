import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home-content">
      <h1 className="home-header-text">
        Experience coding <span>sushi style</span> for Free!
      </h1>

      <Link to="/code/javascript">Start Coding</Link>
    </section>
  );
}

export default Home;
