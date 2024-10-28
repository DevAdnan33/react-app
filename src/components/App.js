import React from 'react'
import Table from './Table'

class App extends React.Component {
  
  render() {
    let name = "Adnan"
    return(
      <div className='App'>
        <h1>Hello {name}</h1>
        <Table/>
      </div>
    )
  }
}

export default App;