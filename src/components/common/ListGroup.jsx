import React from "react";
const ListGroup = ({
  items,
  currentItem,
  textValueProperty,
  textNameProperty,
  onItemChange,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[textValueProperty]}
          className={
            item === currentItem
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onItemChange(item)}
        >
          {item[textNameProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textValueProperty: "_id",
  textNameProperty: "name",
};

export default ListGroup;
