import React from "react";
import { render } from "react-dom";
import "./App.css"


import Line from "./components/Line";
import emojis from "./emojis.json";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { inputValue: '', emojis: emojis};
    // this.newEmojis = emojis
    
    
  }

  // Bout de code pr copier la ligne
  // navigator.clipboard.writeText()

  clickToFilter = (kind) => {
    // 1. On copie la valeur du state 
    const newEmojis = [...emojis] //On peut le créer directement dans le constructor (voir ligne 13)
    switch(kind) {
      case "Animals":              
        
        // 2. On modifie la valeur du state copié
        let newEmojisFiltered = newEmojis.filter(elem => elem.keywords.includes("animal"))
        // 3. On met le state à jour avec setState
        this.setState({emojis: newEmojisFiltered})
        // else if (kind === "People")
        //   this.setState({emojis: newEmojis})
        break
      case "People":               
        // let newEmojis = [...this.state.emojis]        
        newEmojisFiltered = newEmojis.filter(elem => elem.keywords.includes("people", "smiley"))        
        this.setState({emojis: newEmojisFiltered})
        break       
      default:           
        this.setState({emojis: emojis})        
      
  }
  }

  //Récupérer un event et met à jour le state
  handleChange = (event) => {
    this.setState({inputValue : event.target.value})
    console.log(event.target.value)
  }
 
  render() {
      return (  
       
        <>
        <h1>😎 My emojis search 😎</h1>        
        <SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue}/>        
        <div className="button_countainer">
          <button value="All" onClick={()=>this.clickToFilter("All")}> All </button>
          <button value="Animals" onClick={()=>this.clickToFilter("Animals")}> Animals </button> 
          <button value="People" onClick={()=>this.clickToFilter("People")}> People </button>
        </div>     
        <div className="container">           
        {this.state.emojis.map((elem, index) => {
              if (
                elem.keywords
                  .toLowerCase()
                  .indexOf(this.state.inputValue.toLowerCase()) !== -1 ||
                elem.title
                  .toLowerCase()
                  .indexOf(this.state.inputValue.toLowerCase()) !== -1
              ) {
                return (
                  <Line
                    key={elem.symbol + index}
                    title={elem.title}
                    symbol={elem.symbol}
                  />
                );
              }
              return null;
        })}          
            </div>
            </>
  )

  }
}

export default App;
