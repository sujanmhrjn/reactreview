import React from "react";

import ReviewHeader from "../components/Header";
import ReviewFooter from "../components/Footer";

const MainLayout = (props) => {
	return (
		<div className="layout-main">
			<ReviewHeader />
			{props.children}
			<ReviewFooter />
		</div>
	);
};
export default MainLayout;
