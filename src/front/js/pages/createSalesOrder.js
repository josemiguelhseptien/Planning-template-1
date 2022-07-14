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

    var auxObj = {
        WO_number: 0,
        product_code: 0,
        product_description: "",
        order_quantity: 0,
        WO_status: "",
        comments: "",
        product_process_code: 0,
        productPrice: 0,
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

    function mapNewWorkOrder(input, index) {
        let mappednewWorkOrder = newWorkOrder.map((element, index) => {
            return (
                <div className='d-flex form_width' key={index}>
                    <button className="btn btn-light" onClick={() => { subtractWO(index) }}><i className="fas fa-times"></i></button>
                    <input className="form-control " name="WO_number" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="product_code" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="product_description" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="order_quantity" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="WO_status" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="comments" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="product_process_code" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="productPrice" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                    <input className="form-control" name="productCurrency" onChange={(event) => { handleChange(event.target.value, index, event.target.name) }}></input>
                </div>)
        })
        return mappednewWorkOrder
    }

    function handleChange(input, index, name) {
        auxObj = [...newWorkOrder]
        auxObj[index][name] = input
        console.log(newWorkOrder)
        setNewWorkOrder(auxObj)
    }

    function handleSave() {
        newSalesOrder['WO'] = newWorkOrder
        actions.createSalesOrder(newSalesOrder)
    }

    return (
        <div className="container-fluid planningContainer">
            <div className=" drawingboard">
                <div className="card overflow_auto">
                    <div className="card-header"><button className="btn btn-light" title="save" onClick={() => { handleSave() }}><i className="fas fa-save"></i></button></div>
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

                        <div>
                            <div className="d-flex table_header">
                                <div><button className="btn btn-light" onClick={() => { addWO(), console.log(newWorkOrder) }}><i className="fas fa-plus-square"></i></button></div>
                                <div className="form_width">WO</div>
                                <div className="form_width">Product code</div>
                                <div className="form_width">Description</div>
                                <div className="form_width">Quantity</div>
                                <div className="form_width">Status</div>
                                <div className="form_width">Comments</div>
                                <div className="form_width">Process code</div>
                                <div className="form_width">Unit price</div>
                                <div className="form_width">Currency</div>
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
