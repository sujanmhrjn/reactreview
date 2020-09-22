import React from "react";

import { Col, Row, Container } from "reactstrap";
import DashboardLayout from "../../layouts/_dashboard";
import FeedbackList from "./list";

const DashboardPage = () => {
	return (
		<DashboardLayout>
			<div className="page page-dashboard">
				<Container>
					<Row>
						<Col lg={6}>
							<h1>Welcome Manager!</h1>
							<p>Here are the list of Feedbacks.</p>
							<FeedbackList />
						</Col>
					</Row>
				</Container>
			</div>
		</DashboardLayout>
	);
};

export default DashboardPage;
