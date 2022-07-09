import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MasterData = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">

            <div className="container-fluid planningContainer">
                <div className="d-flex justify-content-between">
                    <div className="sideBar">
                        <button className="side_btn btn btn-secondary" ><h6><i className="fas fa-clipboard"></i></h6></button>
                        <button className="side_btn btn btn-secondary" ><h6><i className="fas fa-clipboard"></i></h6></button>
                        <button className="side_btn btn btn-secondary" ><h6><i className="fas fa-clipboard"></i></h6></button>

                    </div>
                    <div className=" drawingboard  justify-content-center">
                        <div className="card">
                            <div className="card-header">button</div>
                            <div className="card-body"> Master Data</div>
                            <div className="card-body"> product process code</div>
                            <div className="card-body"> product master</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MasterData.propTypes = {
    match: PropTypes.object
};