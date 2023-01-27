import React from "react";

const BlogCard = ({ data }) => {
  const { image, author, title, desc } = data;
  return (
    <div>
      <img src={image} alt="Blog images" />
      <div className="txt">
        <span>{author}</span>
        <a href="#index">{title}</a>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
