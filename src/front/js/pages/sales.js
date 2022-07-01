import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Sales = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            Sales
        </div>
    );
};

Sales.propTypes = {
    match: PropTypes.object
};