import React from "react";

const Card = ({ data }) => {
  const { image, title, desc } = data;

  return (
    <div>
      <img src={image} alt="Icon" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
