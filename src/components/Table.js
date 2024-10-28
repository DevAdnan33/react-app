import React, { Component } from "react";
import TableComponent from './SimpleComponent'

// Class Component
class Table extends Component{
    render(){
        return( 
            <table>
              <TableComponent.TableHeader/>
              <TableComponent.SimpleComponent/>
            </table>
        )
    }
}

export default Table;