/** @format */

import React, { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import robot from "../../assets/robot.png";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
type HeaderProps = {
	smoothTo: (title: string) => void;
	showBurgerMenu: boolean;
	setShowBurgerMenu: (bool: boolean) => void;
};
const Header: FC<HeaderProps> = ({
	smoothTo,
	showBurgerMenu,
	setShowBurgerMenu,
}) => {
	const navigate = useNavigate();
	const navItems = [
		{ id: 0, title: "Features" },
		{ id: 1, title: "Pricing" },
		{ id: 2, title: "Contacts" },
	];
	const [bg, setBg] = React.useState<boolean>(false);
	const listenScrollEvent = () => {
		if (window.scrollY > 0) {
			setBg(true);
		} else {
			setBg(false);
		}
	};
	const handleShowBurgerMenu = (bool: boolean) => {
		setShowBurgerMenu(bool);
	};

	const handleClickNavBurgerItem = (title: string) => {
		setShowBurgerMenu(false);
		smoothTo(title);
	};
	React.useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
	});
	return (
		<div className={`header ${bg && "header--bg"}`}>
			<div onClick={() => navigate("/")} className="header__logo">
				<img src={robot} alt="logo" />
				<div className="header__logo_col">
					<span>Nonamebot</span>
				</div>
			</div>
			<div className="header__nav">
				{navItems &&
					navItems.map((navItem, idx) => (
						<div
							onClick={() => smoothTo(navItem.title)}
							key={`${navItem.id}:${idx}`}
							className="header__nav_item"
						>
							{navItem.title}
						</div>
					))}
			</div>
			<div className="header__button">
				<button
					onClick={() => navigate("/bind")}
					className="custom_button custom_button--primary header__dashboard_link"
				>
					DASHBOARD
				</button>
			</div>
			<div
				onClick={() => handleShowBurgerMenu(!showBurgerMenu)}
				className="header__burger"
			>
				{!showBurgerMenu ? (
					<GiHamburgerMenu fill="rgb(50, 106, 202)" size={30} />
				) : (
					<AiOutlineClose fill="rgb(50, 106, 202)" size={30} />
				)}
			</div>

			<div
				className={`burger__menu ${showBurgerMenu && "burger__menu--opened"}`}
			>
				<div className="burger__menu_nav">
					{navItems &&
						navItems.map((nav, idx) => (
							<div
								onClick={() => handleClickNavBurgerItem(nav.title)}
								key={`${nav.id}:${idx}`}
								className="burger__menu_nav_item"
							>
								{nav.title}
							</div>
						))}
				</div>
				<button className="custom_button custom_button--primary header__dashboard_link">
					DASHBOARD
				</button>
			</div>
		</div>
	);
};

export default Header;
