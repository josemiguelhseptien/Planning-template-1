import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.css";
import "../../styles/index.css";



export const SalesOrderCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid ">
            <Link onClick={() => { actions.setSalesId(props.salesOrder.id), console.log(store.salesId) }} className="list-group-item  list-group-item-action" to={{
                pathname: `/salesorder/${props.salesOrder.id}`,
                state: props.salesOrder,
            }}>some link</Link>
        </div>

    );
};

SalesOrderCard.propTypes = {
    match: PropTypes.object,
};

