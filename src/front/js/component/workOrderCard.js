import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.css";
import "../../styles/index.css";



export const WorkOrderCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid ">
            <Link onClick={() => { actions.setSalesId(props.workOrder.id), console.log(store.salesId) }} className="list-group-item  list-group-item-action" to={{
                pathname: `/salesorder/${props.workOrder.id}`,
                state: props.workOrder,
            }}>some WO <button>{props.workOrder.id}</button></Link>

        </div>

    );
};

WorkOrderCard.propTypes = {
    match: PropTypes.object,
};

