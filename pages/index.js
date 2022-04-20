import { useEffect, useState } from 'react';

import { projectIcons } from '../components/Icons';
import SmallCard from '../components/SmallCard';

import { projects } from '../utils/projectsData';

const Home = () => {
  const [logoutURL, setLogoutURL] = useState(
    '/.auth/logout?post_logout_redirect_uri=/'
  );
  const [user, setUser] = useState(null);
  const isSignedIn = Boolean(user);

  useEffect(() => {
    const getUser = async () => {
      setUser((await (await fetch('/.auth/me')).json())?.clientPrincipal);
    };

    getUser();
  }, []);

  const handleLogoutURLChange = (event) => setLogoutURL(event.target.value);

  return (
    <div className="home">
      {/** Tests */}
      {isSignedIn && (
        <>
          <input onChange={handleLogoutURLChange} value={logoutURL} />
          <a href={logoutURL}>Sign out</a>
          <a href="/mongo">MongoDB</a>
          <a href="/secret">Secret</a>
        </>
      )}
      {!isSignedIn && <a href="/login">Sign in (custom)</a>}

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
};

export default Home;
