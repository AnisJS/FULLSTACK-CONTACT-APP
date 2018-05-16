import React from "react";

import axios from "axios";

class Contact extends React.Component {
    constructor (props) {
            super (props)
            this.state={
                contact : []
            }
    }

    ComponentDidMount () 

    //  .then is a promosise used to not work with callback function 

        axios.get('/contacts').then (
            res => {
                this.setState ({
              contacts: res.data 
            })
            }
        )
    
     render(){
         return(
         <div className= "contacts-container" >
            <h1>this is the first contact</h1>
            {this.state.contacts.map ( (el,i ) => {
                    <div>
                    <h2>contact name = {el.name}</h2>
                    <h2>contact phone = {el.phone}</h2>
                    <h2>contact email = {el.email}</h2>
                    </div>
            })
            }
           
         </div>) 
     }
}


export default Contact ;