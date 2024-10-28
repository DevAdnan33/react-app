import React from "react";

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

const TableComponent = {
  TableHeader,
  SimpleComponent
}

export default TableComponent