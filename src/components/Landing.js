import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <main>
      <div className="text">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. YOur Easybank account will be a
          one-stop-shop for spending, ssaving, budgeting, investing, and much
          more.
        </p>
        <button className="btn">Request Invite</button>
      </div>
      <div className="bg-intro">
        <img src="/images/image-mockups.png" alt="landing mobile images" />
      </div>
    </main>
  );
};

export default Landing;
