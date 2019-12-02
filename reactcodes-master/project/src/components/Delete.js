import React from 'react'
import axios from 'axios';

class Delete extends Component{
constructor(){
    super()
    this.state={
        name:''
    }
}
onType=(e)=>{
this.setState({[e.target.name]:e.target.value})

}
onSave=(e)=>{
e.preventDefault()
    axios.delete('http://localhost:4500/delete/data',this.state)
   .then(response=>{
      console.log("deleted")
})
.catch(error=>{
  console.log("error")
})
   }
}
render(){
    return(
        <div>
             <form onSubmit={this.onSave}>

             <div>
    <label ><b>Delete</b></label>
    <input type="text" placeholder="Enter Password" name="name" required value={name} onChange={this.onType}/>
    </div>
         <div> 
    <button type="submit">Delete</button>
  
  </div>
  </form>
        </div>
    )
}
}
export default Delete