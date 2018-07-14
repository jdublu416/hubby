import React from "react";
import "./Trigger.css";
import { Modal } from "react-bootstrap";

export default class Trigger extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="modal-container">
        <a
          className="btn btn-lg btn-primary btn-block"
          onClick={() => this.setState({ show: true })}
        >
          Register
        </a>

        <Modal show={this.state.show} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <form>
              <h3 className="form-signin-heading text-center">
                Create an account:
              </h3>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email Address"
                required
                autofocus=""
                onChange={this.props.handleInputChange}
              />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
                onChange={this.props.handleInputChange}
              />
              <input
                type="password"
                className="form-control"
                name="password2"
                placeholder="Confirm password"
                required
                onFocus={this.props.handlePasswordCheck}
                onChange={this.props.handleInputChange}
              />
              <a
                className="btn btn-lg btn-primary btn-block"
                onClick={this.props.handleRegister}
                // href="/Main"
              >
                Make Account
              </a>
            </form>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}
