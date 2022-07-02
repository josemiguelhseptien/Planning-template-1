import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Projections = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            Projections
        </div>
    );
};

Projections.propTypes = {
    match: PropTypes.object
};