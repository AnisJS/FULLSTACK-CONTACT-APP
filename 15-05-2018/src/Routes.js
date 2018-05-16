import React from "react";
import {Route} from 'react-router-dom';


import Contact from "./contact.js";
//  creation of a route
import AddContact from  "./AddContact.js"

import ModifiedContact from "./modifedContact.js"



class Routes extends React.Component {
    render () {
        return (<div>
           < Route exact path ="/Contacts" component = {Contact}/>
           < Route  exact path ="/add_contact" component = {AddContact} />
           {/*  alors on utilise render afin qu'on puisse utiliser une props dans le composant , render c'est la méthode qui nou le permet  */}
           < Route  exact path ="/modify_contact/:id" render ={ (props) => <ModifiedContact id={props}/>} />
               </div>) 
            }





export default Routes;