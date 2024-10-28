import React, { Component } from "react";



// Class Component
class Table extends Component{
    
    render(){
        const {characterData} = this.props; // Destructure the prop
        return( 
           <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characterData.map((character,index) => (
                            <tr key={index}>
                                <td>{character.name}</td>
                                <td>{character.job}</td>
                            </tr>
                        ))
                    }
                </tbody>
           </table>
        )
    }
}

export default Table;