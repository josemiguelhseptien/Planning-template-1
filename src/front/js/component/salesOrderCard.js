import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.css";
import "../../styles/index.css";


function mapWOproperty(name) {
    let auxStr = ''

}


export const SalesOrderCard = (props) => {
    const { store, actions } = useContext(Context);

    function mapWO(name) {
        let mappedWO = props.salesOrder.WO.map((element, index) => {
            return element[name]
        })
        return mappedWO.join(', ')

    }


    return (
        <div className="container-fluid table_hover">
            <div className='d-flex'>

                <div className="table_rows_small centerText">
                    <Link onClick={() => { actions.setSalesId(props.salesOrder.id), console.log(store.salesId) }} to={{
                        pathname: `/salesorder/${props.salesOrder.id}`,
                        state: props.salesOrder,
                    }}><i className="fas fa-external-link-alt"></i>
                    </Link>
                </div>
                <div className="table_rows centerText">{props.salesOrder.client}</div>
                <div className="table_rows centerText">{props.salesOrder.sales_order_number}</div>
                <div className="table_rows centerText">{mapWO('product_code')}</div>
                <div className="table_rows centerText">{mapWO('WO_number')}</div>
                <div className="table_rows centerText">{mapWO('order_quantity')}</div>
                <div className="table_rows centerText">{props.salesOrder.order_placement_date}</div>
                <div className="table_rows centerText">{props.salesOrder.order_status}</div>
                <div className="table_rows ">{mapWO('comments')}</div>
            </div>
        </div>

    );
};

SalesOrderCard.propTypes = {
    match: PropTypes.object,
};

