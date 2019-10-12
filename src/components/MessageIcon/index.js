import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Svg = styled.svg`
  path {
    fill: #4593ff;
    transition: all 0.3s;
  }
  :hover {
    cursor: pointer;
    path {
      fill: white;
    }
  }
`;
const MessageIcon = ({ width, color, ...rest }) => {
  return (
    <Svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="comment"
      role="img"
      width={width || 25}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...rest}
    >
      <path
        fill={color || "#4593FF"}
        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
      ></path>
    </Svg>
  );
};
MessageIcon.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string
};
export default MessageIcon;
