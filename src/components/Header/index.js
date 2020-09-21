import React from "react";
import { withRouter, Link } from "react-router-dom";
import { IoMdPerson, IoIosLogOut } from "react-icons/io";
import { signOut } from "../../redux/actions/authAction";
import { connect } from "react-redux";
const ReviewHeader = ({ uid, signOut }) => {
	const handleSignOutClick = () => {
		signOut();
	};
	return (
		<header className="header">
			<div className="container d-flex align-items-center justify-content-between">
				<div className="logo">
					<Link to="/" className="text-white">
						Company Name
					</Link>
				</div>
				<div className="link">
					{!uid && (
						<Link to="/login" className="flex items-center">
							<IoMdPerson></IoMdPerson> Login
						</Link>
					)}
					{uid && (
						<div className="d-flex align-items-center">
							<Link to="/dashboard">Dashboard</Link>
							<button
								className="ml-2 btn btn-danger"
								onClick={handleSignOutClick}
							>
								Sign out <IoIosLogOut />
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	const uid = state.firebase.auth.uid;
	return {
		uid: uid,
	};
};

const mapDistpatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};
export default connect(
	mapStateToProps,
	mapDistpatchToProps
)(withRouter(ReviewHeader));
