import React from "react";
import axios from "axios";


class ModifiedContact extends React.Component {
    constructor (props){
        super (props)
        this.state ={
            name:"",
            tel:"",
            email:""
        }
    }

    handlestate = e => {
        this.setState = ({
            //  sinon ca va créer un probleme vu que e.target.name est une propriété .
            [e.target.name] : e.target.value
        })  
   }

   addContact = (value) => {
    //    value est le body du request la valeur à ajouter
    //  axios.methode ('path', {...value})
       axios.post('/contacts', {...value})
   }
    render () {
        return (
            <div className="add-contact-container"> 
            <h1>Modify Contact Page</h1>
                <form 
                style = { {display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <label>contact Name</label>
                    {/* les fonctions puissent etre déclarer de deux manières suivantes */}
                    <input name="name" onChange={()=>this.handlestate()} />

                    <label>contact telephone</label>
                    <input name="telephone" onChange={this.handlestate} />

                    <label>contact Email</label>
                    <input name="email" onChange={this.handlestate} />


                    <input type="button" value="Modify contact"
                    onClick= {() => this.addContact(this.state)}/>

                    
                </form>
            </div>
        )
    }
}

export default ModifiedContact;