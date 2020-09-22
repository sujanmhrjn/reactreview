import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { changeViewed } from "../../redux/actions";

const FeedbackList = ({ reviews, toggleViewed, history }) => {
	const [feedbacks, setFeedbacks] = useState(null);
	useEffect(() => {
		setFeedbacks(reviews);
	}, [reviews]);
	const handleFeedbackClick = (id) => {
		const selected = feedbacks.filter((item) => item.id === id);

		!selected[0].viewed && toggleViewed(selected[0]);
		setFeedbacks(
			feedbacks.map((item) =>
				item.id === id ? { ...item, viewed: true } : item
			)
		);
		history.push(`/dashboard/review/${id}`);
	};

	return (
		<div className="list">
			{feedbacks &&
				feedbacks.map((item, i) => {
					return (
						<div
							className={`list-block d-flex align-items-center justify-content-between ${
								!item.viewed ? "list-new" : ""
							}`}
							key={i}
							onClick={() => handleFeedbackClick(item.id)}
						>
							<div className="d-flex align-items-center">
								<div className="date">{item.date}</div>
								<h3>{item.name}</h3>
							</div>
							<div className="rating">
								{[...Array(5).keys()].map((n, i) => {
									return (
										<span
											className={n + 1 <= item.rate ? "filled" : ""}
											key={i}
										>
											{n + 1 <= item.rate ? <IoMdStar /> : <IoMdStarOutline />}
										</span>
									);
								})}
							</div>
						</div>
					);
				})}
		</div>
	);
};

const mapStateToProps = (state) => {
	const reviews = state.firestore.ordered.reviews;

	return {
		reviews,
		uid: state.firebase.auth.uid,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		toggleViewed: (review) => dispatch(changeViewed(review)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect((ownProps) => [
		{
			collection: "reviews",

			orderBy: ["date", "desc"],
		},
	])
)(withRouter(FeedbackList));
