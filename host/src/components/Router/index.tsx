import React, { lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { pathRoutes } from "../../utils/helpers/pathRoutes";
import Error404 from "../Error404";
import { useSelector } from "react-redux";
import Spinner from "../Resources/Spinner";

const Content = lazy(() => import("content/Content"));
const Session = lazy(() => import("content/Session"));

export default function Router() {
	const location = useLocation();
	const isLoggedIn = useSelector(
		(state: { setIsLoggedInReducer: { isLoggedIn: boolean } }) =>
			state.setIsLoggedInReducer.isLoggedIn
	);
	
	//const [wait, setWait] = useState(false);
    //Debouncing to avoid rapid change of state in isLoggedIn
	/* useEffect(() => {
		setTimeout(() => {
			setWait(true);
		}, 300);
	}, []); */

	return (
		<>
			{(/* wait &&  */isLoggedIn === null) 
			?( <Spinner loadingText={"Authenticating, please wait.."} />)
			:(
				<Routes location={location} key={location.pathname}>
					<Route
						path={pathRoutes.home.path}
						element={isLoggedIn ? <Content /> : <Navigate to={pathRoutes.login.path} />}
					/>
                    <Route
                        path={pathRoutes.login.path}
                        element={!isLoggedIn ? <Session /> : <Navigate to={pathRoutes.home.path} />}
                    />
                    <Route
                        path={pathRoutes.signup.path}
                        element={!isLoggedIn ? <Session /> : <Navigate to={pathRoutes.home.path} />}
                    />

					<Route 
                        path={"*"} 
                        element={<Error404 />} 
                    />
				</Routes>
			)}
		</>
	);
}
