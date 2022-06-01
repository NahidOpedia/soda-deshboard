import React, { useState } from "react";
import "./Home.css";

// components
import AllOrder from "../Components/AllOrder/AllOrder";
import Deshboard from "../Components/Deshboard/Deshboard";
import AllProduct from "../Components/AllProduct/AllProduct";
import Loan from "../Components/Loan/Loan";
import Offer from "../Components/Offer/Offer";
import Bid from "../Components/Bid/Bid";
import Promotion from "../Components/Promotion/Promotion";
import Transections from "../Components/Transections/Transections";
import Message from "../Components/Message/Message";
import AdPosition from "../Components/AdPosition/AdPosition";
import Settings from "../Components/Settings/Settings";
import Blog from "../Components/Blog/Blog";
import Stuffing from "../Components/Stuffing/Stuffing";
import Report from "../Components/Report/Report";
import Header from "../Components/Header/Header";

function Home() {
  const [route, setRoute] = useState("Deshboard");
  return (
    <div className="container-c">
      <div className="row">
        <div className="col-md-2">
          <div className="sidebar">
            <ul>
              <h5 className="c_name">SHADAMON</h5>
              <li onClick={() => setRoute("Deshboard")}>Deshboard</li>
              <li onClick={() => setRoute("AllProduct")}>All Product</li>
              <li onClick={() => setRoute("AllOrder")}>All Order</li>
              <li onClick={() => setRoute("Loan")}>Loan</li>
              <li onClick={() => setRoute("Offer")}>Offer</li>
              <li onClick={() => setRoute("Bid")}>Bid</li>
              <li onClick={() => setRoute("Promotion")}>Promotion</li>
              <li onClick={() => setRoute("Transections")}>Transections</li>
              <li onClick={() => setRoute("Message")}>Message</li>
              <li onClick={() => setRoute("AdPosition")}>Ad Position</li>
              <li onClick={() => setRoute("Settings")}>Settings</li>
              <li onClick={() => setRoute("Blog")}>Blog</li>
              <li onClick={() => setRoute("Stuffing")}>Stuffing</li>
              <li onClick={() => setRoute("Report")}>Report</li>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          <Header />
          {route === "Deshboard" && <Deshboard />}
          {route === "AllProduct" && <AllProduct />}
          {route === "AllOrder" && <AllOrder />}
          {route === "Loan" && <Loan />}
          {route === "Offer" && <Offer />}
          {route === "Bid" && <Bid />}
          {route === "Promotion" && <Promotion />}
          {route === "Transections" && <Transections />}
          {route === "Message" && <Message />}
          {route === "AdPosition" && <AdPosition />}
          {route === "Settings" && <Settings />}
          {route === "Blog" && <Blog />}
          {route === "Stuffing" && <Stuffing />}
          {route === "Report" && <Report />}
        </div>
      </div>
    </div>
  );
}

export default Home;
