import React, { Component } from "react";
import Header from "../../components/Header";
import Register from "../../components/Register";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="mt-4 mb-5">
            <h1>Welcome info</h1>
          </div>
          <Register />
        </div>
      </div>
    );
  }
}

export default HomePage;
