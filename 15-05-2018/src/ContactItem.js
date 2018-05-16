import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class ContactItem extends React.Component{

 deleteContact=()=>{
   axios.delete("/contact/"+(this.props.contact._id))

 }

render(){
 return (

     <div style={{border:'1px solid gray'}}>

       <h2>Contact name:{this.props.contact.name}</h2>
       <h2>Contact tel:{this.props.contact.tel}</h2>
       <h2>Contact email:{this.props.contact.email}</h2>
       <Link to="/modify_contact/:id">
         <input type='button' value='Modifier' />
       </Link>
       <Link to={"/contacts/delete"}>
         <input type='button' value='Supprimer' onClick={this.deleteContact}/>
       </Link>

     </div>


)
}
}

export default ContactItem