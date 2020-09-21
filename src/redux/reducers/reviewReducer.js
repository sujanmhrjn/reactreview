import { ADD_REVIEW, CHANGE_VIEWED } from "../actions/types";
import { getCurrentDate } from "../selectors";
import { toast } from "react-toastify";
const initialState = [
	{
		id: 1,
		name: "Sujan Maharjan",
		email: "info@sujan.com",
		review: "Lorem ipsum is a test",
		viewed: false,
		rate: 2,
		date: "Sept 2",
	},
];
const reviewReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_REVIEW: {
			let date = getCurrentDate();
			let id = state.length + 1;

			var data = { ...action.payload, date, id, viewed: false };
			toast.success("Added a Review");
			return [...state, data];
		}
		case CHANGE_VIEWED: {
			toast.info("A review has been set to viewed");
			return state;
		}
		default:
			return state;
	}
};
export default reviewReducer;
