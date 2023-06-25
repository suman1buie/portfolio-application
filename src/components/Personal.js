import React from "react";
import profile from "../images/ppp.jpeg";

const Personal = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "6% 0%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "80px",
          width: "65%",
        }}
      >
        <div style={{ position: "relative", zIndex: "-10" }}>
          <div
            style={{
              width: "220px",
              height: "280px",
              border: "5px solid #6f42c1",
            }}
          ></div>
          <div>
            <img
              src={profile}
              alt="profile image"
              style={{
                width: "220px",
                height: "280px",
                position: "absolute",
                top: 20,
                left: -20,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4.33%",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "300",
              marginBottom: "0.2rem",
            }}
          >
            Suman Mandal
          </div>
          <div
            style={{
              color: "#6f42c1",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "30px",
            }}
          >
            Full stack developer
          </div>
          <div
            style={{
              color: "#6c757d",
              marginBottom: "0.6rem",
              fontWeight: "300",
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form but the majority
            have suffered alteration in some
          </div>
          <div>
            <ul className="list">
              <li>
                From :<p style={styles.smallFont}>Bankura</p>
              </li>
              <li>
                Lives In :<p style={styles.smallFont}>Bishnupur, Bankura</p>
              </li>
              <li>
                Age :<p style={styles.smallFont}>25</p>
              </li>
              <li>
                Gender :<p style={styles.smallFont}>Male</p>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  smallFont: {
    color: "#6c757d",
    fontWeight: "350",
    marginLeft: "5px",
  },
};

export default Personal;
