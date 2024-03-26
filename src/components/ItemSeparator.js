import React from "react";

const ItemSeparator = ({ height, width }) => {
  return <div style={{ width, height }} />;
};

ItemSeparator.defaultProps = {
  height: 0,
  width: 0,
};

export default ItemSeparator;
