import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);




	return (
		<div className="container-fluid">
			<div className="homeDisplay">
				<div className="d-flex justify-content-center">


					{/*Planning card*/}
					<div className="homeCard card homeCardHover">
						<Link className="home-card-body" to="/planning">
							<div className="card-body">
								<div className="d-flex justify-content-center"><h1><i className="fas fa-pen-square"></i></h1></div>
								<div className="d-flex justify-content-center"><h5 className="card-title">Planning</h5></div>
							</div>
						</Link>
					</div>


					{/*Production card*/}
					<div className="homeCard card homeCardHover">
						<Link className="home-card-body" to="/production">
							<div className="card-body">
								<div className="d-flex justify-content-center"><h1><i className="fas fa-cogs"></i></h1></div>
								<div className="d-flex justify-content-center"><h5 className="card-title">Production</h5></div>
							</div>
						</Link>
					</div>


					{/*Master data card*/}
					<div className="homeCard card homeCardHover">
						<Link className="home-card-body" to="/masterdata">
							<div className="card-body">
								<div className="d-flex justify-content-center"><h1><i className="fas fa-database"></i></h1></div>
								<div className="d-flex justify-content-center"><h5 className="card-title">Master Data</h5></div>
							</div>
						</Link>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					{/*KPIs card*/}
					<div className="homeCard card homeCardHover">
						<Link className="home-card-body" to="/kpis">
							<div className="card-body">
								<div className="d-flex justify-content-center"><h1><i className="fas fa-chart-pie"></i></h1></div>
								<div className="d-flex justify-content-center"><h5 className="card-title">KPIs</h5></div>
							</div>
						</Link>
					</div>
					{/*Sales orders card*/}
					<div className="homeCard card homeCardHover">
						<Link className="home-card-body" to="/sales">
							<div className="card-body">
								<div className="d-flex justify-content-center"><h1><i className="fas fa-shopping-cart"></i></h1></div>
								<div className="d-flex justify-content-center"><h5 className="card-title">Sales orders</h5></div>
							</div>
						</Link>
					</div>
					{/*projections card*/}
					<div className="homeCard card homeCardHover">
						<Link className="home-card-body" to="/projections">
							<div className="card-body">
								<div className="d-flex justify-content-center"><h1><i className="fas fa-chart-line"></i></h1></div>
								<div className="d-flex justify-content-center"><h5 className="card-title">Projections</h5></div>
							</div>
						</Link>
					</div>

				</div>




			</div>



		</div>
	);
};

Home.propTypes = {
	match: PropTypes.object
};