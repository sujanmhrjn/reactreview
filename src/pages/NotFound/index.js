import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
	return (
		<div className="page page-404 text-center">
			<h1>404 Page</h1>
			<p>Something went wrong, or you hit the wrong url.</p>
			<Link to="/" className="c-btn btn btn-primary">
				Go Back{" "}
			</Link>
		</div>
	);
};
export default Homepage;
