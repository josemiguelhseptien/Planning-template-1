import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CreateSalesOrder = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [newSalesOrder, setNewSalesOrder] = useState(
        {
            id: 0,
            client: "",
            sales_order_number: "",
            order_placement_date: "",
            order_acceptance_date: "",
            order_request_date: "",
            order_ETA: "",
            order_completion_date: "",
            order_status: "",
            payment_method: "",
            payment_status: "",
            WO: [
                {
                    WO_number: 0,
                    product_code: 0,
                    product_description: "",
                    order_quantity: 0,
                    WO_status: "",
                    comments: "",
                    product_process_code: 0,
                    productPrice: 0,
                    productCurrency: "USD"
                },
            ],
        }
    )


    return (
        <div className="container-fluid planningContainer">
            <div className=" drawingboard">
                <div className="card">
                    <div className="card-header">button</div>
                    <div className="card-body">
                        <div>client</div>
                        <div><input></input></div>
                        <div>Sales order number</div>
                        <div><input></input></div>
                        <div>Order placement date</div>
                        <div><input></input></div>
                        <div>Order acceptance date</div>
                        <div><input></input></div>
                        <div>Order requested date</div>
                        <div><input></input></div>
                        <div>Order completion date</div>
                        <div><input></input></div>
                        <div>Order ETA</div>
                        <div><input></input></div>
                        <div>Order status</div>
                        <div><input></input></div>
                        <div>Payment method</div>
                        <div><input></input></div>
                        <div>Payment status</div>
                        <div><input></input></div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    );
};

CreateSalesOrder.propTypes = {
    match: PropTypes.object
};
