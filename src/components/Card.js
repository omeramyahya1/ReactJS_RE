import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ img_path, status, price, location }) => {
  const id = (price + status + location).toString().replaceAll(" ", "");

  // create a new file in the server when a new card is created.

  return (
    <>
      <div className="card-container">
        <div
          className="box"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.779) 5%, rgba(255,255,255,0) 63%), url(${img_path})`,
          }}
        >
          <div className="container_info">
            <p className="badge">{status}</p>
            <Link className="details" to={`/${id}`}>
              Details <img className="R-arrow" src="/right-arrow.png"></img>
            </Link>
          </div>
        </div>
        <div className="profile_info">
          <div class="container__profile__text">
            <h2>{location}</h2>
            <p>
              <b>AED-{price}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
