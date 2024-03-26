import React from "react";
import "../styles/DeviceCard.css";

const DeviceCard = ({ phone }) => {
  return (
    <div>
      <div className="card-container">
        {phone.properties && phone.properties.grade && (
          <div className="grade">{phone.properties.grade}</div>
        )}
        <div className="specifications">
          {phone.imgUrl ? (
            <img className="device-image" src={phone.imgUrl} alt={phone.name} />
          ) : (
            <p>No Image</p>
          )}
          {phone.name && (
            <div className="name">
              <p>{phone.name}</p>
            </div>
          )}
          {phone.properties &&
            phone.properties.carrier &&
            phone.properties.storage && (
              <p className="carrier-storage">
                {phone.properties.carrier} | {phone.properties.storage}
              </p>
            )}
        </div>
        {phone.amount && (
          <div>
            <div className="price-title">
              <p>Unit Price</p>
            </div>
            <div className="price">
              <p>${phone.amount}</p>
            </div>
          </div>
        )}

        {phone.properties && phone.quantity && (
          <div className="quantity">
            <p>{phone.quantity} Available</p>
          </div>
        )}

        <button className="buy-button">BUY</button>
      </div>
    </div>
  );
};

export default DeviceCard;
