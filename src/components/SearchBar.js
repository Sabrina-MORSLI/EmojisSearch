// Créer un composant searchBar
// Ajouter un <input/>
// Créer la fonction handleChange

import React from "react";
import { render } from "react-dom";

import "../App.css"

const SearchBar = (props) => {
           
        return <input 
        onChange={props.handleChange}
        type="text" placeholder=" 🔎 Search..." inputValue={props.inputValue}/>             
        
   };
   
export default SearchBar;