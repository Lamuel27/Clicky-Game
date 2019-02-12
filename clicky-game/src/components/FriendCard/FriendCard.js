import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="card" onClick={props.clickedImg}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg" && ".png", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default FriendCard;