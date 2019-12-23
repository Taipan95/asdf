import React, { useState } from "react";
import classNames from "classnames";
import MyDrawer from "./components/MyDrawer";

export default function App() {
	return (
		<div className="App">
			{/* <img
				className="toggle-drawer"
				src="https://via.placeholder.com/30"
				alt="T"
				onClick={handleToggleDrawer}
			/> */}
			<div className={drawerClasses}>
				<img
					className="toggle-drawer"
					src="https://via.placeholder.com/30"
					alt="T"
					onClick={handleToggleDrawer}
				/>
				<hr />
				<div className="navigation">
					<h5>
						<a href="/">Home</a>
					</h5>
					<h5>
						<a href="/">Something</a>
					</h5>
					<h5>
						<a href="/">Something else</a>
					</h5>
				</div>
			</div>
			<div className="content">
				<div className="banner">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut et arcu quis mauris lacinia consectetur in eu lorem.
						Nam nec varius leo. Sed quis lacinia odio. Integer
						cursus et ante eget dictum. Curabitur tempus vel dui eu
						venenatis. Praesent et condimentum nisl. Nam vitae ex
						purus. Ut ultricies mauris vel nibh ornare maximus. Sed
						nibh lectus, malesuada vel facilisis vestibulum,
						ultricies sed mi. Ut luctus tincidunt fermentum. Quisque
						sollicitudin nisi in mauris maximus aliquam. Integer
						faucibus scelerisque mauris ac dapibus. Nunc sed risus a
						turpis lacinia aliquet vel nec mauris. Etiam non dictum
						mauris, sit amet laoreet purus.
					</p>
				</div>
				<div className="banner">
					<p>
						Maecenas eget ipsum a velit malesuada pretium quis non
						nulla. Donec sit amet imperdiet risus. Praesent mattis
						laoreet justo, et rutrum ante iaculis ut. Ut metus
						ligula, sollicitudin vel venenatis vitae, mattis eu dui.
						Maecenas ultrices, augue vitae volutpat laoreet, nisl ex
						auctor lorem, a tempus sem mi sed neque. Aliquam semper
						a elit non gravida. Donec ac arcu sed enim molestie
						consectetur. Phasellus ut hendrerit sem, ac vestibulum
						urna. Suspendisse potenti. Morbi iaculis imperdiet
						tortor, id faucibus velit tristique et. Duis et felis
						libero. Aliquam turpis est, consequat sit amet blandit
						sit amet, condimentum vel orci. Aliquam ut arcu
						ullamcorper, cursus sapien et, molestie massa. Donec
						posuere vitae velit sit amet ultrices. Sed vitae justo
						vel nulla tempor tempus quis nec risus. Nulla nec
						dapibus nisi.
					</p>
				</div>
				<div className="banner">
					<p>
						Interdum et malesuada fames ac ante ipsum primis in
						faucibus. Suspendisse consequat nulla eu tincidunt
						eleifend. Mauris in porttitor arcu. In quis orci a felis
						lacinia rutrum id et ex. Morbi at consectetur sem, nec
						vestibulum lacus. Pellentesque ipsum elit, pellentesque
						tempus condimentum venenatis, pulvinar eget metus. Nulla
						aliquam pulvinar sapien id molestie. Pellentesque
						habitant morbi tristique senectus et netus et malesuada
						fames ac turpis egestas. Quisque nibh sem, aliquam id
						aliquet et, ornare at ante. Cras blandit sapien sit amet
						risus auctor feugiat. Aenean varius, lorem nec elementum
						feugiat, magna purus varius magna, ac fringilla libero
						quam vel mi. Donec sed vulputate est. Nam imperdiet
						lacus at nunc sollicitudin, ut ornare turpis accumsan.
						Mauris diam est, aliquam non semper sit amet, iaculis a
						nunc. Nullam pretium est eu sem efficitur tincidunt.
						Aenean vitae erat sapien. In mollis lorem risus, eu
						ultrices est efficitur in.
					</p>
				</div>
			</div>
		</div>
	);
}
