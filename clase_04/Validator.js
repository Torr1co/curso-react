import React from "react";

class Validator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Enter Password</label>
            <input type="password" />
          </div>
          {this.state.password.length < 4
            ? "Password must be at least 4 characters"
            : ""}
        </form>
      </div>
    );
  }
}

export default Validator;
