import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styleImage from "../images/bg.png";
const words = [
  "Full stack Developer",
  "Javascript Developer",
  "Python Developer",
];

const Body = () => {
  const pRef = useRef();

  useEffect(() => {
    const typed = new Typed(pRef.current, {
      strings: words,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      cursorChar: "|",
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        background: "rgb(0, 0, 33)",
        width: "100%",
        color: "white",
        padding: "10% 0%",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "190px",
          paddingRight: "250px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          <div
            style={{
              fontSize: "3rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <div>Hi, My name is </div>
            <div style={{ color: "rgb(170, 107, 228)" }}>Suman Mandal</div>
            <div>and I am a</div>
            <div>passionate</div>
            <div style={{ color: "rgb(170, 107, 228)" }}>
              <span style={{ whiteSpace: "pre" }} ref={pRef}>
                {" "}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                // border: "2px solid white",
                background: "#6f42c1",
                borderRadius: "4px",
              }}
            >
              Download Resume
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                // border: "2px solid white",
                background: "#6f42c1",
                borderRadius: "4px",
              }}
            >
              Visit Github
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={styleImage} alt={""} width={300} height={300} />
        </div>
      </section>
      {/* <div
        style={{
          width: "100%",
          height: "1.2px",
          background: "#9c97f1",
          marginTop: "20vh",
          marginBottom:"0px"
        }}
      ></div> */}
    </div>
  );
};

export default Body;
