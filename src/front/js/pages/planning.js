import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Planning = () => {
    const { store, actions } = useContext(Context);
    const [operationType, setoperationType] = useState("open")
    const [displayType, setDisplayType] = useState(true)
    const [viewType, setViewType] = useState("month")

    let placeholderArr = ["40000", "40000", "40000"]
    let placeholderArr2 = ["2022", "2023", "2024"]


    let blending = ["40000", "40000", "40000"]
    let compression = ["1", "1", "1"]
    let encapsulation = ["2", "2", "2"]
    let blistering = ["3", "3", "3"]
    let bottling = ["4", "4", "4"]
    let packaging = ["5", "5", "5"]
    let powder = ["6", "6", "6"]
    let operations = ["Blender1", "Blender2", "Blender3", "compression1", "compression1", "compression1", "compression1", "encapsulation1", "encapsulation1", "encapsulation1", "bottling1", "bottling2", "packaging1", "packaging2", "powder1", "powder2"]

    {/*Custom Calendar*/ }
    const today = new Date();
    const thisYear = today.getFullYear()
    const thisMonth = today.getMonth()
    const thisDay = today.getDay()
    const thisDate = today.getDate()
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


    const customYear = today.getFullYear()
    const customMonth = today.getMonth()
    const customDay = today.getDay()
    const customDate = today.getDate()


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let febExtArr = [2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080]
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    function mapPlaceHolderArr1_2(arr) {
        let map1 = arr.map((element, index) => {
            return (
                <li className="plan_btn2" key={index}><button className="plan_btn2 btn btn-light">
                    <div>{element}</div><div>{placeholderArr2[index]}</div></button></li>
            )
        })
        return map1
    }

    let monthArr = []

    for (let i = 1; i <= monthLength[customMonth]; i++) {
        monthArr.push(i)
    }









    return (
        <div className="container-fluid ">
            <div className="d-flex">
                {/*Side bar code*/}
                <div className="sideBar align-top">
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("open") }} title="open"><h6><i className="fas fa-clipboard"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("blending") }} title="blending"><h6><i className="fas side-menu-icon fa-blender"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("compression") }} title="compression"><h6><i className="fas side-menu-icon fa-tablets"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("encapsulation") }} title="encapsulation"  ><h6><i className="fas side-menu-icon fa-capsules"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("blistering") }} title="blistering"><h6><i className="fas side-menu-icon fa-grip-vertical"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("bottling") }} title="bottling"><h6><i className="fas side-menu-icon fa-prescription-bottle"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("packaging") }} title="packaging"><h6><i className="fas side-menu-icon fa-box"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("powder") }} title="powder filling"><h6><i className="fas side-menu-icon fa-fill"></i></h6></button>
                </div>
                {/*orderMenu code*/}


                {/*Drawingboard code*/}

                <div className="card planningCard">
                    <div className="card-header d-flex justify-content-between">
                        <div>
                            {displayType == true ? <button className="btn btn-light" title="change to edit" onClick={(e) => { setDisplayType(false) }}><i className="fas fa-edit"></i></button> : <button className="btn btn-light" title="change to view" onClick={(e) => { setDisplayType(true) }}><i className="fas fa-glasses"></i></button>}
                            <button className="btn btn-light" title="day">day</button>
                            <button className="btn btn-light" title="week">week</button>
                            <button className="btn btn-light" title="downtime"><i className="fas fa-ban"></i></button>
                        </div>

                        <div className="d-flex">
                            <button className="btn btn-light" title="previous month"><i className="fas fa-angle-left"></i></button>
                            <button className="btn btn-light customCalendar d-flex justify-content-center">{weekdays[thisDay]} {months[thisMonth]} {thisDate}, {thisYear}</button>
                            <button className="btn btn-light" title="next month"><i className="fas fa-angle-right"></i></button>

                        </div>
                        <div className="d-flex">
                            <input className="form-control" />
                            <button className="btn btn-light" title="clear search"><i className="fas fa-times"></i></button>

                        </div>
                        <div>
                            <button className="btn btn-light" title="reset"><i className="fas fa-sync-alt"></i></button>
                            <button className="btn btn-light" title="save"><i className="fas fa-save"></i></button>
                            <button className="btn btn-light" title="post"><i className="fas fa-calendar-check"></i></button>
                        </div>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        a
                    </div>
                </div>
                <div className="card statusCard">
                    <div className="card-header d-flex justify-content-between">
                        <div className="d-flex">
                            <input className="form-control" />
                            <button className="btn btn-light" title="clear search"><i className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        a
                    </div>

                </div>

            </div>
        </div>

    );
};

Planning.propTypes = {
    match: PropTypes.object
};