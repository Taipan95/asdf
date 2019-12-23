import React, { useState } from "react";
import classNames from "classnames";

interface IDrawerProps {
	isVisible?: boolean;
}
export default function MyDrawer({ isVisible }: IDrawerProps) {
	const handleToggleDrawer = () => {
		setIsVisible(!isVisible);
	};

	const [isVisible, setIsVisible] = useState(false);
	const drawerClasses = classNames("drawer", {
		visible: isVisible
	});
	return (
		<>
			<img
				className="toggle-drawer"
				src="https://via.placeholder.com/30"
				alt="T"
				onClick={handleToggleDrawer}
			/>
		</>
	);
}
