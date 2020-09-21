import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { signIn } from "../../redux/actions/authAction";
import { connect } from "react-redux";
class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
			errors: [],
		};
	}

	handleValidation = (data) => {
		let errors = {};

		if (!data.username) errors.username = "Enter your username";
		if (!data.password) errors.password = "Enter your password";

		this.setState({
			errors,
		});
		return errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.handleValidation(this.state);
		if (!Object.keys(errors).length) {
			// this.props.history.push("/dashboard");

			this.props.login({
				email: this.state.username,
				password: this.state.password,
			});
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { uid } = this.props;
		if (uid) return <Redirect to="/dashboard" />;
		const { errors } = this.state;

		return (
			<>
				<h1 className="mb-5">Manager Login</h1>

				<div className="form-wrapper">
					<form className="form" onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label>Username</Label>
							<Input
								type="text"
								name="username"
								className="c-input"
								placeholder="Enter your username"
								onChange={this.handleInput}
							/>
							{errors?.username && (
								<p className="error text-danger">{errors.username}</p>
							)}
						</FormGroup>
						<FormGroup>
							<Label>Password</Label>
							<Input
								type="password"
								name="password"
								className="c-input"
								placeholder="Enter your password"
								onChange={this.handleInput}
							/>
							{errors?.password && (
								<p className="error text-danger">{errors.password}</p>
							)}
						</FormGroup>

						<Button type="submit" className="c-btn">
							Sign Me In
						</Button>
					</form>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state);
	const uid = state.firebase.auth.uid;
	return {
		uid: uid,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		login: (creds) => dispatch(signIn(creds)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
