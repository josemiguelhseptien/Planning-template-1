import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Planning = () => {
    const { store, actions } = useContext(Context);
    const [viewType, setViewType] = useState("blending")
    const [displayType, setDisplayType] = useState(true)

    let placeholderArr = ["40000", "40000", "40000"]
    let placeholderArr2 = ["2022", "2023", "2024"]

    let blending = ["40000", "40000", "40000"]
    let compression = ["1", "1", "1"]
    let encapsulation = ["2", "2", "2"]
    let blistering = ["3", "3", "3"]
    let bottling = ["4", "4", "4"]
    let packaging = ["5", "5", "5"]
    let powder = ["6", "6", "6"]
    let operations = ["Blender1", "Blender2", "Blender3", "compression1", "compression1", "compression1", "compression1", "encapsulation1", "encapsulation1", "encapsulation1"]

    {/*Custom Calendar*/ }
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthLength = [31, februaryLength, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]



    function mapPlaceHolderArr1_2(arr) {
        let map1 = arr.map((element, index) => {
            return (
                <li className="plan_btn2" key={index}><button className="plan_btn2 btn btn-light">
                    <div>{element} - {placeholderArr2[index]}</div>
                    <div>some name here</div>
                    <div>2,000,000 - 3/8"</div> </button></li>
            )
        })
        return map1
    }
    function mapOperations(arr) {
        let map1 = arr.map((element, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <div>{element} - {placeholderArr2[index]}</div></li>
            )
        })
        return map1
    }

    return (
        <div className="container-fluid planningContainer">
            <div className="planningDisplay d-flex">
                {/*Side bar code*/}
                <div className="sideBar align-top">
                    <button className="plan_btn btn btn-secondary" onClick={(e) => { setViewType("blending") }} title="blending"><h6><i className="fas plan-menu-icon fa-blender"></i></h6></button>
                    <button className="plan_btn btn btn-secondary" onClick={(e) => { setViewType("compression") }} title="compression"><h6><i className="fas plan-menu-icon fa-tablets"></i></h6></button>
                    <button className="plan_btn btn btn-secondary" onClick={(e) => { setViewType("encapsulation") }} title="encapsulation"  ><h6><i className="fas plan-menu-icon fa-capsules"></i></h6></button>
                    <button className="plan_btn btn btn-secondary" onClick={(e) => { setViewType("blistering") }} title="blistering"><h6><i className="fas plan-menu-icon fa-grip-vertical"></i></h6></button>
                    <button className="plan_btn btn btn-secondary" onClick={(e) => { setViewType("bottling") }} title="bottling"><h6><i className="fas plan-menu-icon fa-prescription-bottle"></i></h6></button>
                    <button className="plan_btn btn btn-secondary" onClick={(e) => { setViewType("packaging") }} title="packaging"><h6><i className="fas plan-menu-icon fa-box"></i></h6></button>
                    <button className="plan_btn btn btn-secondary" onClick={(e) => { setViewType("powder") }} title="powder filling"><h6><i className="fas plan-menu-icon fa-fill"></i></h6></button>
                </div>
                {/*orderMenu code*/}
                <div className="orderMenu align-top">
                    <div className="order-menu-title"><h6><i className="fas fa-th"></i>{viewType}</h6></div>
                    <ul className="list-unstyled">
                        {viewType == "blending" ? (mapPlaceHolderArr1_2(blending)) : (null)}
                        {viewType == "compression" ? (mapPlaceHolderArr1_2(compression)) : (null)}
                        {viewType == "encapsulation" ? (mapPlaceHolderArr1_2(encapsulation)) : (null)}
                        {viewType == "blistering" ? (mapPlaceHolderArr1_2(blistering)) : (null)}
                        {viewType == "bottling" ? (mapPlaceHolderArr1_2(bottling)) : (null)}
                        {viewType == "packaging" ? (mapPlaceHolderArr1_2(packaging)) : (null)}
                        {viewType == "powder" ? (mapPlaceHolderArr1_2(powder)) : (null)}
                    </ul>
                </div>
                {/*Drawingboard code*/}
                <div className="drawingboard">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div>
                                {displayType == true ? <button className="btn btn-light" title="change to edit" onClick={(e) => { setDisplayType(false) }}><i className="fas fa-edit"></i></button> : <button className="btn btn-light" title="change to view" onClick={(e) => { setDisplayType(true) }}><i className="fas fa-glasses"></i></button>}
                                <button className="btn btn-light" title="day">day</button>
                                <button className="btn btn-light" title="week">week</button>
                                <button className="btn btn-light" title="month">month</button>
                                <button className="btn btn-light" title="downtime"><i className="fas fa-ban"></i></button>

                            </div>
                            <div>
                                <button className="btn btn-light" title="reset"><i className="fas fa-sync-alt"></i></button>
                                <button className="btn btn-light" title="save"><i className="fas fa-save"></i></button>
                                <button className="btn btn-light" title="post"><i className="fas fa-calendar-check"></i></button>
                            </div>
                        </div>
                        <div className="card-body planningCard">
                            <div>dates</div>
                            {mapOperations(operations)}
                            {mapOperations(operations)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Planning.propTypes = {
    match: PropTypes.object
};