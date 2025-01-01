import "tailwindcss/tailwind.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"
import store from "./redux/store";
import "./index.css";

import Router from "./components/Router";
import Spinner from "./components/Resources/Spinner";
import { BrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("layout/Layout"));

function App() {

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={<Spinner />}>
					<Layout>
						<Router />
					</Layout>
				</Suspense>
			</BrowserRouter>
		</Provider>
	)
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
