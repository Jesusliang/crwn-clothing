import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [collectionsState, setCollectionsState] = useState({
    collection: SHOP_DATA,
  });

  const collection = collectionsState.collection;
  console.log(collection);
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherStates }) => (
        <CollectionPreview key={id} {...otherStates} />
      ))}
    </div>
  );
};

export default ShopPage;
