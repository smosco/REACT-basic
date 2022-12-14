import React from "react";
import "../App.css";
import Avatar from "./Avatar";

export default function Profile({ img, name, job, isNew }) {
  return (
    <div className="profile">
      <Avatar img={img} isNew={isNew} />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}
