import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const CreateSalesOrder = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const CreateSalesOrder = {
        id: 1,
        client: "FIRST",
        sales_order_number: "SO number",
        WO: "WO number",
        product_code: 2022,
        product_description: "my product 1 60ct",
        order_quantity: 20000,
        order_placement_date: "05 / 05 / 2022",
        order_acceptance_date: "05 / 07 / 2022",
        order_request_date: "07 / 07 / 2022",
        order_ETA: "08 / 07 / 2022",
        order_completion_date: "08 / 07 / 2022",
        order_process_code: 5,
        order_status: "in process",
        comments: "materials were pending to begin the order",
        blending: "completed",
        compression: "in progress",
        encapsulation: "",
        blistering: "",
        bottling: "",
        packaging: "",
        powder: "",
    }

    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <div>Create Sales Order</div>
                </div>
                <div>Document header</div>
            </div>
        </div>


    );
};

CreateSalesOrder.propTypes = {
    match: PropTypes.object
};