import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = props => {
	const { store, actions } = useContext(Context);
	const [loginInput, setLoginInput] = useState({
		email: "",
		password: "",
	})
	const params = useParams();
	return (
		<div className="container-fluid">
			<br></br>
			<div className="d-flex justify-content-center"><h2>Sign up</h2></div>
			<div className="mb-3">
				<input type="email" className="form-control" value={loginInput.email} onChange={e => { setLoginInput({ ...loginInput, email: e.target.value }) }} placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
			</div>
			<br />
			<div className="mb-3">
				<input type="password" className="form-control" value={loginInput.password} onChange={e => { setLoginInput({ ...loginInput, password: e.target.value }) }} placeholder="Password" id="exampleInputPassword1" />
				<br />
				<button className="btn btn-primary" onClick={e => { console.log(loginInput) }}>Sign up</button>
			</div>
		</div>
	);
};

Signup.propTypes = {
	match: PropTypes.object
};