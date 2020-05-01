import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p className="obj-item">
          {" "}
          <b>Name:</b> {this.props.name}{" "}
        </p>
        <p className="obj-item">
          {" "}
          <b>Email:</b> {this.props.email}{" "}
        </p>
        <p className="obj-item">
          {" "}
          <b className>Country:</b> {this.props.country}{" "}
        </p>
        <br />
        <br />
      </li>
    );
  }
}

export default List;
