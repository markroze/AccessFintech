import React from 'react';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="app">
      <Dropdown
        {...{
          options: [
            { value: '1', label: 'Rename' },
            { value: '2', label: 'Delete' },
            { value: '3', label: 'Save' },
          ],
          required: true,
          tabIndex: 1,
          className: 'dropdown',
          onOptionSelect: (option) => console.log(option),
        }}
      />
    </div>
  );
}

export default App;
