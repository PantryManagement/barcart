import React from "react";
import UserBarCard from "./UserBarCard.jsx";
import styles from "../scss/userbardeck.scss";
/**
 * Simply renders list of user inventory. Will exclude all inventory of "0"
 */
export default function UserBarCardDeck(props) {
  
  let stock = [];
  if (props.userBar) {
    stock = props.userBar.filter((ele) => {
      return parseInt(ele.in_stock) !== 0;
    });
  }
  return (
    <div className="user-bar-card-deck">
      {!stock ? (
        <>loading...</>
      ) : (
        stock.map((ele, i) => {
          return <UserBarCard key={i} type={ele.ingredient} family={ele.family} currentStock={ele.in_stock} unit={ele.units} />;
        })
      )}
    </div>
  );
}
