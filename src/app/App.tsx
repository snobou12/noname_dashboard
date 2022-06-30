
import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer, Header } from "../components";
import { Bind, Main } from "../pages";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";

const App: FC = () => {
	const featuresRef = React.createRef<HTMLDivElement>();
	const pricingRef = React.createRef<HTMLDivElement>();
	const contactsRef = React.createRef<HTMLDivElement>();
	const [showBurgerMenu, setShowBurgerMenu] = React.useState<boolean>(false);

	const smoothTo = (title: string) => {
		switch (title) {
			case "Features":
				if (featuresRef.current) featuresRef.current.scrollIntoView();
				break;
			case "Pricing":
				if (pricingRef.current) pricingRef.current.scrollIntoView();
				break;
			case "Contacts":
				if (contactsRef.current) contactsRef.current.scrollIntoView();
				break;
			default:
				break;
		}
	};
	React.useEffect(() => {
		if (showBurgerMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showBurgerMenu]);
	return (
		<>
			<div className="app">
				<div className="app__container">
					
					<Routes>
						<Route
							path="/"
							element={
								<Main
									showBurgerMenu={showBurgerMenu}
									setShowBurgerMenu={setShowBurgerMenu}
									smoothTo={smoothTo}
									featuresRef={featuresRef}
									pricingRef={pricingRef}
									contactsRef={contactsRef}
								/>
							}
						/>
						<Route path="/bind" element={<Bind />} />
					</Routes>
					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default App;
