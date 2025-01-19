import "tailwindcss/tailwind.css";
import React, { lazy, Suspense, useEffect/* , useState */ } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux"
import hostStore from "./redux/store";
import "./index.css";

import Router from "./components/Router";
import Spinner from "./components/Resources/Spinner";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//import useVerifyToken from "./hooks/useVerifyToken";
import { setIsLoggedInAction } from "./redux/actions";
import { queryClient } from "./react-query";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { verifyToken } from "./services/verifyToken";

const Layout = lazy(() => import("layout/Layout"));

const MakeDispatchInsideProvider = () => {
	//const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
	const dispatch = useDispatch();

	//First verification of token to do the first assignment of detail: isLoggedIn(boolean) in CustomEvent
	/* useVerifyToken()
		.then((res)=>{
			if(res!==null) setIsValidToken(res)
		}) */
	
	const { data: isValidToken, refetch, isFetching } = useQuery({
		queryKey: ["key-verify-token"],
		queryFn: () => verifyToken(),
		enabled: false
	})

	const setGlobalStateIsLoggedIn = (e: CustomEvent<{isLoggedIn: boolean}>) => {
		refetch().then((result) => {
			const isValidToken = result.data; 
			if (e.detail.isLoggedIn === false) {
				dispatch(setIsLoggedInAction(false));
			}
			if (e.detail.isLoggedIn === true && isValidToken !== undefined) {
				dispatch(setIsLoggedInAction(isValidToken));
			}
		});
	};

	useEffect(()=>{
		refetch()
	},[])
	
	useEffect(()=>{
		if (isValidToken !== undefined) {	
			window.addEventListener(
				'isLoggedInDetection', 
				((e: CustomEvent<{isLoggedIn: boolean}>) => setGlobalStateIsLoggedIn(e as CustomEvent)) as EventListener
			)
			window.dispatchEvent(new CustomEvent(
				'isLoggedInDetection', { 
					detail: {
						isLoggedIn: isValidToken
					} 
				}
			))
			
			return () => {
				window.removeEventListener(
					'isLoggedInDetection', 
					((e: CustomEvent<{isLoggedIn: boolean}>)=>setGlobalStateIsLoggedIn(e as CustomEvent)) as EventListener
				)
			}
		}
		
	},[isValidToken])

	useEffect(()=>{
		isFetching && dispatch(setIsLoggedInAction(null));
	},[isFetching])

	return <></>
}

function App() {

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Provider store={hostStore}>
					<Suspense fallback={<Spinner loadingText={"Loading.."} />}>
						<MakeDispatchInsideProvider />
						<Layout>
							<AnimatePresence>
								<Router />
							</AnimatePresence>
						</Layout>
					</Suspense>
				</Provider>
			</BrowserRouter>
		</QueryClientProvider>
	)
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
