import React from "react";
import { Col, Row, Container } from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import DashboardLayout from "../../../layouts/_dashboard";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
const PreviewReviewPage = (props) => {
	const { review } = props;
	if (!review) return <p>Loading...</p>;
	return (
		<DashboardLayout>
			<div className="page page-dashboard">
				<Container>
					<Row>
						<Col lg={6}>
							<Link to="/dashboard" className=" d-inline-block  mb-4">
								<IoMdArrowBack /> Go Back
							</Link>
							<div className="review-preview">
								<h2>Review</h2>
								<p className="pb-5">
									<strong>{review.name} </strong>'s Review
								</p>
								<table className="table table-bordered mt-4">
									<tbody>
										<tr>
											<th style={{ width: "150px" }}>Name:</th>
											<td>{review.name}</td>
										</tr>
										<tr>
											<th>Email:</th>
											<td>{review.email}</td>
										</tr>
										<tr>
											<th>Rating:</th>
											<td>{review.rate}</td>
										</tr>
										<tr>
											<th>Review Message:</th>
											<td>{review.review}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</DashboardLayout>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { id } = ownProps.match.params;
	const reviews = state.firestore.data.reviews;
	const review = reviews ? reviews[id] : null;
	return {
		review,
	};
};
export default compose(
	firestoreConnect([
		{
			collection: "reviews",
		},
	]),
	connect(mapStateToProps)
)(PreviewReviewPage);
