import React from "react";
import { Row, Col, Container } from "reactstrap";
import MainLayout from "../../layouts/_main";
import LoginForm from "./Form";

const LoginPage = () => {
	return (
		<MainLayout>
			<div className="page page-login">
				<Container>
					<Row className="justify-content-center">
						<Col lg="5">
							<LoginForm />
						</Col>
					</Row>
				</Container>
			</div>
		</MainLayout>
	);
};

export default LoginPage;
