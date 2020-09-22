import React from "react";
import ReviewHeader from "../components/Header";
import ReviewFooter from "../components/Footer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const DashboardLayout = (props) => {
	if (!props.uid) return <Redirect to="/login" />;
	return (
		<div className="layout-main">
			<ReviewHeader />
			{props.children}
			<ReviewFooter />
		</div>
	);
};
const mapStateToProps = (state) => {
	const uid = state.firebase.auth.uid;
	return {
		uid: uid,
	};
};
export default connect(mapStateToProps)(DashboardLayout);
