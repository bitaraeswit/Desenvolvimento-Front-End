import React, { Component } from "react";
import  { GlobalStyle } from "./GlobalStyle"; 
import { ThemeProvider } from "styled-components";
import { darkTheme, LigthTheme } from './Temas';
import Toggle from './Toggle';
import './App.css';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = { 
      inputText: "",
      theme: "Light",
    };
  }

  searchBoxHandler(data) {
    this.setState({
      inputText: data
    });
  }

  toggleTheme = () => {
    if (this.state.theme === 'Light') {
      this.setState({
        inputText: this.state.imputText,
        theme: 'Dark',
      });
    } else {
      this.setState({
        inputText: this.state.imputText,
        theme: 'Light',
      });  
    }
  }

  render() {
    return (
      <ThemeProvider theme = {this.state.theme === 'Dark' ? darkTheme : LigthTheme}>
        <GlobalStyle/>
        <div className="App">
          <form>
             <h1 className="texto">Inscrever - se</h1>
             <p></p>
             <input type="text" placeholder="digite seu nome"></input>
             <button  className="button">Entrar</button>
             <p></p>
          </form>

          <Toggle themeLabel = {this.state.theme} toggleTheme={this.toggleTheme}/>
        </div>
      </ThemeProvider>    
    );
  }  
}

export default App;
