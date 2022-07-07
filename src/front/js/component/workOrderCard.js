import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const WorkOrderCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <tr className="salesTd">
            <td className="salesTd"><Link className="removeLink" to={{ pathname: `/salesorder/${props.WO.id}`, state: props.WO, }}><i className="fas fa-external-link-alt"></i></Link></td>
            <td className="salesTd">{props.WO.client}</td>
            <td className="salesTd">{props.WO.sales_order_number}</td>
            <td className="salesTd">{props.WO.WO_number}</td>
            <td className="salesTd">{props.WO.product_code}</td>
            <td className="salesTd">{props.WO.product_description}</td>
            <td className="salesTd">{props.WO.order_quantity}</td>
            <td className="salesTd">{props.WO.order_placement_date}</td>
            <td className="salesTd">{props.WO.order_acceptance_date}</td>
            <td className="salesTd">{props.WO.order_request_date}</td>
            <td className="salesTd">{props.WO.comments}</td>
        </tr>
    );
};

WorkOrderCard.propTypes = {
    match: PropTypes.object
};