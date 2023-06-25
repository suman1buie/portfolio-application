import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        padding: "23px 122px",
        background: "#0e0e1a",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Suman's Portfolio</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div>About</div>
          <div>Service</div>
          <div>projects</div>
          <div>Contact me</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          fontSize:"12px"
        }}
      >
        Copyright © sumanportfolio.com | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
