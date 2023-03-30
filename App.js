import React, {useState, useEffect} from 'react';
import './App.css'

function App() {

    const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const usersResponse = await fetch('/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);

      const tasksResponse = await fetch('/tasks');
      const tasksData = await tasksResponse.json();
      setTasks(tasksData);
    }

    fetchData();
  }, []);

  return (
    <div className='main'>
      <h1>Users</h1>
      <ul className='users'>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <h1>Tasks</h1>
      <ul className='tasks'>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.Task} - {task.Expiry_date} - {task.User} -{' '}
            {task.Important ? 'Important' : 'Not important'} 
          </li>
        ))}
      </ul>
      <button className='button'>Submit</button>
    </div>
  );
}

export default App;
