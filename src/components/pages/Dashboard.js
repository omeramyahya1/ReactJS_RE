import React from "react";
import { Card } from "../Card";
import { NavBar } from "../Navbar";
import "./Dashboard.css";

function Dashboard() {
  // could be a function that takes data from database
  // for now this is just a grid of 4 apartments.

  return (
    <>
      <NavBar />

      <div className="grid-container">
        <div className="card-1">
          <Card
            img_path="/images/aptm-2.jpg"
            status={"Rented"}
            price="500,000"
            location="Dubai - JBR"
          />
        </div>
        <div className="card-2">
          <Card
            img_path="/images/aptm-3.jpg"
            status={"Rented"}
            price="750,000"
            location="Dubai - Business bay-1"
          />
        </div>
        <div className="card-3">
          <Card
            img_path="/images/aptm-4.jpg"
            status={"Rented"}
            price="750,000"
            location="Dubai - International City"
          />
        </div>
        <div className="card-4">
          <Card
            img_path="/images/aptm-1.jpg"
            status={"Rented"}
            price="250,000"
            location="Dubai - Business bay-1"
          />
        </div>
        <div className="card-3">
          <Card
            img_path="/images/aptm-4.jpg"
            status={"Rented"}
            price="750,000"
            location="Dubai - International City"
          />
        </div>
        <div className="card-1">
          <Card
            img_path="/images/aptm-2.jpg"
            status={"Rented"}
            price="500,000"
            location="Dubai - JBR"
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
