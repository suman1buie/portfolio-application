import React from "react";
import ExpCard from "../UtilsComponents/ExpCard";

const Pastwork = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: "8%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "75%",
          gap:"50px"
        }}
      >
        {/* <ExpCard /> */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              marginLeft: "15px",
            }}
          >
            Education
          </div>
          <ul>
            <li className="next">
              <ExpCard color={"#6f42c1"} />
            </li>
            <li>
              <ExpCard />
            </li>
            <li>
              <ExpCard />
            </li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              marginLeft: "15px",
            }}
          >
            Experience
          </div>
          <ul>
            <li className="next">
            <ExpCard color={"#6f42c1"} />
            </li>
            <li>
              <ExpCard />
            </li>
            <li>
              <ExpCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pastwork;
