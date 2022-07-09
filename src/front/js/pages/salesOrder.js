import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SalesOrder = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [salesId, setSalesId] = useState(store.salesId)


    let salesData = {};

    function findSO() {
        let filterSO = store.sales_orders.filter((element, index) => {
            return element.id == salesId;
        })
        salesData = filterSO[0];
        return filterSO;
    }
    findSO();

    let auxArr = [];
    function mapWOs() {
        let mappedWOs = salesData.WO.map((element, index) => {
            return (
                <div key={index}>
                    <div>{element.WO_number}</div>
                    <div>{element.product_code}</div>
                    <div>{element.product_description}</div>
                    <div>{element.order_quantity}</div>
                    <div>{element.WO_status}</div>
                    <div>{element.comments}</div>
                    <div>{element.product_process_code}</div>
                </div>
            )
        })
        return mappedWOs
    }



    return (
        <div className="container-fluid planningContainer">
            <div>
                <div>client</div>
                <div>{salesData.client}</div>
                <div>Sales order number</div>
                <div>{salesData.sales_order_number}</div>
                <div>Order placement date</div>
                <div>{salesData.order_placement_date}</div>
                <div>Order acceptance date</div>
                <div>{salesData.order_acceptance_date}</div>
                <div>Order requested date</div>
                <div>{salesData.order_request_date}</div>
                <div>Order completion date</div>
                <div>{salesData.order_completion_date}</div>
                <div>Order ETA</div>
                <div>{salesData.order_ETA}</div>
                <div>Order status</div>
                <div>{salesData.order_status}</div>
                <div>Payment method</div>
                <div>{salesData.payment_method}</div>
                <div>Payment status</div>
                <div>{salesData.payment_status}</div>
            </div>
            <div>
                {mapWOs()}
            </div>
        </div>

    );
};

SalesOrder.propTypes = {
    match: PropTypes.object
};
