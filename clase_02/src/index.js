import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = { lat: null, err: "", month: new Date().getMonth() + 1 };
  } */
  state = { lat: null, err: "", month: new Date().getMonth() + 1 };

  componentDidMount() {
    // NO this.state.lat = 123;
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        const latitude = pos.coords.latitude;
        this.setState({ lat: latitude });
      },
      (err) => {
        const error = err.message;
        this.setState({ err: error });
      }
    );
  }

  renderConditional() {
    if (this.state.lat && !this.state.err) {
      return <SeasonDisplay lat={this.state.lat} month={this.state.month} />;
    } else if (this.state.err && !this.state.lat) {
      return <div>Error: {this.state.err}</div>;
    } else {
      return <div>Cargando...</div>;
    }
  }

  render() {
    return (
      <div /* style={{ border: "10px solid red" }} */>
        {this.renderConditional()}
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
