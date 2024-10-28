import React from 'react'
import Table from './Table'
import TableComponent from './SimpleComponent'

class App extends React.Component {
  
  render() {
    let name = "Adnan"
    return(
      <div className='container'>
        <h1>Hello {name}</h1>
        <Table/>
      </div>
    )
  }
}

export default App;