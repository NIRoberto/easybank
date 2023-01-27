import React from "react";

import  "../App.css"
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = [
    {
      image: "/images/image-currency.jpg",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      desc: "THe world is getting smaller and we're becoming more mobile. So why be forced to only receive money in a single...",
    },
    {
      image: "/images/image-restaurant.jpg",
      author: "Wilson Hutton",
      title: "Treat yourself without waorrying about money",
      desc: "Our simple budgeting feature allows you to separate out you spending and set realistinlimits each month. That means you...",
    },
    {
      image: "/images/image-plane.jpg",
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever yo go",
      desc: "We want you to enjoy your travel this is why we don't charge any fees on purchases while you're abroad we'll even show you ...",
    },
    {
      image: "/images/image-restaurant.jpg",
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are no live!",
      desc: "After a lot of hard work by the whole team, we're excites to launc our closed beta. it's easy to request an invite through the site...",
    },
  ];
  return (
    <div className="blog">
      <h2>Latest Articles</h2>
      <div className="card">
        {blogs.map((blog,index) => {
          return <BlogCard key={index} data={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
