import React from "react";
import "./1.css";
import { NavBar } from "../../../Navbar";

function Accounts_4() {
  const img_path = "/images/aptm-4.jpg";
  const name = "750,000RentedDubai-InternationalCity";
  const price = "750,000";
  const status = "Rented";
  const location = "Dubai-International City";
  const dewa_bill = "/images/DEWA_bill_1.jpg";
  const etisalat_bill = "/images/Etisalat_bill.webp";
  const gas_bill = "/images/gas_bill.jpg";

  return (
    <>
      <NavBar />
      <div
        className="wallPaperPic"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.779) 5%, rgba(255,255,255,0) 63%), url(${img_path})`,
        }}
      >
        <div className="down_content">
          <p style={{ fontSize: `24px` }}>
            <b>{location}</b> <br />
            <b>AED {price}</b>
          </p>
          <p className="badge">{status}</p>
        </div>
      </div>

      <div className="billsGrid">
        <div className="bill">
          <p>DEWA Bill</p>
          <img src={dewa_bill}></img>
        </div>
        <div className="bill">
          <p>Gas Bill</p>
          <img src={gas_bill}></img>
        </div>
        <div className="bill">
          <p>Etiasalat Bill</p>
          <img src={etisalat_bill}></img>
        </div>
      </div>
    </>
  );
}

export default Accounts_4;
