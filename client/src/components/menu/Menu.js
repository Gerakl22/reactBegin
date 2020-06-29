import React from "react";

import "./menu.scss";

//Components
import { Form } from "../form/Form";

export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: true };

    this.handleToggleButton = this._handleToggleButton.bind(this);
  }

  _handleToggleButton(event) {
    event.preventDefault();
    this.setState((state) => ({
      isOpened: !state.isOpened,
    }));
  }

  render() {
    const isOpened = this.state.isOpened;
    return (
      <React.Fragment>
        <button className="button-toggle" onClick={this.handleToggleButton}>
          {isOpened ? "Open" : "Close"}
        </button>
        {isOpened ? null : <Form />}
      </React.Fragment>
    );
  }
}
