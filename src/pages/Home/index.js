import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainLayout from "../../layouts/_main";
import ReviewForm from "./Form";

const Homepage = () => {
	return (
		<MainLayout>
			<div className="page page-home">
				<Container>
					<Row className="justify-content-center">
						<Col lg="7">
							<ReviewForm />
						</Col>
					</Row>
				</Container>
			</div>
		</MainLayout>
	);
};
export default Homepage;
