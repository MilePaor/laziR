import React from "react";
import styled from "styled-components";

const WeatherDiv = styled.div`
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
  z-index: 3;
`;

const WeatherWidget = () => {
  return <WeatherDiv>nesto</WeatherDiv>;
};

export default WeatherWidget;
