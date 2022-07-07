import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const SalesOrderCard = (props) => {
    const { store, actions } = useContext(Context);

    function handleDisplayArr(arr, key) {
        let aux = ""
        let mapArr = arr.map((element, index) => {
            let c = aux.concat(element[key], ", ")
            aux = c
            return element[key]
        })
        aux = aux.substring(0, aux.length - 2)

        return aux
    }
    handleDisplayArr(props.SO.WO, "WO_number")


    return (
        <tr className="salesTd">
            <td className="salesTd"><Link className="removeLink" to={{ pathname: `/salesorder/${props.SO.id}`, state: props.SO, }}><i className="fas fa-external-link-alt"></i></Link></td>
            <td className="salesTd">{props.SO.client}</td>
            <td className="salesTd">{props.SO.sales_order_number}</td>
            <td className="salesTd">{handleDisplayArr(props.SO.WO, "WO_number")}</td>
            <td className="salesTd">{handleDisplayArr(props.SO.WO, "product_code")}</td>
            <td className="salesTd">{handleDisplayArr(props.SO.WO, "product_description")}</td>
            <td className="salesTd">{handleDisplayArr(props.SO.WO, "order_quantity")}</td>
            <td className="salesTd">{props.SO.order_placement_date}</td>
            <td className="salesTd">{props.SO.order_acceptance_date}</td>
            <td className="salesTd">{props.SO.order_request_date}</td>
            <td className="salesTd">{handleDisplayArr(props.SO.WO, "comments")}</td>

        </tr>
    );
};

SalesOrderCard.propTypes = {
    match: PropTypes.object
};