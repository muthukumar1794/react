import React,{Component} from 'react'
import axios from 'axios';
import Table from './Table'

class Admin extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:'',
            respons:[],
            error:''
        }
    }
onType=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    },()=>console.log(this.state))
}
onSave=(e)=>{
    e.preventDefault()
    if(this.state.password==='admin123' && this.state.name==='admin'){
axios.get('http://localhost:4500/get/data',this.state)
.then(response=>{
    console.log(response.data.message)
this.setState({respons:response.data.message},()=>console.log(this.state.respons))
})
.catch(error=>{
    this.setState({
        error:"error"
    })
})
    }
else{
    alert("username and password not matching")
}

}
    render(){

        const{name,password,details}=this.state
        
        return(
           
            <body>
          
                 {/* {details[0].password='admin123' ?<Table s={this.state.details[0]}/>:''} */}
{this.state.respons.length > 0 ? <Table s={this.state.respons}/>:''}
          <h2>view Table</h2>
                <form onSubmit={this.onSave}>


  <div>
    <label ><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="name" value={name} required onChange={this.onType}/>
    </div>

    <div>
    <label ><b>Password</b></label>
    <input type="text" placeholder="Enter Password" name="password" required value={password} onChange={this.onType}/>
    </div>
         <div> 
    <button type="submit">Login</button>
  
  </div>

  <div>
    <button >Cancel</button>
   
  </div>
</form>

</body>
        )
    }
}

export default Admin