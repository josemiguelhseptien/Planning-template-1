import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SalesOrderCard } from "../component/salesOrderCard";

export const Sales = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [allSO, setAllSO] = useState(store.sales_orders);



    function mapSalesOrders(arr) {
        let mappedAllSO = arr.map((element, index) => {
            return <SalesOrderCard key={index} salesOrder={element} />
        })
        return mappedAllSO
    }




    return (
        <div className="container-fluid planningContainer">
            <div className="d-flex justify-content-between">
                <div className="sideBar">a</div>
                <div className=" drawingboard  justify-content-center">
                    <div className="card">
                        <div className="card-header">button</div>
                        <div className="card-body"> {mapSalesOrders(allSO)}</div>



                    </div>



                </div>
            </div>
        </div>

    );
};

Sales.propTypes = {
    match: PropTypes.object
};