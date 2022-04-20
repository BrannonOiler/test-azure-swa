import { projectIcons } from '../components/Icons';
import SmallCard from '../components/SmallCard';

import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    {/** Tests */}
    <a href="/login">Sign in (custom)</a>
    <a href="/logout">Sign out 1</a>
    <a href="/.auth/logout?post_logout_redirect_uri=/">Sign out 2</a>
    <a href="/logout?post_logout_redirect_uri=https://brave-hill-003077a0f.1.azurestaticapps.net/">
      Sign out 3
    </a>
    <a href="/mongo">MongoDB</a>
    <a href="/secret">Secret</a>
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
