import React from "react";
const Like = ({ onClick, liked }) => {
  let classes = "fa fa-heart";
  classes += liked === true ? "" : "-o";
  return <i className={classes} onClick={onClick}></i>;
};

export default Like;
