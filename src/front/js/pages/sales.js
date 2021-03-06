import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SalesOrderCard } from "../component/salesOrderCard";
import { WorkOrderCard } from "../component/workOrderCard";

export const Sales = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [allSO, setAllSO] = useState(store.sales_orders);





    function mapSalesOrders(arr) {
        let mappedAllSO = arr.map((element, index) => {
            return <SalesOrderCard key={index} salesOrder={element} />
        })
        return mappedAllSO;
    }

    let auxArr = [];

    function mapWorkOrders(arr) {
        let mappedAllSO = arr.map((element, index) => {
            let mapWOs = element.WO.map((elm, i) => {
                elm.id = element.id;
                elm.client = elm.id = element.id
                elm.sales_order_number = element.sales_order_number
                elm.order_placement_date = element.order_placement_date
                elm.order_acceptance_date = element.order_acceptance_date
                elm.order_request_date = element.order_request_date
                elm.order_ETA = element.order_ETA
                elm.order_completion_date = element.order_completion_date
                elm.order_status = element.order_status
                elm.payment_method = element.payment_method
                elm.payment_status = element.payment_status
                auxArr.push(elm)
                return <WorkOrderCard key={i} workOrder={elm} />
            })
            return mapWOs
        })
        return mappedAllSO
    }

    const [filterValue, setFilterValue] = useState('Filter')

    return (
        <div className="container-fluid planningContainer">
            <div className="d-flex">
                <div className="sideBar">a</div>
                <div className=" drawingboard">
                    <div className="card">
                        <div className="card-header d-flex">
                            <Link to={{
                                pathname: `/create_sales_order`,
                            }}><button className="btn btn-light" title="save"><i className="fas fa-plus-square"></i></button></Link>
                            {/*Dropdown menu */}
                            <div className="btn-group">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {filterValue}
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" onClick={() => { setFilterValue('Action') }}>Action</li>
                                    <li className="dropdown-item" onClick={() => { setFilterValue('Another') }}>Another action</li>
                                    <li className="dropdown-item" onClick={() => { setFilterValue('Something') }}>Something else here</li>
                                    <li className="dropdown-item" onClick={() => { setFilterValue('Separated') }}>Separated link</li>
                                </ul>
                            </div>

                            <div><input className='form-control'></input></div>
                            <button className="btn btn-light" title="clear search" onClick={() => { setFilterValue('Filter') }}><i className="fas fa-times"></i></button>

                        </div>
                        <div className="d-flex ">
                            <div className="form_width bolded table_rows_small centerText">Link</div>
                            <div className="form_width bolded s_table_head centerText">Client</div>
                            <div className="form_width bolded s_table_head centerText">WO</div>
                            <div className="form_width bolded s_table_head centerText">Product code</div>
                            <div className="form_width bolded s_table_head centerText">Description</div>
                            <div className="form_width bolded s_table_head centerText">Quantity</div>
                            <div className="form_width bolded s_table_head centerText">Comments</div>
                            <div className="form_width bolded s_table_head centerText">Process code</div>
                            <div className="form_width bolded s_table_head centerText">Status</div>

                        </div>
                        <div > {mapSalesOrders(allSO)}</div>
                        <div> {mapWorkOrders(allSO)}</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

Sales.propTypes = {
    match: PropTypes.object
};