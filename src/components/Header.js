import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          height: "80px",
          background: "rgb(18, 18, 62)",
          color: "white",
          justifyContent: "space-around",
          alignItems: "center",
          fontFamily: "Poppins",
          position:"fixed",
          width:"100%",
          zIindex: "999",
        }}
      >
        <div style={{ fontSize: "1.5rem" }}>Suman's Portfolio</div>
        <div style={{ display: "flex", gap: "40px", fontSize: "1rem" }}>
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Service</a>
          </div>
          <div>
            <a href="#">Projects</a>
          </div>
          <div>
            <a href="#">Contact Me</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
