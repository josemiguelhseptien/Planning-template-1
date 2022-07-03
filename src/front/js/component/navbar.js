import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-between">
			<div className="container-fluid nav-container">
				<Link to="/home">
					<h1 className="navbar-brand mb-0 span"><i className="nav-item fab fa-xing-square"></i></h1>
				</Link>
				<Link to="/landingpage">
					<h1 className="nav-item navbar-brand mb-0 span">Landing Page</h1>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">Sign up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
