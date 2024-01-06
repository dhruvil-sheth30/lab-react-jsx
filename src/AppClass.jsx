import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  


  render(){
    const images = this.props.imgData;

    return(
      <div>
      <h1>Kalvium Gallary</h1>
      <div id='images'>
        {images.map((image) => (
          <img key={image.id} src={image.img} alt="" />
      ))}
      </div>
    </div>

    )
  }
}