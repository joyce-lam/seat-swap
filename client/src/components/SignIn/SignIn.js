import React, { Component } from "react";

class SignIn extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  
    event.preventDefault();

    fetch("/auth/signin", {
      method: 'POST',
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response  => {
      console.log(response)

      window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <div>
          <a href="/auth/google">Google SignIn</a>
        </div>
        <div>
          <a href="/auth/facebook">Facebook SignIn</a>
        </div>
        <form className="form" method="POST" action="http://localhost:5000/signin">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
