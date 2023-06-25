import React from "react";

const ExpCard = ({ color }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom:"3%"
      }}
    >
      <div
        style={{
          color: "white",
          padding: "8px 8px 8px 0px",
          background: color?color:"#747474",
          width: "28%",
          borderRadius: "30px 0px 40px 30px",
          paddingLeft: "25px",
        }}
      >
        2010
      </div>
      <div
        style={{
          background: "#f4f5f8",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div style={{ fontSize: "1.25rem", fontWeight: "700" }}>
          Specialize of course
        </div>
        <div
          style={{ color: "#6f42c1", fontSize: "0.8rem", fontWeight: "400" }}
        >
          University of Study
        </div>
        <div style={{ marginTop: "10px", fontWeight: "200" }}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
