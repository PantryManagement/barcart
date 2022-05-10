import React from "react";
import styles from "../scss/userbarcard.scss";

export default function UserBarCard(props) {
  return (
    <div className="user-bar-card">
      <div className="user-bar-design-block">
        <p className="user-bar-text user-bar-name">{props.type}</p>
      </div>
      <div>
        <p className="user-bar-text user-bar-type">
          <b>Type:</b> {props.family}
        </p>
        <p className="user-bar-text user-bar-stock">
          <b>Current Stock:</b> {props.currentStock} <span>{props.unit}</span>
        </p>
      </div>
    </div>
  );
}
