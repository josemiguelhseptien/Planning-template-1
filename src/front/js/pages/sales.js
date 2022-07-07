import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SalesOrderCard } from "../component/salesOrderCard";
import { WorkOrderCard } from "../component/workOrderCard";


export const Sales = () => {
    const { store, actions } = useContext(Context);
    const [operationType, setoperationType] = useState("open")
    const [displayType, setDisplayType] = useState(true)
    const [viewType, setViewType] = useState("month")
    const [allWO, setAllWO] = useState(store.SO_Orders);

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
    let auxArr = [];

    function mapWO() {
        let mappedArr = allWO.map((element, index) => {
            element.WO.map((subElement, i) => {
                subElement["id"] = element.id;
                subElement["client"] = element.client;
                subElement["sales_order_number"] = element.sales_order_number;
                subElement["order_placement_date"] = element.order_placement_date;
                subElement["order_acceptance_date"] = element.order_acceptance_date;
                subElement["order_request_date"] = element.order_request_date;
                subElement["order_ETA"] = element.order_ETA;
                subElement["order_completion_date"] = element.order_completion_date;
                subElement["order_status"] = element.order_status;
                auxArr.push(subElement)
            })
        })
        let mapAuxArr = auxArr.map((element, index) => {
            let componentCard = (<WorkOrderCard key={index} WO={element} />)
            return componentCard
        })
        return mapAuxArr
    }

    function filterWO(string) {
        let mappedArr = allWO.map((element, index) => {
            element.WO.map((subElement, i) => {
                subElement["id"] = element.id;
                subElement["client"] = element.client;
                subElement["sales_order_number"] = element.sales_order_number;
                subElement["order_placement_date"] = element.order_placement_date;
                subElement["order_acceptance_date"] = element.order_acceptance_date;
                subElement["order_request_date"] = element.order_request_date;
                subElement["order_ETA"] = element.order_ETA;
                subElement["order_completion_date"] = element.order_completion_date;
                subElement["order_status"] = element.order_status;
                auxArr.push(subElement)
            })
        })
        let filterArr = auxArr.filter((salesOrders) => {
            return salesOrders.order_status == string
        })
        let mapFilteredArr = filterArr.map((salesOrders, index) => {
            let componentCard = (<WorkOrderCard key={index} WO={salesOrders} />)
            return componentCard
        })
        return mapFilteredArr
    }



    function mapSalesOrders() {
        let mappedArr = allWO.map((salesOrders, index) => {
            let componentCard = (<SalesOrderCard key={index} SO={salesOrders} />)
            return componentCard
        })
        return mappedArr
    }
    function filterOrders(string) {
        let filterArr = allWO.filter((salesOrders) => {
            return salesOrders.order_status == string
        })
        let mapFilteredArr = filterArr.map((salesOrders, index) => {
            let componentCard = (<SalesOrderCard key={index} SO={salesOrders} />)
            return componentCard
        })
        return mapFilteredArr
    }




    return (
        <div className="container-fluid planningContainer">
            <div className="d-flex">
                {/*Side bar code*/}
                <div className="sideBar align-top">
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("open") }} title="open"><h6><i className="fas fa-clipboard"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("completed") }} title="completed"><h6><i className="fas fa-check-square"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("history") }} title="history"><h6><i className="fas fa-book"></i></h6></button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("openWO") }} title="open WO"><h6><i className="fas fa-clipboard"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("completedWO") }} title="completed WO"><h6><i className="fas fa-check-square"></i></h6></button>
                    <button className="side_btn btn btn-secondary" onClick={(e) => { setoperationType("historyWO") }} title="history WO"><h6><i className="fas fa-book"></i></h6></button>
                </div>
                {/*Drawingboard code*/}
                <div className="card salesCard">
                    <div className="card-header d-flex justify-content-between">
                        <div>
                            {displayType == true ? <button className="btn btn-light" title="change to edit" onClick={(e) => { setDisplayType(false) }}><i className="fas fa-edit"></i></button> : <button className="btn btn-light" title="change to view" onClick={(e) => { setDisplayType(true) }}><i className="fas fa-glasses"></i></button>}
                        </div>
                        <div className="d-flex">
                            <Link className="removeLink" to={{ pathname: `/create_sales_order` }}><button className="btn btn-light" title="new entry"><i className="fas fa-plus-square"></i></button> </Link>
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
                                        <td className="salesTd">Link</td>
                                        <td className="salesTd">Client</td>
                                        <td className="salesTd">SO Number</td>
                                        <td className="salesTd">WO</td>
                                        <td className="salesTd">Code</td>
                                        <td className="salesTd">Description</td>
                                        <td className="salesTd">Quantity</td>
                                        <td className="salesTd">Placed</td>
                                        <td className="salesTd">Accepted</td>
                                        <td className="salesTd">Requested</td>
                                        <td className="salesTd">Comment</td>
                                    </tr>
                                    {operationType == "open" ? (filterOrders("open")) : (null)}
                                    {operationType == "completed" ? (filterOrders("completed")) : (null)}
                                    {operationType == "history" ? (mapSalesOrders()) : (null)}
                                    {operationType == "openWO" ? (filterWO("open")) : (null)}
                                    {operationType == "completedWO" ? (filterWO("completed")) : (null)}
                                    {operationType == "historyWO" ? (mapWO()) : (null)}
                                </tbody>
                            </table>
                        </div>
                    </div>{console.log(auxArr)}
                </div>
            </div>
        </div>

    );
};

Sales.propTypes = {
    match: PropTypes.object
};