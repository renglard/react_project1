import React, { Component } from "react";

class GreenBox extends Component {
  render() {
    return (
      <div class="green-box">
        <div class="blue-box">
          <div class="pink-box">
            <div class="purple-box"></div>
            <div class="purple-box2"></div>
          </div>
        </div>
      </div>
    );
  }
}

function BlueBox(props) {
  return <div class="blue-box"></div>;
}

function PinkBox(props) {
  return <div class="pink-box"></div>;
}

function PurpleBox(props) {
  return <div class="purple-box"></div>;
}

function PurpleBox2(props) {
  return <div class="purple-box2"></div>;
}

export default GreenBox;
