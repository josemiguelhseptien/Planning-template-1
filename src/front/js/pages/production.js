import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Production = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="container-fluid planningContainer">
                <div className="d-flex">
                    <div className="sideBar">
                        <button className="side_btn btn btn-secondary" ><h6><i className="fas fa-clipboard"></i></h6></button>
                        <button className="side_btn btn btn-secondary" ><h6><i className="fas fa-clipboard"></i></h6></button>
                        <button className="side_btn btn btn-secondary" ><h6><i className="fas fa-clipboard"></i></h6></button>

                    </div>
                    <div className=" drawingboard">
                        <div className="card">
                            <div className="card-header">button</div>
                            <div className="card-body"> Production</div>
                            <div className="card-body"> Production log</div>
                            <div className="card-body"> Production historical log with edit capability</div>
                            <div className="card-body"> Production ghan chart for WO + for several WOs</div>
                            <div className="card-body"> Production resourse page// creation and add operations</div>
                            <div className="card-body"> Production machine capability page</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Production.propTypes = {
    match: PropTypes.object
};