import React from 'react'
import Admin from './Admin'
import Update from './Update'
import Create from './Create'
 
function Table({s,c}){
    console.log("table",{s},{c})
    const aligning={
        textAlign:'center',
        width:'100%'
               }
               const th={
                padding: '10px 48px'
               }
            const table={
                margin:'0 auto'
            }
            const td={
                padding: '14px',
                border: '1px solid black',
                borderCollapse:'collapse'
            }
    return(
        <tbody>
                   lists of posts
         
                <table style={table}>
                    <thead>
                    <tr>
                    <th style={th}>Id</th> 
              <th style={th}>Name</th> 
              <th style={th}>Age</th> 
              <th style={th}>Email</th>
              <th style={th}>Password</th>
             
            
              <th style={th}>mobile no</th>
              </tr>
              </thead>
{ s.length>0 || c.length>0 ? s.map(x=>
   
<tr key={x.id}>
<td style={td}>{ x.id}</td>
     <td style={td}>{x.name}</td>
     <td style={td}>{x.age}</td>
     <td style={td}>{x.email}</td>
   
     <td style={td}>{x.password}</td>
    
     <td style={td}>{x.mobno}</td>
   </tr>) :''}
   </table>
   
   <Update/>
   <Create />
    </tbody>
    )
}
export default Table