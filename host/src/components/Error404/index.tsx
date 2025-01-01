import React from "react";
import { Link } from "react-router-dom";
import { pathRoutes } from "../../utils/helpers/pathRoutes";

const NotFound: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-transparent">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-800">404</h1>
				<p className="mt-4 text-xl text-gray-600">Page Not Found</p>
				<Link
					to={pathRoutes.home.path}
					className="mt-6 inline-block px-4 py-2 text-white bg-[#878cf5] rounded hover:bg-[#767cee]"
				>
					Go Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
