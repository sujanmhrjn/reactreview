import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";

import { addReview } from "../../redux/actions";
class ReviewForm extends Component {
	constructor() {
		super();
		this.state = {
			firstname: "",
			lastname: "",
			email: "",
			rate: 0,
			review: "",
			errors: [],
			status: "",
		};
	}

	handleValidation = (data) => {
		let errors = {};
		const emailRegex = /^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+)\.([a-zA-Z]{2,5})$/;
		if (!data.firstname) errors.firstname = "Enter your firstname";
		if (!data.lastname) errors.lastname = "Enter your lastname";
		if (!data.email) errors.email = "Enter your email";
		if (data.email && !emailRegex.test(data.email))
			errors.email = "Invalid email format";
		if (data.rate <= 0) errors.rate = "Please rate";
		if (!data.review) errors.review = "Enter your review message";
		this.setState({
			errors,
		});
		return errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.handleValidation(this.state);
		if (!Object.keys(errors).length) {
			const { firstname, lastname, email, review, rate } = this.state;
			const data = {
				name: `${firstname} ${lastname}`,
				email,
				rate,
				review,
			};

			this.props.addReview(data);
			this.setState({
				status: true,
			});
			setTimeout(() => {
				this.setState({
					status: null,
				});
			}, 3000);
			this.reviewForm.reset();
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { errors, status } = this.state;
		var ratings = [5, 4, 3, 2, 1];
		const RateStars = ratings.map((num, i) => (
			<React.Fragment key={i}>
				<input
					type="radio"
					id={`star${num}`}
					name="rate"
					value={num}
					onChange={this.handleInput}
				/>
				<label htmlFor={`star${num}`} title={num}>
					{num} stars
				</label>
			</React.Fragment>
		));
		return (
			<>
				<h1 className="mb-5">Employee Feedback Form</h1>

				<div className="form-wrapper">
					<form
						className="form"
						onSubmit={this.handleSubmit}
						ref={(form) => (this.reviewForm = form)}
					>
						<Row>
							<Col lg="6">
								<FormGroup>
									<Label>First Name</Label>
									<Input
										type="text"
										name="firstname"
										className="c-input"
										placeholder="Enter your first name"
										onChange={this.handleInput}
									/>
									{errors?.firstname && (
										<p className="error text-danger">{errors.firstname}</p>
									)}
								</FormGroup>
							</Col>
							<Col lg="6">
								<FormGroup>
									<Label>Last Name</Label>
									<Input
										type="text"
										name="lastname"
										className="c-input"
										placeholder="Enter your last name"
										onChange={this.handleInput}
									/>
									{errors?.lastname && (
										<p className="error text-danger">{errors.lastname}</p>
									)}
								</FormGroup>
							</Col>
						</Row>
						<FormGroup>
							<Label>Email Address</Label>
							<Input
								type="text"
								name="email"
								className="c-input"
								placeholder="Enter your email address"
								onChange={this.handleInput}
							/>
							{errors?.email && (
								<p className="error text-danger">{errors.email}</p>
							)}
						</FormGroup>
						<FormGroup>
							<Label>How would you like to rate your organisation</Label>
							<div className="c-rate">
								<div className="rate">{RateStars}</div>
							</div>
							{errors?.rate && (
								<p className="error text-danger">{errors.rate}</p>
							)}
						</FormGroup>
						<FormGroup>
							<Label>Your Review</Label>
							<textarea
								name="review"
								onChange={this.handleInput}
								className="form-control c-input"
								rows="8"
							></textarea>
							{errors?.review && (
								<p className="error text-danger">{errors.review}</p>
							)}
						</FormGroup>
						<Button type="submit" className="c-btn">
							Submit
						</Button>

						{status && (
							<div className="mt-4 alert alert-success">
								Thank you for submitting your review!
							</div>
						)}
					</form>
				</div>
			</>
		);
	}
}

export default connect(null, { addReview })(ReviewForm);
