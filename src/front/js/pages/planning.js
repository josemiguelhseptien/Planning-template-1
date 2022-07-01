import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Planning = () => {
    const { store, actions } = useContext(Context);

    let placeholderArr = ["40000", "40000", "40000"]
    let placeholderArr2 = ["2022", "2022", "2022"]

    function mapPlaceHolderArr1_2() {
        let map1 = placeholderArr.map((element, index) => {
            return (
                <li key={index}><button className="plan_btn2 btn btn-light">
                    <div>some name here</div>
                    <div>{element} - {placeholderArr2[index]}</div>
                    <div>2,000,000 - 3/8"</div> </button></li>

            )
        })
        return map1
    }

    return (
        <div className="container-fluid planningContainer">
            <div className="planningDisplay d-flex">
                {/*Side bar code*/}
                <div className="sideBar align-top">
                    <div className="order-menu-title"><h6><i className="fas fa-square"></i></h6></div>
                    <div className="div-plan-menu-icon">
                        <button className="plan_btn btn btn-secondary"><h6><i className="fas plan-menu-icon fa-blender"></i>Blending</h6></button>
                    </div>
                    <div className="div-plan-menu-icon">
                        <button className="plan_btn btn btn-secondary"><h6><i className="fas plan-menu-icon fa-tablets"></i>Compression</h6></button>
                    </div>
                    <div className="div-plan-menu-icon">
                        <button className="plan_btn btn btn-secondary"><h6><i className="fas plan-menu-icon fa-capsules"></i>Encapsulation</h6></button>
                    </div>
                    <div className="div-plan-menu-icon">
                        <button className="plan_btn btn btn-secondary"><h6><i className="fas plan-menu-icon fa-grip-vertical"></i>Blistering</h6></button>
                    </div>
                    <div className="div-plan-menu-icon">
                        <button className="plan_btn btn btn-secondary"><h6><i className="fas plan-menu-icon fa-prescription-bottle"></i>Bottling</h6></button>
                    </div>
                    <div className="div-plan-menu-icon">
                        <button className="plan_btn btn btn-secondary"><h6><i className="fas plan-menu-icon fa-box"></i>Packaging</h6></button>
                    </div>
                    <div className="div-plan-menu-icon">
                        <button className="plan_btn btn btn-secondary"><h6><i className="fas plan-menu-icon fa-fill"></i>Powder filling</h6></button>
                    </div>
                </div>
                {/*orderMenu code*/}
                <div className="orderMenu align-top">
                    <div className="order-menu-title"><h6><i className="fas fa-th"></i></h6></div>
                    <ul className="list-unstyled">
                        {mapPlaceHolderArr1_2()}
                    </ul>
                </div>
                {/*Drawingboard code*/}
                <div className="drawingboard">Planning drawingboard</div>
            </div>
        </div>
    );
};

Planning.propTypes = {
    match: PropTypes.object
};