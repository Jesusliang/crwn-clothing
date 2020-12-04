import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
