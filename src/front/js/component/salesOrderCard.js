import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const SalesOrderCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <tr className="salesTd">
            <td className="salesTd"><Link className="removeLink" to={{ pathname: `/salesorder/${props.SO.id}`, state: props.SO, }}><i className="fas fa-external-link-alt"></i></Link></td>
            <td className="salesTd">{props.SO.client}</td>
            <td className="salesTd">{props.SO.sales_order_number}</td>
            <td className="salesTd">{props.SO.WO}</td>
            <td className="salesTd">{props.SO.product_code}</td>
            <td className="salesTd">{props.SO.product_description}</td>
            <td className="salesTd">{props.SO.order_quantity}</td>
            <td className="salesTd">{props.SO.order_placement_date}</td>
            <td className="salesTd">{props.SO.order_acceptance_date}</td>
            <td className="salesTd">{props.SO.order_request_date}</td>
            <td className="salesTd">{props.SO.comments}</td>
        </tr>
    );
};

SalesOrderCard.propTypes = {
    match: PropTypes.object
};