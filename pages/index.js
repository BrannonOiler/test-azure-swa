import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';

import { projectIcons } from '../components/Icons';
import SmallCard from '../components/SmallCard';

import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    {/** Auth test */}
    <AuthenticatedTemplate>
      <a href="/logout">Sign out (custom)</a>
      <a href="/mongo">MongoDB Test</a>
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
      <a href="/login">Sign in (custom)</a>
    </UnauthenticatedTemplate>

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
