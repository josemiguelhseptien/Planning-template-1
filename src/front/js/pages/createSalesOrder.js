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

        }
    )
    const [newWorkOrder, setNewWorkOrder] = useState([])


    let auxObj = {
        WO_number: 50553,
        product_code: 2023,
        product_description: "my product 1 60ct",
        order_quantity: 23000,
        WO_status: "not started",
        comments: "materials were pending to begin the order",
        product_process_code: 5,
        productPrice: 6.22,
        productCurrency: "USD"
    }

    function addWO() {
        setNewWorkOrder([...newWorkOrder, auxObj]);
    }
    function subtractWO(index) {
        let auxArr = [...newWorkOrder]
        auxArr.splice(index, 1)
        newWorkOrder.length == 0 ? (null) : setNewWorkOrder(auxArr);
    }
    function mapNewWorkOrder() {
        let mappednewWorkOrder = newWorkOrder.map((element, index) => {
            return (
                <div className='d-flex' key={index}>
                    <button onClick={() => { subtractWO(index) }}>X</button>
                    <h3 >{element.WO_number}</h3>
                </div>)
        })
        return mappednewWorkOrder
    }


    return (
        <div className="container-fluid planningContainer">
            <div className=" drawingboard">
                <div className="card">
                    <div className="card-header"><button className="btn btn-light" title="save" onClick={(e) => { console.log(newSalesOrder) }}><i className="fas fa-save"></i></button></div>
                    <div className="card-body">
                        <div className="d-flex">
                            <div>
                                <div className="form-control">Client:</div>
                                <div className="form-control">Sales order number:</div>
                                <div className="form-control">Payment method:</div>
                                <div className="form-control">Payment status:</div>
                                <div className="form-control">Order status:</div>
                            </div>
                            <div>
                                <div><input type='text' className="form-control" name='client' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, client: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Sales order number' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, sales_order_number: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Payment method' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, payment_method: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Payment status' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, payment_status: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Order status' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, order_status: event.target.value }) }}></input></div>
                            </div>

                            <div>
                                <div className="form-control">Order placement date:</div>
                                <div className="form-control">Order acceptance date:</div>
                                <div className="form-control">Order requested date:</div>
                                <div className="form-control">Order completion date:</div>
                                <div className="form-control">Order ETA:</div>
                            </div>
                            <div>
                                <div><input type='text' className="form-control" name='Order placement date' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, order_placement_date: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Order acceptance date' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, order_acceptance_date: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Order requested date' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, order_request_date: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Order completion date' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, order_completion_date: event.target.value }) }}></input></div>
                                <div><input type='text' className="form-control" name='Order ETA' onChange={(event) => { setNewSalesOrder({ ...newSalesOrder, order_ETA: event.target.value }) }}></input></div>
                            </div>
                            <div>
                                <div className="form-control">Upload file:</div>
                                <div><input className="form-control"></input></div>
                                <div className="form-control">Upload file:</div>
                            </div>
                        </div>
                        <br></br>
                        <div className="d-flex">
                            <div><button onClick={() => { addWO(), console.log(newWorkOrder) }}>+</button></div>
                        </div>
                        <div>
                            <div className="d-flex">
                                <div className="form-control">WO</div><div className="form-control">Product</div>
                            </div>
                            <div className="d-flex">
                                <input className="form-control"></input><input className="form-control"></input>
                            </div>
                            {mapNewWorkOrder()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

CreateSalesOrder.propTypes = {
    match: PropTypes.object
};
