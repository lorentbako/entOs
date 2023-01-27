import React from "react";
import styles from "../Styles/CardCompanies.module.css";

const CardCompanies = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainText}>Company: {props.company}</div>
      <div className={styles.smallText}>Shipments: {props.shipment}</div>
    </div>
  );
};

export default CardCompanies;
