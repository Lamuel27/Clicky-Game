import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import parasite from "./parasite.json";
import "./App.css";

class App extends Component {
  state = {
    parasite,
    clickedParasite: [],
    score: 0
  };

  clickedImg = event => {
    const currentParasite = event.target.alt;
    const parasiteClicked = this.state.clickedParasite.indexOf(currentParasite) > -1;

    if (parasiteClicked) {
      this.setState({
        parasite: this.state.parasite.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedParasite: [],
        score: 0
      });
      alert("M-Morty!! That was a parasite! You L-lost! *burp*");
    } else {
      this.setState(
        {
          parasite: this.state.parasite.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedParasite: this.state.clickedParasite.concat(
            currentParasite
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 16) {
            alert("M-morty! We did it! Wubba Lubba Dub Dub!!");
            this.setState({
              parasite: this.state.parasite.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedParasite: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.parasite.map(parasite => (
            <FriendCard
              clickedImg={this.clickedImg}
              id={parasite.id}
              key={parasite.id}
              image={parasite.image} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
