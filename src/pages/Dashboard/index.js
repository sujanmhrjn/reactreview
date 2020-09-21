import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Container } from "reactstrap";

import MainLayout from "../../layouts/_main";
import FeedbackList from "./list";
import PreviewReview from "./preview";
const DashboardPage = ({ uid }) => {
	const [selectedReview, setSelectedReview] = useState(null);

	const handleReviewSelect = (review) => {
		setSelectedReview(review);
	};
	if (!uid) return <Redirect to="/login" />;
	return (
		<MainLayout>
			<div className="page page-dashboard">
				<Container>
					<Row>
						<Col lg={6}>
							<h1>Welcome Manager!</h1>
							<p>Here are the list of Feedbacks.</p>
							<FeedbackList handleClick={handleReviewSelect} />
						</Col>

						<Col lg={6} className="pl-4">
							{selectedReview && <PreviewReview review={selectedReview} />}
							{!selectedReview && <p>Select a Review to view</p>}
						</Col>
					</Row>
				</Container>
			</div>
		</MainLayout>
	);
};
const mapStateToProps = (state) => {
	const uid = state.firebase.auth.uid;
	return {
		uid: uid,
	};
};
export default connect(mapStateToProps)(DashboardPage);
