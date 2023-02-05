import React from "react";
import "./1.css";
import { NavBar } from "../../../Navbar";

function Contract_4() {
  const img_path = "/images/aptm-4.jpg";
  const idCard = "/images/IDCard.webp";
  const name = "250,000RentedDubai-Businessbay-1";
  const price = "250,000";
  const status = "Rented";
  const location = "Dubai-Business bay-1";
  const contract_path = "/images/contract_dubai.png";
  const cheque1 = "/images/citi-bank-1.jpg";
  const cheque2 = "/images/emirates ndb.jpg";

  const data = {
    issueDate: "Jan 23rd 2023",
    expDate: "Jan 23rd 2024",
    broker: "Shoba RE Inc.",
    owner: "Mr. Shalhoub ",
  };

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

      <div className="bodyGrid">
        <div className="contractData">
          <div className="ContractPDF">
            <img
              src={contract_path}
              style={{ height: `100%`, width: `100%`, borderRadius: `25px` }}
            ></img>
          </div>
          <div>
            <hr
              style={{
                transform: "rotate(0deg)",
                backgrounColor: "#b3b3b3",
                width: "2px",
                height: "87%",
                alignSelf: "flex-start",
                marginLeft: "50px",
              }}
            ></hr>
          </div>
          <div id="data">
            <div style={{ fontWeight: "bold", fontSize: "26px" }}>
              <p>Issue Date</p>
              <p>Exp. Date</p>
              <p>Office/Broker</p>
              <p>Owner</p>
            </div>
            <div style={{ fontSize: "24px", marginRight: "4em" }}>
              <p>{data.issueDate}</p>
              <p>{data.expDate}</p>
              <p>{data.broker}</p>
              <p>{data.owner}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "5em",
          }}
        >
          <hr
            style={{
              transform: "rotate(0deg)",
              backgrounColor: "#b3b3b3",
              width: "87%",
              height: "2px",
              display: "flex",
              alignSelf: "center",
            }}
          ></hr>
        </div>
        <div className="IdDocs">
          <div>
            <p style={{ fontSize: "26px" }}>Landlord</p>
            <img
              className="idCard"
              src={idCard}
              style={{
                width: `300px`,
                borderRadius: `25px`,
                marginTop: "2em",
                cursor: "pointer",
                boxShadow: "0px 0px 4px black",
              }}
            ></img>
          </div>
          <div>
            <hr
              style={{
                transform: "rotate(0deg)",
                backgrounColor: "#b3b3b3",
                width: "2px",
                height: "100%",
                alignSelf: "flex-start",
                marginLeft: "50px",
              }}
            ></hr>
          </div>
          <div>
            <p style={{ fontSize: "26px" }}>Tenant</p>
            <img
              className="idCard"
              src={idCard}
              style={{
                width: `300px`,
                borderRadius: `25px`,
                marginTop: "2em",
                cursor: "pointer",
                boxShadow: "0px 0px 4px black",
              }}
            ></img>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "5em",
          }}
        >
          <hr
            style={{
              transform: "rotate(0deg)",
              backgrounColor: "#b3b3b3",
              width: "87%",
              height: "2px",
              display: "flex",
              alignSelf: "center",
            }}
          ></hr>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Payment
          </p>
        </div>
        <div className="payment">
          <div>
            <p>First payment</p>
            <div className="payment_item">
              <div style={{ marginLeft: "5em" }}>
                <div id="payementData">
                  <div>
                    <p>Date</p>
                    <p>Bank</p>
                    <p>From/To</p>
                  </div>
                  <div style={{ marginRight: "5em" }}>
                    <p>Jan 23rd 2023</p>
                    <p>City Bank</p>
                    <p>Tenant/Landlord</p>
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <img src={cheque1}></img>
              </div>
            </div>
            <div className="payment_item">
              <div style={{ marginLeft: "5em" }}>
                <div id="payementData">
                  <div>
                    <p>Date</p>
                    <p>Bank</p>
                    <p>From/To</p>
                  </div>
                  <div style={{ marginRight: "5em" }}>
                    <p>Jan 23rd 2023</p>
                    <p>Emirates NBD</p>
                    <p>Tenant/Landlord</p>
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <img src={cheque2}></img>
              </div>
            </div>
          </div>
          <div>
            <p>Second payment</p>
            <div className="payment_item">
              <div style={{ marginLeft: "5em" }}>
                <div id="payementData">
                  <div>
                    <p>Date</p>
                    <p>Bank</p>
                    <p>From/To</p>
                  </div>
                  <div style={{ marginRight: "5em" }}>
                    <p>Jan 23rd 2023</p>
                    <p>City Bank</p>
                    <p>Tenant/Landlord</p>
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <img src={cheque1}></img>
              </div>
            </div>
            <div className="payment_item">
              <div style={{ marginLeft: "5em" }}>
                <div id="payementData">
                  <div>
                    <p>Date</p>
                    <p>Bank</p>
                    <p>From/To</p>
                  </div>
                  <div style={{ marginRight: "5em" }}>
                    <p>Jan 23rd 2023</p>
                    <p>Emirates NBD</p>
                    <p>Tenant/Landlord</p>
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <img src={cheque2}></img>
              </div>
            </div>
          </div>
          <div>
            <p>Third payment</p>
            <div className="payment_item">
              <div style={{ marginLeft: "5em" }}>
                <div id="payementData">
                  <div>
                    <p>Date</p>
                    <p>Bank</p>
                    <p>From/To</p>
                  </div>
                  <div style={{ marginRight: "5em" }}>
                    <p>Jan 23rd 2023</p>
                    <p>City Bank</p>
                    <p>Tenant/Landlord</p>
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <img src={cheque1}></img>
              </div>
            </div>
            <div className="payment_item">
              <div style={{ marginLeft: "5em" }}>
                <div id="payementData">
                  <div>
                    <p>Date</p>
                    <p>Bank</p>
                    <p>From/To</p>
                  </div>
                  <div style={{ marginRight: "5em" }}>
                    <p>Jan 23rd 2023</p>
                    <p>Emirates NBD</p>
                    <p>Tenant/Landlord</p>
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <img src={cheque2}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contract_4;
