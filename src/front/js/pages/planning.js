import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Planning = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid planningContainer">
            <div className="planningDisplay d-flex">
                <div className="sideBar align-top">
                    {/*Side bar code*/}
                    <div className="div-plan-menu-icon">
                        <div className="plan-vertical-center"><i className="fas plan-menu-icon fa-blender"></i>Blending</div>
                    </div>
                    <div className="div-plan-menu-icon">
                        <div className="plan-vertical-center"><i className="fas plan-menu-icon fa-tablets"></i>Compression</div>
                    </div>
                    <div className="div-plan-menu-icon">
                        <div className="plan-vertical-center"><i className="fas plan-menu-icon fa-capsules"></i>Encapsulation</div>
                    </div>
                    <div className="div-plan-menu-icon">
                        <div className="plan-vertical-center"><i className="fas plan-menu-icon fa-grip-vertical"></i>Blistering</div>
                    </div>
                    <div className="div-plan-menu-icon">
                        <div className="plan-vertical-center"><i className="fas plan-menu-icon fa-prescription-bottle"></i>Bottling</div>
                    </div>
                    <div className="div-plan-menu-icon">
                        <div className="plan-vertical-center"><i className="fas plan-menu-icon fa-box"></i>Packaging</div>
                    </div>
                    <div className="div-plan-menu-icon">
                        <div className="plan-vertical-center"><i className="fas plan-menu-icon fa-fill"></i>Powder filling</div>
                    </div>
                </div>
                {/*Drawingboard code*/}
                <div className="drawingboard">drawingboard</div>
            </div>
        </div>
    );
};

Planning.propTypes = {
    match: PropTypes.object
};