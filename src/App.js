import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers(prev => [...prev, {
      name: uName,
      age: uAge
    }]);
  };

  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
