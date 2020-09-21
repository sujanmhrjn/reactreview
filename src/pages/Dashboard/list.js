import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { IoMdStar, IoMdStarOutline } from "react-icons/io";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { changeViewed } from "../../redux/actions";

const FeedbackList = ({ reviews, handleClick, toggleViewed }) => {
	const [feedbacks, setFeedbacks] = useState(null);
	useEffect(() => {
		setFeedbacks(reviews);
	}, [reviews]);
	const handleFeedbackClick = (id) => {
		const selected = feedbacks.filter((item) => item.id === id);
		handleClick(selected[0]);
		!selected[0].viewed && toggleViewed(selected[0]);
		setFeedbacks(
			feedbacks.map((item) =>
				item.id === id ? { ...item, viewed: true } : item
			)
		);
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

// function mapStateToProps(state) {
// 	return {
// 		reviews: state.reviewState,
// 	};
// }
const mapStateToProps = (state) => {
	const reviews = state.firestore.ordered.reviews;
	console.log(reviews);
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
)(FeedbackList);
