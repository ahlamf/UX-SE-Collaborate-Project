import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";


export default class Changepassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      oldPassword: "",
      isChanging: false,
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.oldPassword.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleChangeClick = async event => {
    event.preventDefault();
    this.setState({ isChanging: true });

    try {
      this.props.body.push("/");
    } catch (e) {
      alert(e.message);
      this.setState({ isChanging: false });
    }
  };

  render() {
    return (
      <div className="ChangePassword">
        <form onSubmit={this.handleChangeClick}>
          <FormGroup bsSize="large" controlId="oldPassword">
            <label>Old Password</label>
            <FormControl
              type="password"
              onChange={this.handleChange}
              value={this.state.oldPassword}
            />
          </FormGroup>
          <hr />
          <FormGroup bsSize="large" controlId="password">
            <label>New Password</label>
            <FormControl
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup bsSize="large" controlId="confirmPassword">
            <label>Confirm Password</label>
            <FormControl
              type="password"
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
          </FormGroup>
          <Button
            type="submit"
            text="Change Password"
          >Change Password</Button>
        </form>
      </div>
    );
  }
}