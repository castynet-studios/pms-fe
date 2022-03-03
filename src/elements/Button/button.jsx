import React from "react";
import sty from "./button.module.scss";
import PropTypes from "prop-types";

function Button({ name, color, radius, bgColor, clickFn }) {
  const styles = {
    color: color,
    borderRadius: radius,
    backgroundColor: bgColor,
  };

  return (
    <button style={styles} className={sty.button} onClick={() => clickFn()}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
