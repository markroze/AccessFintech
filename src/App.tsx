import React, { useEffect, useState } from 'react';
import Dropdown from './components/Dropdown';
import { DropdownOption } from './components/Dropdown/Dropdown';
import UserCard from './components/UserCard';
import { UserCardProps } from './components/UserCard/UserCard';

const generateUserOptions = (users: any[]) => {
  return users.map((user) => ({
    value: user.id,
    label: user.name,
  }));
};

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState<null | UserCardProps>(null);
  const [selectedUserId, setSelectedUserId] = useState<null | string | number>(
    null
  );

  useEffect(() => {
    fetch('https://648b31ee17f1536d65ea9242.mockapi.io/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!selectedUserId) return;

    fetch(`https://648b31ee17f1536d65ea9242.mockapi.io/users/${selectedUserId}`)
      .then((response) => response.json())
      .then((data) => setSelectedUser(data))
      .catch((error) => console.log(error));
  }, [selectedUserId]);

  const handleUserSelect = (userOption: DropdownOption) => {
    setSelectedUserId(userOption.value);
  };

  return (
    <div className="app">
      {users.length > 0 && (
        <Dropdown
          {...{
            options: generateUserOptions(users),
            required: true,
            tabIndex: 1,
            className: 'dropdown',
            onOptionSelect: (option) => handleUserSelect(option),
          }}
        />
      )}
      {selectedUser && (
        <UserCard
          {...{
            name: selectedUser.name,
            avatar: selectedUser.avatar,
            id: selectedUser.id,
          }}
        />
      )}
    </div>
  );
}

export default App;
