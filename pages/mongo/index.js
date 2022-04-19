import { useEffect } from 'react';

async function getUser() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  return payload?.clientPrincipal;
}

async function loadTasks() {
  try {
    const response = await fetch('/api/tasks');
    const retrievedData = await response.json();
    return retrievedData?.tasks;
  } catch (e) {
    console.log(e);
  }
}

const Mongo = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function pageLoad() {
      const user = await getUser();
      setUser(user);

      if (user) setTasks(await loadTasks());
      else window.location.href = '/login';
    }

    pageLoad();
  }, []);

  return (
    <div>
      <h1>MongoDB Test</h1>
      <p>This is a MongoDB test page.</p>
      {user && <p>User: {user}</p>}
      <p>{tasks && JSON.stringify(tasks)}</p>
    </div>
  );
};

export default Mongo;
