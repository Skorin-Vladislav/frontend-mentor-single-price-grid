import React from "react";
import "./Subscription.css";
import Button from "../btn/Button";
function Subscription() {
  return (
    <div className="sub-wrapper">
      <h2>Monthly Subscription</h2>
      <div className="price-block">
        <h1 className="price-value">$29</h1>
        <p className="price-description">per month</p>
      </div>
      <p>Full access for less than $1 a day</p>

      <Button />
    </div>
  );
}

export default Subscription;
