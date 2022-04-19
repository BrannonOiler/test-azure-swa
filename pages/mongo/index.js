import { useEffect, useState } from 'react';

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
  //   const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function pageLoad() {
      setTasks(await loadTasks());
    }

    pageLoad();
  }, []);

  const handlePostClick = async () => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'New task',
        completed: false
      }),
    });
    
    setTasks(await loadTasks());
  };

  const handlePutClick = async () => {
    const task = tasks[tasks.length - 1];

    const response = await fetch(`/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Updated',
        completed: true
      }),
    });
    
    setTasks(await loadTasks());
  };

  return (
    <div>
      <h1>MongoDB Test</h1>
      <p>This is a MongoDB test page.</p>
      {/* {user && <p>User: {user}</p>} */}
      <p>{tasks && JSON.stringify(tasks)}</p>
      <span>
        <button onClick={handlePostClick}>
          Post
        </button>
        <button onClick={handlePutClick}>
          Put
        </button>
      </span>
    </div>
  );
};

export default Mongo;
