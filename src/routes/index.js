import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import Homepage from "../pages/Home";
import LoginPage from "../pages/Login";
import NotFound from "../pages/NotFound";
const ReviewRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Homepage}></Route>
			<Route exact path="/login" component={LoginPage}></Route>
			<Route exact path="/dashboard" component={DashboardPage}></Route>
			<Route path="*" component={NotFound}></Route>
		</Switch>
	);
};
export default ReviewRoutes;
