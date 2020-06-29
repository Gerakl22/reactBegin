import React from "react";

import "./form.scss";

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClickButton = this._handleClickButton.bind(this);
    this.handleChangeInput = this._handleChangeInput.bind(this);
  }

  _handleClickButton(event) {
    event.preventDefault();
    console.log(this.state);
    console.log(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.phone
    );
  }

  _handleChangeInput(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  _renderFirstName() {
    return (
      <input
        name="firstName"
        onChange={this.handleChangeInput}
        type="text"
        placeholder="First Name"
      />
    );
  }

  _renderLastName() {
    return (
      <input
        name="lastName"
        onChange={this.handleChangeInput}
        type="text"
        placeholder="Last Name"
      />
    );
  }

  _renderEmail() {
    return (
      <input
        name="email"
        onChange={this.handleChangeInput}
        type="email"
        placeholder="Email"
      />
    );
  }

  _renderPhone() {
    return (
      <input
        name="phone"
        onChange={this.handleChangeInput}
        type="tel"
        placeholder="Phone"
      />
    );
  }

  _renderButton() {
    return (
      <button
        className="button-send"
        type="submit"
        onClick={this.handleClickButton}
      >
        Send
      </button>
    );
  }

  render() {
    return (
      <form>
        {this._renderFirstName()}
        {""} {this._renderLastName()} {""}
        {this._renderEmail()} {""} {this._renderPhone()}
        {""} {this._renderButton()}
      </form>
    );
  }
}
