import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const LandingPage = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();




    return (
        <div className="container-fluid">
            Hello World
        </div>
    );
};

LandingPage.propTypes = {
    match: PropTypes.object
};