import React from "react";
import Card from "./Card";
import "../App.css";

const About = () => {
  const aboutData = [
    {
      image: "/images/icon-online.svg",
      title: "Online Banking",
      desc: "Our modern web and mobile aplications allow you to keep track of your finances whether you are in the world.",
    },
    {
      image: "/images/icon-budgeting.svg",
      title: "Simple Budgeting",
      desc: "See exactly where your money goes each month. Recieve notifications when you're close to hitting you limits.",
    },
    {
      image: "/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      desc: "We don't do branches. Open your account in minutes online and start takingcontrol of your finances right away",
    },
    {
      image: "/images/icon-api.svg",
      title: "OpenAPI",
      desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier",
    },
  ];
  return (
    <div className="about">
      <div className="text">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage OPen Banking to turn your bank account into you financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="cards">
        {aboutData.map((data,index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default About;
