import React,{Component} from 'react'
import Update from './Update'
import Create from './Create' 
import Table from './Table'
class View extends Component{
    render(){
        return(
            <div>
                <Table/>
                 <Update/>
                 <Create />
            </div>
        )
    }
}