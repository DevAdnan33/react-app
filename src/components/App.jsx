import React, { useState } from 'react';
import Table from './Table';
import Form from './Form'
import Todo from './Todo'
import RandomJokesApi from './RadnomJokesApi'

const App = () => {

  const [count, setCount] = useState(0)

  function updateCount() {
    setCount(count + 1)
  }

  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspiring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    }
  ];

  return (
    <div className='container'>
      <Table characterData={characters} />
      <h1>Count {count}</h1>
      <button onClick={updateCount}>Click Me</button>
      <Form/>
      <Todo></Todo>
      <RandomJokesApi/>
    </div>
  );
};

export default App;