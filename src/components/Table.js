import React, { Component } from "react";

// Simple Component
const TableHeader = () => {
    return(
        <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
}
 
// simple Component
const SimpleComponent = () =>{
    return(
        <table>
<tbody>
  <tr>
    <td>Adnan</td>
    <td>Software Engineer</td>
  </tr>
  <tr>
    <td>Naresh</td>
    <td>Software Developer</td>
  </tr>
 
</tbody>
    </table>
    )
}

// Class Component
class Table extends Component{
    render(){
        return( 
            <table>
              <TableHeader/>
              <SimpleComponent/>
            </table>
        )
    }
}

export default Table;