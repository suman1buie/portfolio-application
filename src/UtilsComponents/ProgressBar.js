import React from "react";

const ProgressBar = ({ color, percent, size = 1.1 }) => {
  const styles = {
    topWrapper: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      height: `${25 * size}px`,
      border: `2px solid ${color ? color : "blue"}`,
      borderRadius: `${15 * size}px`,
      marginTop: "10px",
      marginBottom: "10px",
    },
    innerWrapper: {
      width: `${percent}%`,
      height: `${17 * size}px`,
      background: color ? color : "blue",
      borderRadius: `${10 * size}px`,
      textAlign: "center",
      marginLeft: `${3 * size}px`,
      marginRight: `${3 * size}px`,
      color: "white",
      fontSize: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.topWrapper}>
      <div style={styles.innerWrapper}>{percent}%</div>
    </div>
  );
};

export default ProgressBar;
