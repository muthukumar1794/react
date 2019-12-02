import React,{Component} from 'react'
import axios from 'axios';
import Table from './Table'

class Update extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            age:'',
            email:'',
            mobno:'',
            password:'',
            checking:[],
        error:''
        }
    }


    onType=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        },()=>console.log(this.state))
    }
Updating=(e)=>{
(e).preventDefault()

axios.put('http://localhost:4500/update/data/',this.state)
.then(response=>{
    this.setState({checking:response.data},()=>console.log("^^^^",this.state.checking))
})
.catch(error=>{
    this.setState({
error:'error in update'
    })
})
}

    render(){
        const{name,password,email,age,mobno}=this.state
        return(
            <div>
                {this.state.checking.length > 0 ? <Table s={this.state.checking}/>:''}
                <h2> Update Form</h2>
                <form onSubmit={this.Updating}>
                <div>
                <div>
                    <div>
                        <h2>if username is correct it will update or nothing will happen</h2>
       <label ><b>User Name</b></label>
          <input type="text" placeholder="Enter Password" name="name" required value={name} onChange={this.onType}/>
    </div>
    </div>
    <label ><b>Email</b></label>
     <input type="text" placeholder="Enter Username" name="email" value={email}  onChange={this.onType}/>
      </div>
 <div>
     <label ><b>Password</b></label>
       <input type="text" placeholder="Enter Password" name="password" value={password} onChange={this.onType}/>
 </div>
    <div>
       <label ><b>Age</b></label>
          <input type="text" placeholder="Enter Username" name="age" value={age} onChange={this.onType}/>
    </div>
    <div>
       <label ><b>mobno</b></label>
          <input type="text" placeholder="Enter Username" name="mobno" value={mobno} onChange={this.onType}/>
    </div>
       <div> 
    <button type="submit">Update</button>
  
  </div>

  <div>
    <button >Cancel</button>
   
  </div>
    </form>
            </div>
        )
    }
}
export default Update