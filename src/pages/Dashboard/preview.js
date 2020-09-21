import React from "react";

const previewReview = ({ review }) => {
	return (
		<div className="review-preview">
			<h2>Review</h2>
			<p className="pb-5">
				<strong>{review.name} </strong>'s Review
			</p>
			<table className="table table-bordered mt-4">
				<tbody>
					<tr>
						<th style={{ width: "150px" }}>Name:</th>
						<td>{review.name}</td>
					</tr>
					<tr>
						<th>Email:</th>
						<td>{review.email}</td>
					</tr>
					<tr>
						<th>Rating:</th>
						<td>{review.rate}</td>
					</tr>
					<tr>
						<th>Review Message:</th>
						<td>{review.review}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default previewReview;
