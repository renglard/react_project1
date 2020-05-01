import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li className="list">
          <span>
            {" "}
            <b>Name:</b> {this.props.name}{" "}
          </span>
          <span>
            {" "}
            <b>Email:</b> {this.props.email}{" "}
          </span>
          <span>
            {" "}
            <b>Country:</b> {this.props.country}{" "}
          </span>
          <br />
          <br />
        </li>
      </ul>
    );
  }
}

export default List;
