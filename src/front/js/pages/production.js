import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Production = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            Production
        </div>
    );
};

Production.propTypes = {
    match: PropTypes.object
};