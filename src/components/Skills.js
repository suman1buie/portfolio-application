import React from "react";
import ProgressBar from "../UtilsComponents/ProgressBar";

const Skills = () => {
  return (
    <div
      style={{
        width: "100%",
        paddingBottom:"5%"
      }}
    >
      <div
        style={{
          fontWeight: "400",
          fontSize: "2.5rem",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        My Skills
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            gap: "50px",
          }}
        >
          <div
            style={{ display: "flex", width: "50%", flexDirection: "column" }}
          >
            <div
              style={{
                textAlign: "start",
                marginBottom: "0.5rem",
                fontWeight: "800",
                lineHeight: "1.2",
                fontSize: "1.3rem",
              }}
            >
              Coding skills
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ textAlign: "start" }}>JavaScript</div>
              <div>
                <ProgressBar percent={90} color={"#6f42c1"} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ textAlign: "start" }}>JavaScript</div>
              <div>
                <ProgressBar percent={92} color={"#6f42c1"} />
              </div>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ textAlign: "start" }}>JavaScript</div>
              <div>
                <ProgressBar percent={90} color={"#6f42c1"} />
              </div>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ textAlign: "start" }}>JavaScript</div>
              <div>
                <ProgressBar percent={79} color={"#6f42c1"} />
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", width: "50%", flexDirection: "column" }}
          >
            <div
              style={{
                textAlign: "start",
                marginBottom: "0.5rem",
                fontWeight: "800",
                lineHeight: "1.2",
                fontSize: "1.3rem",
              }}
            >
              Coding skills
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ textAlign: "start" }}>JavaScript</div>
              <div>
                <ProgressBar percent={86} color={"#6f42c1"} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ textAlign: "start" }}>JavaScript</div>
              <div>
                <ProgressBar percent={80} color={"#6f42c1"} />
              </div>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ textAlign: "start" }}>JavaScript</div>
              <div>
                <ProgressBar percent={100} color={"#6f42c1"} />
              </div>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
