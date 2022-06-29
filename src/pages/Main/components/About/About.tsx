
import React, { FC } from "react";
import "./About.scss";
const About: FC = () => {
	return (
		<div className="about">
			<div className="about__content">
				<div className="about__title">We help you get exclusive Supreme items</div>
				
				<div className="about__button">
					<button className="custom_button custom_button--primary">
						Sold out
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
