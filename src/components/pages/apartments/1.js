//250,000RentedDubai-Businessbay-1

import React from "react";
import { NavBar } from "../../Navbar";
import "./1.css";
import { Button } from "../../Button";

function Apt1() {
  const img_path = "/images/aptm-1.jpg";
  const status = "Rented";

  return (
    <>
      <NavBar />
      {/* <h1>250,000RentedDubai-Businessbay-1</h1> */}
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
          <Button id="Button">Contract</Button>
          <Button id="Button">Accounts</Button>
        </div>
      </div>
    </>
  );
}

export default Apt1;
