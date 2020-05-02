import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    return (
      <div>
        {this.state.isChecked && <Alert></Alert>}
        <input
          type="checkbox"
          name="isChecked"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
export default Checkbox;

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      alert("I'm alive");
    }, 1000);
  }

  render() {
    return <h1>THANK YOU FOR CHECKING ME!</h1>;
  }
}
