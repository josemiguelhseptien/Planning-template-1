import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LandingPage } from "./pages/landingPage";
import { Planning } from "./pages/planning";
import { Production } from "./pages/production";
import { MasterData } from "./pages/masterdata";
import { KPIs } from "./pages/kpis";
import { Sales } from "./pages/sales";
import { Projections } from "./pages/projections";
import { SalesOrder } from "./pages/salesOrder";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<LandingPage />} path="/" />
                        <Route element={<LandingPage />} path="/landingpage" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Planning />} path="/planning" />
                        <Route element={<Production />} path="/production" />
                        <Route element={<MasterData />} path="/masterdata" />
                        <Route element={<Sales />} path="/sales" />
                        <Route element={<KPIs />} path="/kpis" />
                        <Route element={<Projections />} path="/projections" />
                        <Route element={<SalesOrder />} path="/salesorder/:id" component={SalesOrder} />





                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
