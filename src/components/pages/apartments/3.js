//750,000RentedDubai-Businessbay-1

import React from "react";
import { NavBar } from "../../Navbar";
import "./1.css";
import { Button } from "../../Button";
import { useNavigate } from "react-router-dom";

function Apt3() {
  const img_path = "/images/aptm-3.jpg";
  const status = "Rented";
  let navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="grid_container">
        <div
          className="gallery_container item1"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.779) 5%, rgba(255,255,255,0) 63%), url(${img_path})`,
          }}
        >
          {/* Should be a link */}
          <h1 className="gallery_button">
            Gallery{" "}
            <img
              className="R-arrow"
              style={{ height: `20px` }}
              src="/right-arrow.png"
            ></img>
          </h1>
        </div>
        <div className="buttons item2">
          <Button id="Button" onClick={() => navigate("contract")}>
            Contract
          </Button>
          <Button id="Button" onClick={() => navigate(`accounts`)}>
            Accounts
          </Button>
        </div>
      </div>
    </>
  );
}

export default Apt3;
