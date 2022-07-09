import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SalesOrder = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [salesId, setSalesId] = useState(store.salesId)


    let salesData = {}


    function findSO() {
        let filterSO = store.sales_orders.filter((element, index) => {
            return element.id == salesId
        })
        salesData = filterSO[0]
        return filterSO
    }
    findSO()

    console.log(salesData)




    return (
        <div className="container-fluid planningContainer">
            <div>client</div>
            <div>{salesData.client}</div>
        </div>

    );
};

SalesOrder.propTypes = {
    match: PropTypes.object
};
