import { getCurrentDate } from "../selectors";
import { ADD_REVIEW, CHANGE_VIEWED } from "./types";
export const addReview = (data) => {
	return (dispatch, getState, { getFirebase }) => {
		const firestore = getFirebase().firestore();

		firestore
			.collection("reviews")
			.add({
				...data,
				viewed: false,
				date: getCurrentDate(),
			})
			.then(() => {
				dispatch({
					type: ADD_REVIEW,
					payload: data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const changeViewed = (review) => {
	return (dispatch, getState, { getFirebase }) => {
		const firestore = getFirebase().firestore();

		firestore
			.collection("reviews")
			.doc(review.id)
			.set({
				...review,
				viewed: true,
			})
			.then(() => {
				dispatch({
					type: CHANGE_VIEWED,
					payload: review,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
