import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SalesOrderCard } from "../component/salesOrderCard";

export const Sales = () => {
    const { store, actions } = useContext(Context);
    const [operationType, setoperationType] = useState("open")
    const [displayType, setDisplayType] = useState(true)
    const [viewType, setViewType] = useState("month")
    const [results, setResults] = useState(store.salesOrders);


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


    function mapSalesOrders() {
        let mappedArr = results.map((salesOrders, index) => {
            let componentCard = (<SalesOrderCard key={index} SO={salesOrders} />)
            return componentCard
        })
        return mappedArr
    }





    return (
        <div className="container-fluid planningContainer">
            <div className="d-flex">
                {/*Side bar code*/}
                <div className="sideBar align-top">
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("open") }} title="open"><h6><i className="fas fa-clipboard"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("completed") }} title="completed"><h6><i className="fas fa-check-square"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("history") }} title="history"><h6><i className="fas fa-book"></i></h6></button>


                </div>


                {/*Drawingboard code*/}

                <div className="card salesCard">
                    <div className="card-header d-flex justify-content-between">
                        <div>
                            {displayType == true ? <button className="btn btn-light" title="change to edit" onClick={(e) => { setDisplayType(false) }}><i className="fas fa-edit"></i></button> : <button className="btn btn-light" title="change to view" onClick={(e) => { setDisplayType(true) }}><i className="fas fa-glasses"></i></button>}
                        </div>

                        <div className="d-flex">
                            <button className="btn btn-light" title="new entry"><i className="fas fa-plus-square"></i></button>
                            <button className="btn btn-light" title="upload file"> <i className="fas fa-upload"></i></button>
                            <button className="btn btn-light" title="download file"> <i className="fas fa-download"></i></button>
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
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <tbody className="salesTd">
                                    <tr>
                                        <td classname="salesTd">Link</td>
                                        <td classname="salesTd">Client</td>
                                        <td classname="salesTd">SO Number</td>
                                        <td classname="salesTd">WO</td>
                                        <td classname="salesTd">Code</td>
                                        <td classname="salesTd">Description</td>
                                        <td classname="salesTd">Quantity</td>
                                        <td classname="salesTd">Placed</td>
                                        <td classname="salesTd">Accepted</td>
                                        <td classname="salesTd">Requested</td>
                                        <td classname="salesTd">Comment</td>
                                    </tr>
                                    {mapSalesOrders()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

Sales.propTypes = {
    match: PropTypes.object
};