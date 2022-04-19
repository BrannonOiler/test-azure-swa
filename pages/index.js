import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    {/** Auth test */}
    <div>
      <a href="/login">Sign in (custom)</a>
      <a href="/logout">Sign in (custom)</a>
    </div>

    {/** Default */}
    <h1>What Can I Deploy to Static Apps?</h1>
    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return (
          <SmallCard
            key={project.id}
            Icon={Icon}
            title={project.name}
            slug={project.slug}
          />
        );
      })}
    </div>
  </div>
);

export default Home;
