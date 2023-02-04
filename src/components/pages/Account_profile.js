import React from "react";
import { No_account } from "../Navbar";
import "./Account_profile.css";
import { Button } from "../Button";

function Account_profile() {
  const img_path = "/images/person.jpg";
  const user = "Mohamed";
  return (
    <>
      <No_account />

      <div className="grid-container">
        <div className="photo-container">
          <img src={img_path}></img>
          <div className="userName">{user}</div>
        </div>
        <div className="account_details">
          <div className="email_pass">
            <p
              style={{
                fontSize: "32px",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Account and Password
            </p>
            <p style={{ marginBottom: "20px" }}>
              <b>Email</b>
              <span style={{ marginLeft: "150px" }}>Email@example.com</span>
            </p>
            <p id="p" style={{ display: "flex" }}>
              <b>Password</b>

              <Button
                buttonSize="btn--small"
                buttonColor="light"
                buttonStyle="btn--outline"
              >
                Change password
              </Button>
            </p>
          </div>
        </div>
      </div>
      <div className="down_container">
        <div></div>
        <div className="delete_account">
          <p
            style={{
              fontSize: "32px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            Delete your account
          </p>
          <span
            style={{
              marginBottom: "20px",
            }}
          >
            This will permanently delete your account and all of its data. You
            will not be able to reactivate this account.
          </span>
          <Button
            buttonSize="btn--small"
            buttonColor="red"
            buttonStyle="btn--outline"
          >
            Delete account
          </Button>
        </div>
      </div>
    </>
  );
}

export default Account_profile;
