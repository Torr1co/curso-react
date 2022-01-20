import React from "react";
import SeasonDisplay from "./SeasonDisplay.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, err: "", month: new Date().getMonth() + 1 };
  }

  componentDidMount() {
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

  render() {
    if (this.state.lat && !this.state.err) {
      return <SeasonDisplay lat={this.state.lat} month={this.state.month} />;
    } else if (this.state.err && !this.state.lat) {
      return <div>Error: {this.state.err}</div>;
    } else {
      return <div>Cargando...</div>;
    }
  }
}

export default App;
